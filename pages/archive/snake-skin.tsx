import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const SnakeSkin = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="212966526" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="212969684" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default SnakeSkin;
