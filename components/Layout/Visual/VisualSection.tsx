import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { useWindowSize } from 'utils';

const ASPECT_RATIO = 0.5625;

const ImageWrapper = styled(Box)({
  '& > *': { marginBottom: '80px !important' },
  '& > *:last-child': { marginBottom: '0px !important' },
});

const VisualSection = ({ children }) => {
  const size = useWindowSize();
  const elHeightMd = Math.round(((size.width - 80) / 12) * 6 * ASPECT_RATIO);
  const ptMd = `calc(100vh - 60px - ${elHeightMd}px)`;

  const elHeightLg = Math.round(((size.width - 112) / 12) * 7 * ASPECT_RATIO);
  const ptLg = `calc(100vh - 40px - ${elHeightLg}px)`;

  return (
    <Grid container zIndex={0}>
      <Grid item xs={12} sm={12} md={6} lg={7}>
        <ImageWrapper
          mt={{ sm: 0, md: '-100vh', lg: '-100vh' }}
          pt={{ sm: 0, md: ptMd, lg: ptLg }}
          pb={{ sm: 5, md: 10, lg: 10 }}
        >
          {children}
        </ImageWrapper>
      </Grid>
    </Grid>
  );
};

export default VisualSection;
