import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const LaylorPerformanceSystems = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VimeoVideo vimeoVideoId="28177982" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default LaylorPerformanceSystems;
