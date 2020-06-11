import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import cursorSketch from './CursorSketch';
import { OthersContext } from 'Others';

function Cursors() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <P5Wrapper sketch={cursorSketch} padding={padding.x} width={width.main} />
  );
}

export default Cursors;
