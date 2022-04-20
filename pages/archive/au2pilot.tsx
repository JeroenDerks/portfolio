import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const Au2Pilot = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VimeoVideo vimeoVideoId="144677708" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default Au2Pilot;
