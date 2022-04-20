import React from 'react';
import Grid from '@mui/material/Grid';
import Image from 'components/Image';
import ArchiveLayout from 'components/ArchiveLayout';
import ds1 from 'public/images/ds1.jpg';
import VimeoVideo from 'components/Video';

const DynamicStill = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="211666686" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Image src={ds1} alt="dynamic still promo" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default DynamicStill;
