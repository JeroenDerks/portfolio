import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import RebekkaBorumSketch from './RebekkaBorumSketch';
import { OthersContext } from 'Others';

function InformationAge() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <div style={{ display: 'block' }}>
      <P5Wrapper
        sketch={RebekkaBorumSketch}
        padding={padding.x}
        width={width.main}
      />
    </div>
  );
}

export default InformationAge;
