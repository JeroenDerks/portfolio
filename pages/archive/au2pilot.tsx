import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';

const Au2Pilot = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <Video vimeoVideoId="144677708" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default Au2Pilot;
