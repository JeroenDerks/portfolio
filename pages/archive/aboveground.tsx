import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { Iframe, VideoWrapper } from 'components/Video';

const AboveGround = () => (
  <ArchiveLayout>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12}>
        <VideoWrapper>
          <Iframe
            src={
              'https://player.vimeo.com/video/23000214?color=ffffff&title=0&byline=0&portrait=0'
            }
            title="aboveground promo"
            frameBorder="0"
            allow="fullscreen"
          />
        </VideoWrapper>
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default AboveGround;
