import React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cursors from 'components/Sketches/Cursors';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';

const TextWithBackground = styled(Typography)({
  background: '#fff',
  width: 'fit-content',
  padding: '0px 4px',
});

const OtherHome = () => {
  const { width, height } = useWindowSize();

  return (
    <ArchiveLayout>
      <Box>
        <Cursors width={width} height={height} key={width + ':' + height} />
      </Box>
      <Box
        position="absolute"
        top={{ xs: 20, sm: 20, md: 140 }}
        left={{ xs: 20, sm: 20, md: 180 }}
      >
        <TextWithBackground variant="h5">
          Thanks for reaching the archive
        </TextWithBackground>
        <TextWithBackground variant="body1">
          This place is used to keep an overview of sweet memories and less
          professional work.
        </TextWithBackground>
      </Box>
    </ArchiveLayout>
  );
};

export default OtherHome;
