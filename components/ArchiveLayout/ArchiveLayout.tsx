import React from 'react';
import HomeSection from 'components/Layout/LayoutSections';
import Grid from '@mui/material/Grid';
import ArchiveMenu from 'components/ArchiveMenu/ArchiveMenu';
import ArchiveMenuMobile from 'components/ArchiveMenu/ArchiveMenuMobile';

const ArchiveLayout = ({ children }) => (
  <HomeSection>
    <Grid container minHeight="100vh" alignItems="flex-end">
      <Grid
        item
        xs={12}
        sm={12}
        md={10}
        py={{ xs: 4, sm: 4, md: 10 }}
        pt={{ xs: 10, sm: 10, md: 10 }}
        pr={{ xs: 0, sm: 0, md: 8 }}
      >
        {children}
      </Grid>
      <Grid display={{ xs: 'none', sm: 'none', md: 'block' }} item>
        <ArchiveMenu />
      </Grid>
      <Grid display={{ xs: 'block', sm: 'block', md: 'none' }} item>
        <ArchiveMenuMobile />
      </Grid>
    </Grid>
  </HomeSection>
);

export default ArchiveLayout;
