import React from 'react';
import Grid from '@mui/material/Grid';
import { Image } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';

import urban1 from 'public/images/urbanplanen1.jpg';
import urban2 from 'public/images/urbanplanen2.jpg';
import urban3 from 'public/images/urbanplanen3.jpg';
import urban4 from 'public/images/urbanplanen4.jpg';
import urban5 from 'public/images/urbanplanen5.jpg';
import urban6 from 'public/images/urbanplanen6.jpg';

const images = [urban1, urban2, urban3, urban4, urban5, urban6];

const UrbabnPlanen = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {images.map((img, i) => (
        <Grid item xs={12} sm={12} md={6}>
          <Image src={img} alt={`urbanplanen promo ${i}`} />
        </Grid>
      ))}
    </Grid>
  </ArchiveLayout>
);

export default UrbabnPlanen;
