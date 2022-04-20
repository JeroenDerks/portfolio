import React from 'react';
import Grid from '@mui/material/Grid';
import OtherLayout from 'components/Layout/OtherLayout';
import { Iframe, VideoWrapper } from 'components/Layout/Visual/Video';

const AboveGround = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
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
  </OtherLayout>
);

export default AboveGround;
