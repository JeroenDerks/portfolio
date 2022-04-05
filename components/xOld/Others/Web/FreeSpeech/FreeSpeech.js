import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';
// import FreeSpeechSketch from './FreeSpeechSketch';
import { OthersContext } from 'Others';

function FreeSpeech() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <div style={{ display: 'block' }}>
      {/* <P5Wrapper
        sketch={FreeSpeechSketch}
        padding={padding.x}
        width={width.main}
      /> */}
    </div>
  );
}

export default FreeSpeech;
