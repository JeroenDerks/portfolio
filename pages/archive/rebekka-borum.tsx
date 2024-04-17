import React from 'react';
import Box from '@mui/material/Box';
import RebekkaBorumSketch from 'components/Sketches/RebekkaBorum';
import { useWindowSize } from 'utils';
import ArchiveLayout from 'components/ArchiveLayout';
import Link from 'components/Link';

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
      <Link href="http://www.rebekka-borum.com" target="_blank" variant="small">
        rebekka-borum.com
      </Link>
    </ArchiveLayout>
  );
};

export default RebekkaBorum;
