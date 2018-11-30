import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { toggleSnackbar } from "./actions/snackbarActions";

const initialState = {
  dateFrom: Date(),
  dateTo: Date(),
  name: "",
  url: "",
  venue: "",
  description: "",
  popularityIndex: ""
};
class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => {
    this.setState(initialState);
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const newEvent = this.state;
    if (newEvent.dateFrom) {
      newEvent.dateFrom = new Date(newEvent.dateFrom);
    }
    if (newEvent.dateTo) {
      newEvent.dateTo = new Date(newEvent.dateTo);
    }
    //Add a minimum popularity on submit of a new event
    newEvent.popularityIndex = 5;
    const { firestore, toggleSnackbar } = this.props;
    firestore
      .add({ collection: "events" }, newEvent)
      .then(res => {
        toggleSnackbar("Event Added");
      })
      .catch(err => console.log(err));
    this.reset();
    this.handleClose();
  };

  handleClose = () => {
    this.props.close();
  };
  render() {
    return (
      <Dialog
        id="addEventDialog"
        open={this.props.open}
        onEscapeKeyDown={this.handleClose}
        onBackdropClick={this.handleClose}
        onClose={this.handleClose}
        aria-labelledby="form-addevent-title"
        fullWidth
      >
        <DialogTitle id="form-addevent-title">Add Event</DialogTitle>
        <DialogContent>
          <TextField
            id="name"
            label="Event Name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="url"
            label="URL"
            type="text"
            value={this.state.url}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="venue"
            label="Location"
            type="text"
            value={this.state.venue}
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            id="dateFrom"
            label="From"
            type="date"
            value={this.state.dateFrom}
            onChange={this.handleChange}
          />
          <TextField
            id="dateTo"
            label="To"
            type="date"
            value={this.state.dateTo}
            onChange={this.handleChange}
          />
          <TextField
            id="description"
            label="Description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
AddEvent.propTypes = {
  firestore: PropTypes.object.isRequired,
  toggleSnackbar: PropTypes.func.isRequired
};

export default compose(
  firestoreConnect(),
  connect(
    null,
    { toggleSnackbar }
  )
)(AddEvent);
