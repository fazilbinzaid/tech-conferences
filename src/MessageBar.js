import React, { Component } from "react";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { toggleSnackbar } from "./actions/snackbarActions";
import PropTypes from "prop-types";

class MessageBar extends Component {
  handleSnackClose = () => {
    this.props.toggleSnackbar("");
  };
  render() {
    const { isSnackbarOpen, snackMessage } = this.props;
    return (
      <div>
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleSnackClose}
          message={<span>{snackMessage}</span>}
        />
      </div>
    );
  }
}

MessageBar.propTypes = {
  toggleSnackbar: PropTypes.func.isRequired,
  isSnackBarOpen: PropTypes.bool,
  snackMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isSnackbarOpen: state.snackbar.isSnackbarOpen,
  snackMessage: state.snackbar.snackBarText
});

export default connect(
  mapStateToProps,
  { toggleSnackbar }
)(MessageBar);
