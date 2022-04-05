import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';
// import FreaksRegisterSketch from './FreaksRegisterSketch';
import { OthersContext } from 'Others';
import { videoStyle } from 'styles/global';

function FreaksRegister() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  const style = videoStyle();

  return (
    <div style={{ display: 'block' }}>
      {/* <div style={{ display: 'block' }}>
        <P5Wrapper
          sketch={FreaksRegisterSketch}
          padding={padding.x}
          width={width.main}
        />  </div>
*/}

      <div className={style.videoWrapper} style={{ paddingTop: 60 }}>
        <iframe
          src="https://player.vimeo.com/video/121553579?color=ffffff&title=0&byline=0&portrait=0"
          title={'freaksregister'}
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
          className={style.video}
        />
      </div>
    </div>
  );
}

export default FreaksRegister;
