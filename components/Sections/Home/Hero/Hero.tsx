import React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroSketch from './HeroSketch';
import { useWindowSize } from 'utils';

const Background = styled(Box)({
  height: '100vh',
  overflow: 'hidden',

  '@media (max-width:900px)': {
    background: `url(/images/mobile-bg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },
});

const TextWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
});

const Hero = () => {
  const { width, height } = useWindowSize();

  return (
    <Background>
      <Box display={{ xs: 'none', sm: 'none', md: 'inline-block' }}>
        <HeroSketch width={width} height={height} key={width + '' + height} />
      </Box>
      <TextWrapper
        py={{ xs: 5, sm: 5, md: 10 }}
        px={{ xs: 2, sm: 5, md: 10, lg: 14 }}
      >
        <Typography variant="h1">Digital Playgrounds</Typography>
        <Typography variant="h2">
          Welcome to Jeroen's collection of web development, tech experiments
          and digital-physical interfaces
        </Typography>
      </TextWrapper>
    </Background>
  );
};

export default Hero;
