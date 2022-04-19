import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

const videoIds = ['163595319', '182385146', '182385144'];

const StopMotionMachine = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {videoIds.map((id) => (
        <Grid item xs={12} sm={12} md={6} key={id}>
          <Video vimeoVideoId={id} />
        </Grid>
      ))}
    </Grid>
  </OtherLayout>
);

export default StopMotionMachine;
