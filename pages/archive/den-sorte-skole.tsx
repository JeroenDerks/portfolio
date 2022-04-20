import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { VideoWrapper } from 'components/Layout/Visual/Video';
import { Video } from 'components/Layout/Visual';

const DenSorteSkole = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VideoWrapper>
          <Video vimeoVideoId="90728648" />
        </VideoWrapper>
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default DenSorteSkole;
