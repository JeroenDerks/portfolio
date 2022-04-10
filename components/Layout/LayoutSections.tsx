import React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ContentContainer = styled(Box)({
  // border: '1px dashed yellow',
  pointerEvents: 'all',
});

const StaticContainer = styled(Box)({
  pointerEvents: 'none',
});

export const HeadingSection = ({ children }) => (
  <Grid item xs={12} sm={12} md={6} lg={7} order={{ sm: 1, md: 1 }}>
    <ContentContainer py={{ xs: 1, sm: 1, md: 10 }}>
      {children}
    </ContentContainer>
  </Grid>
);

export const TextSection = ({ children }) => (
  <Grid item xs={12} sm={12} md={4} lg={4} order={{ sm: 3, md: 2 }}>
    <Box height={1} display="flex" width={1}>
      <ContentContainer
        py={{ xs: 1, sm: 1, md: 10 }}
        px={{ xs: 0, sm: 0, md: 5 }}
        pb={{ xs: 3, sm: 3 }}
        alignSelf="flex-end"
      >
        {children}
      </ContentContainer>
    </Box>
  </Grid>
);

export const InfoSection = ({ children }) => (
  <Grid item xs={12} sm={12} md={2} lg={1} order={{ sm: 2, md: 3 }}>
    <ContentContainer py={{ xs: 1, sm: 1, md: 10 }} pb={{ xs: 2, sm: 2 }}>
      {children}
    </ContentContainer>
  </Grid>
);

export const StaticSection = ({ children }) => (
  <StaticContainer
    position={{ sm: 'static', md: 'sticky' }}
    minHeight={{ sm: 'auto', md: '100vh' }}
    maxHeight={{ sm: 'auto', md: '100vh' }}
    zIndex={1}
    top={0}
  >
    <Grid container height={{ sm: 'auto', md: '100vh' }}>
      {children}
    </Grid>
  </StaticContainer>
);

export const GeneralSection = ({ children }) => (
  <ContentContainer width={1} py={{ xs: 1, sm: 1, md: 10 }}>
    {children}
  </ContentContainer>
);

const HomeSection = ({ children }) => (
  <Box px={{ xs: 2, sm: 5, md: 10, lg: 14 }}>{children}</Box>
);

export default HomeSection;
