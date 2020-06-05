import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './HeaderSketch';

import { Box, Link, Typography } from '@material-ui/core';
import { AppContext } from 'App';

function Header() {
  const {
    state: { column, padding },
  } = React.useContext(AppContext);

  return (
    <Box>
      <Box style={{ position: 'absolute' }}>
        <P5Wrapper sketch={sketch} paddingLeft={padding} />
      </Box>
      <Box position={'absolute'} left={padding} top={padding}>
        <Typography variant="h2">Digital Playgrounds</Typography>
        <Typography variant="subtitle1">
          See how <span style={{ fontWeight: 700 }}>Jeroen</span> is exploring
          technologies and digital-physical experiences
        </Typography>
      </Box>
      <Box position={'absolute'} left={padding} bottom={padding}>
        <Typography variant={'h5'}>
          <Link href="#installations" style={{ textDecoration: 'none' }}>
            Installations
          </Link>
        </Typography>
      </Box>
      <Box position={'absolute'} right={padding} bottom={padding}>
        <Typography variant={'h5'}>
          <Link href="#performances" style={{ textDecoration: 'none' }}>
            Performances
          </Link>
        </Typography>
      </Box>
      <Box
        position={'absolute'}
        right={padding}
        top={padding}
        width={column.right}
      >
        <Typography variant={'body1'}>Mouse movement variables:</Typography>
        <Box pt={2}></Box>
        <Typography variant={'body1'}>
          Position, distance, average movement, average speed
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;
