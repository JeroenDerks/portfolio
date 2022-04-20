import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';

const LudicCode = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="180657153" />
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <VimeoVideo vimeoVideoId="211682937" />
      </Grid>
    </Grid>
  </ArchiveLayout>
);

export default LudicCode;
