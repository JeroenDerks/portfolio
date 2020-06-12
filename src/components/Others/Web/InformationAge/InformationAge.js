import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import InformationAgeSketch from './InformationAgeSketch';
import { OthersContext } from 'Others';

function InformationAge() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <div style={{ display: 'block' }}>
      <P5Wrapper
        sketch={InformationAgeSketch}
        padding={padding.x}
        width={width.main}
      />
    </div>
  );
}

export default InformationAge;
