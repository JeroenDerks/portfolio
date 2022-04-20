import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const MansMind = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VimeoVideo vimeoVideoId="141823051" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default MansMind;
