import React from 'react';
import Box from '@mui/material/Box';
import RebekkaBorumSketch from 'components/Sketches/RebekkaBorum';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';

const RebekkaBorum = () => {
  const { width, height } = useWindowSize();

  return (
    <ArchiveLayout>
      <Box>
        <RebekkaBorumSketch
          width={width}
          height={height}
          key={width + ':' + height}
        />
      </Box>
    </ArchiveLayout>
  );
};

export default RebekkaBorum;
