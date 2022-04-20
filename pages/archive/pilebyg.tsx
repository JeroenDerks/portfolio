import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { VideoWrapper } from 'components/Video';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const DhiPortals = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VideoWrapper>
          <LiteYouTubeEmbed
            id="NB5VQVQBhRU"
            title="pilebyg company promo"
            webp={true}
          />
        </VideoWrapper>
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default DhiPortals;
