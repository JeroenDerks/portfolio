import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';

const SnakeSkin = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="212966526" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="212969684" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default SnakeSkin;
