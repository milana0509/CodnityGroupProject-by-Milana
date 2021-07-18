import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  content: { paddingTop: "100px" }
});

function Code(props) {
  return (
    <div className='Code'>
        <Typography variant="h5" component="h3">
          You are in Code file
        </Typography>
        <p style={{textAlign: 'left'}}>This is a test text.
        Let's hope for the best.</p>
<button onClick={this.onNavigateHome} className="btn btn-primary">Go to Code</button>
    </div>
  );
}


Code.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Code);