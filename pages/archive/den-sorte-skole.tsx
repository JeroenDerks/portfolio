import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { VideoWrapper } from 'components/Video';
import VimeoVideo from 'components/Video';

const DenSorteSkole = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={12}>
        <VideoWrapper>
          <VimeoVideo vimeoVideoId="90728648" />
        </VideoWrapper>
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default DenSorteSkole;
