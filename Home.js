import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';

const styles = theme => ({
  content: { paddingTop: "100px" }
});

const TextTypography = withStyles({
  root: {
    color: "#7da3d4"
  }
})(Typography);

function Home(props) {
  return (
    <div className='Home'>
        <TextTypography variant="h5" component="h3">
          <p>Welcome to the web site!</p>
        </TextTypography>
        <p style={{textAlign: 'left'}}>Not only does coding make you a better
         problem solver but it also <strong>teaches you patience, perseverance, and
         discipline</strong>. Coding pushes you outside of your comfort zone in a good
         way!</p> <p style={{textAlign: 'left'}}><i> Also Problem solving can be relaxing.</i></p>

    <img src={pic1} alt="Coding 1" height={300} width={400} />
    <img src={pic2} alt="Coding 2" height={300} width={400} />
    <p style={{textAlign: 'center'}}><u> Practice make perfection, let's not give up. </u></p>
    <p><img src={pic3} alt="Coding 3" height={300} width={400} />
    <img src={pic4} alt="Coding 4" height={300} width={400} /></p>

    </div>
  );
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);