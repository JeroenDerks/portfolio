import React from 'react';
import { Box, Grid, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cv from 'assets/pdf/cv_jeroenderks.pdf';

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
  font: {
    '@media (max-width:900px)': {
      fontSize: 14,
    },
    '@media (min-width:900px)': {
      fontSize: 20,
    },
  },
});

function OtherButtons() {
  const classes = buttonStyle();

  return (
    <Box>
      <Grid container justify="space-between">
        <Grid item md={2} lg={1}>
          <Typography variant={'h5'} className={classes.font}>
            <a href={cv} download className={classes.button}>
              CV
            </a>
          </Typography>
        </Grid>
        <Grid item md={2} lg={1}>
          <Typography variant={'h5'} className={classes.font}>
            <Link to="/others" className={classes.button}>
              More works
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OtherButtons;
