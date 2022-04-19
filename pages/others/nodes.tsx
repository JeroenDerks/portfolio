import React from 'react';
import Grid from '@mui/material/Grid';
import { Image, Video } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

import nodes1 from 'public/images/nodes1.jpg';
import nodes2 from 'public/images/nodes3.jpg';

const Nodes = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Image src={nodes1} alt="nodes promo one" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Image src={nodes2} alt="nodes promo two" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="176175393" />
      </Grid>
    </Grid>
  </OtherLayout>
);

export default Nodes;
