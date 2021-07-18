import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  content: { paddingTop: "100px" }
});

function Info(props) {
  return (
    <div className='Info'>
        <Typography variant="h5" component="h3">
          Hello, from Info
        </Typography>
        <p style={{textAlign: 'left'}}>This is a test text.
        Let's hope for the best.</p>
    </div>
  );
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);