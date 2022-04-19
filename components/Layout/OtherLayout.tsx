import React from 'react';
import HomeSection from 'components/Layout/LayoutSections';
import Grid from '@mui/material/Grid';
import OtherMenu from 'components/OtherMenu/OtherMenu';

const OtherLayout = ({ children }) => (
  <HomeSection>
    <Grid container minHeight="100vh" alignItems="flex-end">
      <Grid item xs={12} sm={12} md={10} lg={10} py={{ xs: 1, sm: 1, md: 10 }}>
        {children}
      </Grid>
      <Grid display={{ xs: 'none', sm: 'none', md: 'block' }} item pl={2}>
        <OtherMenu />
      </Grid>
    </Grid>
  </HomeSection>
);

export default OtherLayout;
