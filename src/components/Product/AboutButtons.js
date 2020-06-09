import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const buttonStyle = makeStyles({
  button: {
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  },
});

function OtherButtons() {
  const classes = buttonStyle();

  return (
    <Box pt={5}>
      <Grid container justify="space-between">
        <Grid item md={2} lg={1}>
          <Typography variant={'h5'}>
            <Link to="/others" className={classes.button}>
              Other works
            </Link>
          </Typography>
        </Grid>
        <Grid item md={2} lg={1}>
          <Typography variant={'h5'}>
            <Link to="/others" className={classes.button}>
              Other works
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OtherButtons;
