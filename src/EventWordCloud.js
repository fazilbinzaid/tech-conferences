import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core/";
import WordCloud from "react-d3-cloud";
import { firestoreConnect } from "react-redux-firebase";
import "typeface-roboto";
import { applyFilter } from "./actions/filterActions";

const data = [
  { text: "Hey", value: 1000 },
  { text: "lol", value: 200 },
  { text: "first impression", value: 800 },
  { text: "very cool", value: 1000000 },
  { text: "duck", value: 10 }
];
const fontSizeMapper = word => Math.log2(word.value) * 5;
class EventWordCloud extends Component {
  constructor(props) {
    super(props);
  }
  onWordClick = word => {
    this.props.applyFilter(word.text);
  };

  render() {
    const { events } = this.props;
    const eventPopularityMap =
      events &&
      events.map(event => {
        return { text: event.name, value: parseInt(event.popularityIndex) };
      });
    console.log(eventPopularityMap);
    return (
      <Grid container justify="center">
        <Grid item>
          {eventPopularityMap && eventPopularityMap.length ? (
            <WordCloud
              data={eventPopularityMap}
              fontSizeMapper={fontSizeMapper}
              font="Roboto"
              onWordClick={this.onWordClick.bind(this)}
            />
          ) : null}
        </Grid>
      </Grid>
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
)(EventWordCloud);
