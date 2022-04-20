import React from 'react';
import Box from '@mui/material/Box';
import FreaksRegisterSketch from 'components/Sketches/FreaksRegister';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';
import VimeoVideo from 'components/Video';
import { Grid } from '@mui/material';

const FreaksRegister = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <ArchiveLayout>
        <Box>
          <FreaksRegisterSketch
            width={width}
            height={height}
            key={width + ':' + height}
          />
        </Box>
      </ArchiveLayout>
      <Box
        py={{ xs: 1, sm: 1, md: 10 }}
        px={{ xs: 2, sm: 5, md: 10, lg: 14 }}
        width={1}
        position="absolute"
        bottom={20}
        right={0}
      >
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6} xl={6} />
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Box width={400}>
              <VimeoVideo vimeoVideoId="121553579" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FreaksRegister;
