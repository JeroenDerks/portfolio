import React from 'react';
import { Box, Typography } from '@material-ui/core';

const IEnotification = () => {
  return (
    <Box width={'100%'} style={{ paddingTop: '33%' }}>
      <Typography align={'center'}>
        This site is not optimized for Internet Explorer.
      </Typography>
      <Typography align={'center'}>
        For the best experience, use Chrome, Firefox or Edge.
      </Typography>
    </Box>
  );
};

export default IEnotification;
