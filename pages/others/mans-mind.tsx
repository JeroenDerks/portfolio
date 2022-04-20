import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

const MansMind = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <Video vimeoVideoId="141823051" />
      </Grid>
    </Grid>
  </OtherLayout>
);

export default MansMind;
