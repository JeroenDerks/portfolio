import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './HeaderSketch';

import { Box, Link, Typography } from '@material-ui/core';
import { AppContext } from 'App';

function Header() {
  const {
    state: { column, padding },
  } = React.useContext(AppContext);

  const scrollTo = (id) => {
    console.log(id);
    const el = document.getElementById(id);
    console.log(el);
    window.scrollTo({
      top: 2000,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box style={{ height: '100vh' }}>
      <Box style={{ position: 'absolute' }}>
        <P5Wrapper sketch={sketch} paddingLeft={padding * 8} />
      </Box>
      <Box
        position={'absolute'}
        left={padding * 8}
        top={padding > 10 ? 80 : padding * 8}
      >
        <Typography variant="h2">Digital Playgrounds</Typography>
        <Typography variant="subtitle1">
          See how <span style={{ fontWeight: 700 }}>Jeroen</span> is exploring
          technologies and digital-physical experiences
        </Typography>
      </Box>
      <Box
        position={'absolute'}
        left={padding * 8}
        bottom={padding > 10 ? 80 : padding * 8}
      >
        <Typography variant={'h5'}>
          <Link
            style={{ textDecoration: 'none' }}
            onClick={() => scrollTo('installations')}
          >
            Installations
          </Link>
        </Typography>
      </Box>
      <Box
        position={'absolute'}
        right={padding * 8}
        bottom={padding > 10 ? 80 : padding * 8}
      >
        <Typography variant={'h5'}>
          <Link href="#performances" style={{ textDecoration: 'none' }}>
            Performances
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
