import React from 'react';
import Grid from '@mui/material/Grid';
import { Image, Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';
import ds1 from 'public/images/ds1.jpg';

const DynamicStill = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="211666686" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Image src={ds1} alt="dynamic still promo" />
      </Grid>
    </Grid>
  </OtherLayout>
);

export default DynamicStill;
