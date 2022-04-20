import React from 'react';
import Box from '@mui/material/Box';
import InformationAgeSketch from 'components/Sketches/InformationAge';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';

const InformationAge = () => {
  const { width, height } = useWindowSize();

  return (
    <ArchiveLayout>
      <Box>
        <InformationAgeSketch
          width={width}
          height={height}
          key={width + ':' + height}
        />
      </Box>
    </ArchiveLayout>
  );
};

export default InformationAge;
