import React from 'react';
import Grid from '@mui/material/Grid';
import { Image, Video } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';
import konstruktur from 'public/images/konstruktur.jpg';

const Konstruktor = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Video vimeoVideoId="241518803" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Image src={konstruktur} alt="konstruktur promo" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default Konstruktor;
