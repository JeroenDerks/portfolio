import React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroSketch from './HeroSketch';
import Grid from '@mui/material/Grid';
import Link from 'components/Link/Link';
import { useWindowSize } from 'utils';
import { defaultPaddingX } from 'utils/constants';
import Image from 'next/image';
import mobileBg from 'public/images/mobile-bg.png';

const Background = styled(Box)({
  height: '100vh',
  overflow: 'hidden',
  // '@media (max-width:900px)': {
  //   background: `url(/images/mobile-bg.png)`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  // },
});

const TextWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
});

const Hero = () => {
  const { width, height } = useWindowSize();

  return (
    <Background>
      <Box width={1} display={{ sm: 'inline-block', md: 'none' }}>
        <Image src={mobileBg} layout="fill" objectFit="cover" />
      </Box>
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

      <Grid
        container
        position={{ xs: 'absolute', sm: 'absolute', md: 'absolute' }}
        bottom="0"
        py={{ xs: 1, sm: 1, md: 10 }}
        px={defaultPaddingX}
      >
        <Grid item xs={6} sm={6} md={10} lg={11} mt={2}>
          <Link href="#projects">Projects</Link>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={1} mt={2} alignItems="flex-end">
          <Link href="#about">About</Link>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Hero;
