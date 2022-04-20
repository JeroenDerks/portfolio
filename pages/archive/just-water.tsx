import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const JustWater = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VimeoVideo vimeoVideoId="141281742" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default JustWater;
