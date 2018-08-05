import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Conferences
          </Typography>
          <Button color="inherit" className={classes.button} >Button</Button>
          <Button color="inherit" className={classes.button} >Button</Button>
          <Button color="inherit" className={classes.button} >Button</Button>
        

        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
