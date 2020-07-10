import React from 'react';
import { Box, Typography } from '@material-ui/core';

const IEnotification = () => {
  return (
    <Box width={'100%'} style={{ paddingTop: '33%' }}>
      <Typography align={'center'}>
        Friends dont let friends use Internet Explorer.
      </Typography>
      <Typography align={'center'}>
        For the best experience use Chrome, Safari, Firefox or Edge.
      </Typography>
    </Box>
  );
};

export default IEnotification;
