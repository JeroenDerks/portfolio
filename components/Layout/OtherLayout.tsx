import React from 'react';
import HomeSection from 'components/Layout/LayoutSections';
import Grid from '@mui/material/Grid';
import OtherMenu from 'components/OtherMenu/OtherMenu';

const OtherLayout = ({ children }) => (
  <HomeSection>
    <Grid container minHeight="100vh" alignItems="flex-end">
      <Grid
        item
        sm={12}
        md={10}
        py={{ xs: 1, sm: 1, md: 10 }}
        pr={{ xs: 0, sm: 0, md: 8 }}
      >
        {children}
      </Grid>
      <Grid display={{ xs: 'none', sm: 'none', md: 'block' }} item>
        <OtherMenu />
      </Grid>
    </Grid>
  </HomeSection>
);

export default OtherLayout;
