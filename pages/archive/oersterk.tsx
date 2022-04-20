import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { VideoWrapper, Iframe } from 'components/Layout/Visual/Video';

const Oersterk = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VideoWrapper>
          <Iframe
            src="https://www.youtube.com/embed/Er1tsP6-vzw"
            title="oersterk promo"
            frameBorder="0"
            loading="lazy"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default Oersterk;
