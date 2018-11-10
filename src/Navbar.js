import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchEvent from "./searchEvent";
import SearchIcon from '@material-ui/icons/Search';


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
   position: 'relative',
   borderRadius:1 ,
   background:'rgba(255, 0,255, 0.4)' ,
   '&:hover': {
     backgroundColor:'lighten(rgba(255,0,255,1),50%)' ,
   },
   marginRight: 10 * 2,
   marginLeft: 0,
   width: '20%',
   left:'-40%',


 },
 searchIcon: {
   width: 4 * 9,
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'flex-end',
   justifyContent: 'flex-center',
   marginLeft: '90%',
 },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" >
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

		               <SearchEvent update={props.update} />

                 </div>
          <Button variant="flat" className="AddEvent" onClick={props.open}>
            Add Event
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
