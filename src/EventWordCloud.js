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
    let eventTagMap = [];

    if (events && events.length > 0) {
      for (var i = 0; i < events.length; i++) {
        const eventWords =
          events[i].tags &&
          events[i].tags.length &&
          events[i].tags.map(tag => tag.label);
        if(eventWords && eventWords.length > 0){
          for (var j = 0; j < eventWords.length; j++) {
          //Look for duplicate tags in main event tag map
          const duplicateEvent = eventTagMap.filter(
            eventData => eventData.text === eventWords[j]
          );
          //If the tag has not already been added, created a new entry with count as 1
          if (!duplicateEvent.length) {
            eventTagMap.push({
              text: eventWords[j],
              count: 1
            });
          } else {
            //Increment the count of the tag
            for (var k = 0; k < eventTagMap.length; k++) {
              if (eventTagMap[k].text === eventWords[j]) {
                eventTagMap[k].count += 1;
              }
            }
          }
        }
      }
    }
  }

    //keep max of 10 keywords, sorted by count, descending
    if (eventTagMap && eventTagMap.length) {
      eventTagMap = orderBy(eventTagMap, "count", "desc").slice(0, 10);
    }

    return (
      <div>
        {eventTagMap && eventTagMap.length ? (
          <Paper className={classes.root}>
            <Table className={classes.table} padding="dense">
              <TableHead className="THeader">
                <TableCell className="Trending">Trending</TableCell>
                {eventTagMap.map(word => (
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
        ) : null}
      </div>
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
