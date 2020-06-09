import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './HeaderSketch';

import { Box, Link, Typography } from '@material-ui/core';
import { AppContext } from 'App';

const buttonStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
};

function Header() {
  const {
    actions: { scrollTo },
    state: { aboutRef, projectRef, padding },
  } = React.useContext(AppContext);

  return (
    <Box style={{ height: '100vh' }}>
      <Box position="absolute">
        <P5Wrapper sketch={sketch} paddingLeft={padding.x * 8} />
      </Box>
      <Box position="absolute" pl={padding.x} pt={padding.y}>
        <Typography variant="h2">Digital Playgrounds</Typography>
        <Typography variant="subtitle1">
          Welcome to Jeroen's collection of tech experiments and
          digital-physical interfaces
        </Typography>
      </Box>
      <Box position={'absolute'} pl={padding.x} bottom={padding.y * 8}>
        <Typography variant={'h5'}>
          <Link style={buttonStyle} onClick={() => scrollTo(projectRef)}>
            Projects
          </Link>
        </Typography>
      </Box>
      <Box position={'absolute'} right={padding.x * 8} bottom={padding.y * 8}>
        <Typography variant={'h5'}>
          <Link style={buttonStyle} onClick={() => scrollTo(aboutRef)}>
            About
          </Link>
        </Typography>
      </Box>
      {/* <Box
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
      </Box> */}
    </Box>
  );
}

export default Header;
