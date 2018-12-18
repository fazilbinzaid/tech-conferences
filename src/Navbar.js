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
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import { fade } from '@material-ui/core/styles/colorManipulator';

import PropTypes from "prop-types";

import { toggleSnackbar } from "./actions/snackbarActions";
import { applyFilter } from "./actions/filterActions";

import SearchEvent from "./searchEvent";

const styles = theme=>( {
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
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.95),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    paddingLeft:'2px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // search: {
  //   position: "relative",
  //   borderRadius: 1,
  //   background: "#fff",
  //   "&:hover": {
  //     backgroundColor: "lighten(rgba(255,0,255,1),50%)"
  //   },
  //   marginRight: "auto",
  //   marginLeft: "auto",
  //   width: "20%",
  //   paddingLeft: "5px !important",
  //   // left: "-40%"
  // },
  // searchIcon: {
  //   width: 4 * 9,
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   fontFamily: "Roboto",
  //   display: "flex",
  //   alignItems: "flex-end",
  //   justifyContent: "flex-center",
  //   marginLeft: "90%"
  // }
});

class NavBar extends React.Component {
  handleFilterReset = () => {
    this.props.applyFilter("");
  };
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
    const { classes, auth, open, openLogin, update, table } = this.props;
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
                {/* <SearchIcon /> */}
              </div>
              <SearchEvent update={update} />
            </div>
            {table.tableFilterText !== "" ? (
              <Button
                variant="text"
                className="NavButton"
                onClick={this.handleFilterReset.bind(this)}
              >
                Reset Filters
              </Button>
            ) : null}
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
  toggleSnackbar: PropTypes.func.isRequired,
  applyFilter: PropTypes.func.isRequired,
  table: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  table: state.table
});
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    {
      toggleSnackbar,
      applyFilter
    }
  )
)(withStyles(styles)(NavBar));
