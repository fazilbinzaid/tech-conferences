import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import PropTypes from "prop-types";

import { toggleSnackbar } from "./actions/snackbarActions";
import SearchEvent from "./searchEvent";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },

  search: {
    position: "relative",
    borderRadius: 1,
    background: "#fff",
    "&:hover": {
      backgroundColor: "lighten(rgba(255,0,255,1),50%)"
    },
    marginRight: 10 * 2,
    marginLeft: 0,
    width: "20%",
    paddingLeft: "5px !important",
    left: "-40%"
  },
  searchIcon: {
    width: 4 * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-center",
    marginLeft: "90%"
  }
};

class NavBar extends React.Component {
  handleSnackClose = () => {
    toggleSnackbar("");
  };

  onLogout = () => {
    const { firebase, toggleSnackbar } = this.props;
    firebase.logout().then(() => {
      toggleSnackbar("Logout Successful");
    });
  };

  render() {
    const { classes, auth, open, openLogin, update } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Tech Conferences
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <SearchEvent update={update} />
            </div>
            {auth.uid ? (
              <Button variant="text" className="NavButton" onClick={open}>
                Add Event
              </Button>
            ) : null}
            {!auth.uid ? (
              <Button variant="text" className="NavButton" onClick={openLogin}>
                Login
              </Button>
            ) : null}
            {auth.uid ? (
              <Button
                variant="text"
                className="NavButton"
                onClick={this.onLogout}
              >
                Logout
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  firebase: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  toggleSnackbar: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      auth: state.firebase.auth
    }),
    {
      toggleSnackbar
    }
  )
)(withStyles(styles)(NavBar));
