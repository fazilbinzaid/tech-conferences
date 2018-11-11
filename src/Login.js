import React from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Grid
} from "@material-ui/core";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { toggleSnackbar } from "./actions/snackbarActions";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }

  handleClose = () => {
    this.props.close();
  };

  onSnackClose = () => {
    toggleSnackbar("");
  };

  handleLogin = e => {
    this.setState({ loading: true });
    const { firebase, toggleSnackbar } = this.props;
    const { email, password } = this.state;
    firebase
      .login({
        email,
        password
      })
      .then(() => {
        this.setState({
          email: "",
          password: ""
        });
        toggleSnackbar("Login Successful");
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({
          loading: false
        });
        this.handleClose();
      });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { loading } = this.state;
    return (
      <div>
        <Dialog
          id="loginDialog"
          open={this.props.openLogin}
          onEscapeKeyDown={this.handleClose}
          onBackdropClick={this.handleClose}
          onClose={this.handleClose}
          fullWidth
          aria-labelledby="form-login-title"
        >
          {loading ? (
            <Grid container justify="center">
              <Grid item>
                <DialogContent>
                  <CircularProgress />
                </DialogContent>
              </Grid>
            </Grid>
          ) : (
            <div>
              <DialogTitle id="form-login-title">Login</DialogTitle>
              <DialogContent>
                <TextField
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleLogin} color="primary">
                  Login
                </Button>
              </DialogActions>
            </div>
          )}
        </Dialog>
      </div>
    );
  }
}
Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

const mapStateToProps = () => {};

export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    {
      toggleSnackbar
    }
  )
)(Login);
