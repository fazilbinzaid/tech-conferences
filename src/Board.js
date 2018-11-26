import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
  Paper,
  CircularProgress,
  Grid
} from "@material-ui/core/";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { orderBy } from "lodash";

import "./styles.css";
// import data from "./data.json";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

const columns = [
  { id: "name", label: "Name" },
  { id: "date", label: "Date" },
  { id: "venue", label: "Venue" },
  { id: "description", label: "Description" }
];

// const data = [
//   { text: "Hey", value: 1000 },
//   { text: "lol", value: 200 },
//   { text: "first impression", value: 800 },
//   { text: "very cool", value: 1000000 },
//   { text: "duck", value: 10 }
// ];

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDir: "asc",
      sortCol: columns && columns.length && columns[0]["id"]
    };
  }
  getDate(row) {
    if (!row.dateFrom || !row.dateTo) {
      return;
    }
    const oDateFrom = new Date(row.dateFrom.toMillis());
    const oDateTo = new Date(row.dateTo.toMillis());

    const monthArray = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
    return (
      oDateFrom.getUTCDate() +
      " " +
      monthArray[oDateFrom.getUTCMonth()] +
      " " +
      oDateFrom.getUTCFullYear() +
      " to " +
      oDateTo.getUTCDate() +
      " " +
      monthArray[oDateTo.getUTCMonth()] +
      " " +
      oDateTo.getUTCFullYear()
    );
  }

  onWebsiteClick = e => {
    const { firestore, events } = this.props;
    let updatedPopularity;
    const clickedConfId = e.target.id;

    //Update popularity of clicked event
    const aFilteredConf = events.filter(event => event.id === clickedConfId);
    if (aFilteredConf && aFilteredConf.length) {
      updatedPopularity = aFilteredConf[0]["popularityIndex"] + 100;
    }

    firestore.update(
      { collection: "events", doc: clickedConfId },
      { popularity: updatedPopularity }
    );
  };

  onColumnHeaderClick = columnId => event => {
    if (columnId !== this.state.sortCol) {
      //If the column is clicked on for the first time, just make it active
      this.setState({ sortCol: columnId });
    } else {
      //Toggle the direction based on subsequent column clicks
      if (this.state.sortDir === "asc") {
        this.setState({ sortDir: "desc" });
      } else {
        this.setState({ sortDir: "asc" });
      }
    }
  };

  render() {
    const { classes, events, requesting, list, table } = this.props;
    const { sortDir, sortCol } = this.state;

    //Get rows either from firebase or local mock json, and provide a sorter
    const rows =
      (events &&
        orderBy(
          events.filter(event => event.name.includes(table.tableFilterText)),
          sortCol === "date" ? "dateFrom" : sortCol,
          sortDir
        )) ||
      (list && orderBy(list, sortCol, sortDir));

    return (
      <div>
        {requesting === true ? (
          <div style={{ marginTop: "50px" }}>
            <Grid container styles={{ marginTop: "20px" }} justify="center">
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          </div>
        ) : (
          <Paper className={classes.root}>
            <Table className={classes.table} padding="dense">
              <TableHead className="THeader">
                <TableRow>
                  {columns &&
                    columns.map(col => (
                      <TableCell
                        key={col.id}
                        padding="default"
                        sortDirection={sortDir}
                      >
                        <Tooltip
                          title="Sort"
                          placement={"bottom-start"}
                          enterDelay={300}
                        >
                          <TableSortLabel
                            name={col.id}
                            active={sortCol === col.id ? true : false}
                            direction={sortDir}
                            onClick={this.onColumnHeaderClick(col.id)}
                          >
                            {col.label}
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody className="TableBody">
                {rows &&
                  rows.map(row => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell component="th">
                          <a
                            id={row.id}
                            href={row.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="WebsiteLink"
                            onClick={this.onWebsiteClick.bind(this)}
                          >
                            {row.name}
                          </a>
                        </TableCell>
                        <TableCell>{this.getDate(row) || row.date}</TableCell>
                        <TableCell>{row.venue}</TableCell>
                        <TableCell>{row.description}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Paper>
        )}
      </div>
    );
  }
}

Board.propTypes = {
  classes: PropTypes.object.isRequired,
  requesting: PropTypes.bool.isRequired,
  events: PropTypes.array,
  list: PropTypes.array
};

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  requesting: state.firestore.status.requesting.events,
  table: state.table
});

export default compose(
  firestoreConnect([{ collection: "events" }]),
  connect(mapStateToProps)
)(withStyles(styles)(Board));
