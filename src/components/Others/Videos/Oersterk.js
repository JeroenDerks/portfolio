import React from 'react';
import { videoStyle } from 'styles/global';

function Oersterk() {
  const classes = videoStyle();

  return (
    <div className={classes.videoWrapper}>
      <iframe
        src={'https://www.youtube.com/embed/Er1tsP6-vzw'}
        title={'cover'}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        className={classes.video}
      />
    </div>
  );
}

export default Oersterk;
