import React from 'react';
import { Box, Typography } from '@material-ui/core';
// import P5Wrapper from 'react-p5-wrapper';
// import cursorSketch from './CursorSketch';
import { OthersContext } from 'Others';

const textStyle = { width: '100%' };

function Cursors() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <>
      {/* <P5Wrapper sketch={cursorSketch} padding={padding.x} width={width.main} /> */}
      <Box
        position="fixed"
        width={0.7}
        top={padding.y * 1.5}
        left={padding.x * 1.5}
        // alignItems="center"
        // justifyContent="center"
      ></Box>
    </>
  );
}

export default Cursors;
