import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import Image from 'components/Image';
import VimeoVideo from 'components/Video';
import nobel5 from 'public/images/nobel5.jpeg';
import nobel4 from 'public/images/nobel4.jpg';

const ChemicalReactions = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <Image src={nobel5} alt="chemicalReactions1" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <Image src={nobel4} alt="chemicalReactions1" />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="254181584" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default ChemicalReactions;
