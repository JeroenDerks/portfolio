import React from 'react';
import Grid from '@mui/material/Grid';
import { Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

const LudicCode = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="180657153" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="211682937" />
      </Grid>
    </Grid>
  </OtherLayout>
);

export default LudicCode;
