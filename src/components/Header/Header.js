import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './HeaderSketch';
import backgroundImg from 'assets/images/mobile-bg.png';

import { Box, Link, Typography, makeStyles } from '@material-ui/core';
import { AppContext } from 'App';

const buttonStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
};

const fontStyle = makeStyles({
  background: {
    background: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
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

function Header() {
  const {
    actions: { scrollTo },
    state: { aboutRef, mobile, projectRef, padding },
  } = React.useContext(AppContext);

  const classes = fontStyle();

  return (
    <Box
      style={{ height: '100vh' }}
      width={1}
      className={mobile === true ? classes.background : null}
    >
      {mobile === false && (
        <Box position="absolute">
          <P5Wrapper sketch={sketch} paddingLeft={padding.x * 8} />
        </Box>
      )}
      <Box position="absolute" px={padding.x} py={padding.y}>
        <Typography variant="h2">Digital Playgrounds</Typography>
        <Typography variant="subtitle1">
          Welcome to Jeroen's collection of tech experiments and
          digital-physical interfaces
        </Typography>
      </Box>
      <Box position={'absolute'} pl={padding.x} bottom={padding.y * 8}>
        <Typography variant={'h5'} className={classes.font}>
          <Link style={buttonStyle} onClick={() => scrollTo(projectRef)}>
            Projects
          </Link>
        </Typography>
      </Box>
      <Box position={'absolute'} right={padding.x * 8} bottom={padding.y * 8}>
        <Typography variant={'h5'} className={classes.font}>
          <Link style={buttonStyle} onClick={() => scrollTo(aboutRef)}>
            About
          </Link>
        </Typography>
      </Box>

      {/* 
        <Box
          position={'absolute'}
          right={padding * 8}
          top={padding > 10 ? 80 : padding * 8}
          width={column.right}
        >
          <Typography variant={'body1'}>Mouse movement variables:</Typography>
          <Box pt={2}></Box>
          <Typography variant={'body1'}>
            Position, distance, average movement, average speed
          </Typography>
        </Box> 
      */}
    </Box>
  );
}

export default Header;
