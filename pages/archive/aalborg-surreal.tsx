import React from 'react';
import Box from '@mui/material/Box';
import AalborgSurrealSketch from 'components/Sketches/AalborgSurreal';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';

const AalborgSurreal = () => {
  const { width, height } = useWindowSize();

  return (
    <ArchiveLayout>
      <Box>
        <AalborgSurrealSketch
          width={width}
          height={height}
          key={width + ':' + height}
        />
      </Box>
    </ArchiveLayout>
  );
};

export default AalborgSurreal;
