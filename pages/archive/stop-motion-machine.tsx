import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';

const videoIds = ['163595319', '182385146', '182385144'];

const StopMotionMachine = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {videoIds.map((id) => (
        <Grid item xs={12} sm={12} md={6} key={id}>
          <Video vimeoVideoId={id} />
        </Grid>
      ))}
    </Grid>
  </ArchiveLayout>
);

export default StopMotionMachine;
