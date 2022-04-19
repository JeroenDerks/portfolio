import React from 'react';
import HomeSection from 'components/Layout/LayoutSections';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OtherMenu from 'components/OtherMenu/OtherMenu';

const OtherHome = () => {
  return (
    <HomeSection>
      <Grid container py={{ xs: 1, sm: 1, md: 10 }} height="100vh">
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Typography variant="h5">Thanks for reaching the archive</Typography>
          <Typography variant="body1">
            This place is under construction, but feel free to check out with is
            already available
          </Typography>
          <Typography variant="body1">
            Please check again in a few days
          </Typography>
        </Grid>
        <Grid display={{ sm: 'none', md: 'block' }} item md={3} lg={2}>
          <OtherMenu />
        </Grid>
      </Grid>
    </HomeSection>
  );
};

export default OtherHome;
