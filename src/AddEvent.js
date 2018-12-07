import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
  keyword: "",
  tags: []
};
const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit
  }
});
class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.keyPress = this.keyPress.bind(this);
  }

  reset = () => {
    this.setState(initialState);
  };

  keyPress(e) {
    if (e.keyCode === 13) {
      const value = e.target.value;
      const keywords = this.state.tags;
      const isKeywordPresent = keywords.find(keyword => {
        return keyword.label.toLowerCase() === value.toLowerCase();
      });

      if (!isKeywordPresent && value !== "") {
        this.setState(state => {
          const tags = keywords;
          const keyword = "";
          const chipDataLength = tags.length;
          const lastChipKey =
            chipDataLength > 0 ? tags[chipDataLength - 1].key : -1;
          tags.push({ key: lastChipKey + 1, label: value.toUpperCase() });
          return { tags, keyword };
        });
      }
    }
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleDelete = data => () => {
    this.setState(state => {
      const tags = [...state.tags];

      const chipToDelete = tags.indexOf(data);
      tags.splice(chipToDelete, 1);
      return { tags };
    });
  };

  handleSubmit = event => {
    const newEvent = this.state;
    if (newEvent.dateFrom) {
      newEvent.dateFrom = new Date(newEvent.dateFrom);
    }
    if (newEvent.dateTo) {
      newEvent.dateTo = new Date(newEvent.dateTo);
    }
    //keyword is a dummy variable that need not be persisted
    delete newEvent.keyword;
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
    const { classes } = this.props;

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
          {this.state.tags.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                onDelete={this.handleDelete(data)}
                className={classes.chip}
              />
            );
          })}
          <TextField
            id="keyword"
            label="Keywords"
            type="text"
            value={this.state.keyword}
            onChange={this.handleChange}
            onKeyDown={this.keyPress}
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
)(withStyles(styles)(AddEvent));
