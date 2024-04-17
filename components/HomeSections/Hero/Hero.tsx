import React, { useEffect, useState } from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroSketch from './HeroSketch';
import Grid from '@mui/material/Grid';
import { useWindowSize } from 'utils';
import { defaultPaddingX } from 'utils/constants';
import Image from 'next/image';
import mobileBg from 'public/images/mobile-bg.png';

const Background = styled(Box)({
  height: '100vh',
  overflow: 'hidden',
});

const StyledButton = styled('button')({
  color: '#000',
  border: 'none',
  width: 'auto',
  cursor: 'pointer',
  transition: 'all .2s',
  background: 'transparent',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: 20,
  padding: '0px 4px',

  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
});

const TextWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
});

const name = ['01000100', '01100101', '01110010', '01101011', '01110011'];

const Hero = ({ scrollTo }: { scrollTo: (v: string) => void }) => {
  const { width, height } = useWindowSize();
  const [activeChar, setActiveChar] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('increasing');
      console.log(activeChar);
      setActiveChar(activeChar ? activeChar + 1 : 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Background>
      <Box width={1} display={{ sm: 'inline-block', md: 'none' }}>
        <Image
          src={mobileBg}
          layout="fill"
          objectFit="cover"
          alt="background graphic"
        />
      </Box>
      <Box display={{ xs: 'none', sm: 'none', md: 'inline-block' }}>
        <HeroSketch width={width} height={height} key={width + ':' + height} />
      </Box>
      <TextWrapper
        py={{ xs: 5, sm: 5, md: 10 }}
        px={{ xs: 2, sm: 5, md: 10, lg: 14 }}
      >
        <Typography variant="h1">
          <span style={{ fontFamily: 'monospace' }}>
            {name[activeChar]} () =&gt;
          </span>{' '}
          experiences
        </Typography>
        <Typography variant="h2">
          Welcome to Jeroen's collection of web development, tech experiments
          and digital-physical interfaces
        </Typography>
      </TextWrapper>

      <Grid
        container
        bottom="0"
        position={{ xs: 'absolute', sm: 'absolute', md: 'absolute' }}
        justifyContent={{ xs: 'space-between', sm: 'space-between' }}
        py={{ xs: 1, sm: 1, md: 10 }}
        px={defaultPaddingX}
      >
        <Grid item md={10} lg={11} mt={2}>
          <Box width="fit-content">
            <StyledButton onClick={() => scrollTo('projects')}>
              Projects
            </StyledButton>
          </Box>
        </Grid>
        <Grid item sm="auto" md={2} lg={1} mt={2} alignItems="flex-end">
          <Box width="fit-content">
            <StyledButton onClick={() => scrollTo('about')}>About</StyledButton>
          </Box>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Hero;
