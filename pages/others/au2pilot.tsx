import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

const Au2Pilot = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <Video vimeoVideoId="144677708" />
      </Grid>
    </Grid>
  </OtherLayout>
);

export default Au2Pilot;
