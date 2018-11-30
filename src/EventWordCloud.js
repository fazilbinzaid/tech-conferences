import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  withStyles,
  Table,
  TableCell,
  TableHead,
  Paper,
  Button
} from "@material-ui/core/";
import { firestoreConnect } from "react-redux-firebase";
import { orderBy } from "lodash";
import "typeface-roboto";
import { applyFilter } from "./actions/filterActions";

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

class EventWordCloud extends Component {
  onWordClick = word => {
    this.props.applyFilter(word.text);
  };

  render() {
    const { events, classes } = this.props;
    let eventPopularityMap = [];

    if (events && events.length) {
      for (var i = 0; i < events.length; i++) {
        const eventWords = events[i].name.split(" ");
        for (var j = 0; j < eventWords.length; j++) {
          const duplicateEvent = eventPopularityMap.filter(
            eventData => eventData.text === eventWords[j]
          );
          if (!duplicateEvent.length) {
            eventPopularityMap.push({
              text: eventWords[j],
              value: events[i].popularityIndex
            });
          } else {
            for (var k = 0; k < eventPopularityMap.length; k++) {
              if (eventPopularityMap[k].text === eventWords[j]) {
                eventPopularityMap[k].value += events[i].popularityIndex;
              }
            }
          }
        }
      }
    }

    //keep max of 10 keywords, sorted popularityIndex descending
    if (eventPopularityMap && eventPopularityMap.length) {
      eventPopularityMap = orderBy(eventPopularityMap, "value", "desc").slice(
        0,
        10
      );
    }

    return (
      <Paper className={classes.root}>
        <Table className={classes.table} padding="dense">
          <TableHead className="THeader">
            <TableCell className="Trending">Trending</TableCell>
            {eventPopularityMap &&
              eventPopularityMap.map(word => (
                <TableCell>
                  <Button
                    key={word.text}
                    padding="default"
                    onClick={this.onWordClick.bind(this, word)}
                  >
                    {word.text}
                  </Button>
                </TableCell>
              ))}
          </TableHead>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  events: state.firestore.ordered.events
});

export default compose(
  firestoreConnect([{ collection: "events" }]),
  connect(
    mapStateToProps,
    { applyFilter }
  )
)(withStyles(styles)(EventWordCloud));
