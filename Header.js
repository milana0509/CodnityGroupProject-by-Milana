import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Home from './Home';
import Code from './Code';
import Info from './Info';

const useStyles = makeStyles((theme) => ({
 
  menuButton: {
    fontFamily: "Times New Roman",
      fontWeight: 700,
      size: "18px",
      color: "#FFFEFE",
      textAlign: "left",
  },

}));

const Code = {
  pathname: '/Code',
  state: { fromDashboard: true }
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#6dcbed' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Milana Website
          </Typography>
          <Button color="inherit"><Link to = {"/Code"} <Redirect to={Code}/> activeStyle={{color:"white"}}> Code </Link></Button>
          <Button color="inherit"><Link to = {"/Info"}>Par mani </Link></Button>
          <Button color="inherit"><Link to = {"/Home"}> Home </Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}