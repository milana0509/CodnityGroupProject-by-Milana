import { withStyles, Typography, Paper }from "@material-ui/core";
import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social_media';

const styles = theme => ({
  root: {
   paddingBottom: "1px",
  },
  footer: {
    backgroundColor: "#f8edeb",
     }
   });

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
    <Paper className={classes.root} elevation={1}>
    </Paper>
        <Typography variant="h5" component="h3">
          This web site is made as an example
        </Typography>
        <Typography component="p">
          @2021 Milana
        </Typography>
        <Social/>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);