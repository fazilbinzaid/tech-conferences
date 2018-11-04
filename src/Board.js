import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { sortBy, orderBy } from "lodash";

import "./styles.css";
import data from "./data.json";

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

// Sorting the array by name key
const rows = sortBy(data, "date");
const totalMarks = {};
// rows.map((row, key) => {
//   console.log("", rows[key]);
//   totalMarks[key] = {
//     rollNumber: row.rollNumber,
//     marks:
//       parseInt(row.marks.Maths) +
//       parseInt(row.marks.Science) +
//       parseInt(row.marks.English)
//   };
// });
// const topper = orderBy(totalMarks, "marks", ["desc"]);
// const topper_rollNumber = topper[0].rollNumber;

function Board(props) {
  const { classes } = props;

  // console.log("total", totalMarks, topper[0].rollNumber);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} padding="dense">
        <TableHead className="THeader">
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Venue</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="TableBody">
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th">
                  <a href={row.url} target="_blank" className="WebsiteLink">
                    {row.name}
                  </a>
                </TableCell>

                <TableCell>{row.date}</TableCell>
                <TableCell>{row.venue}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

Board.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Board);
