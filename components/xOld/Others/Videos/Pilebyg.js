import React from 'react';
import { videoStyle } from 'styles/global';

function Pilebyg() {
  const classes = videoStyle();

  return (
    <div className={classes.videoWrapper}>
      <iframe
        src={'https://www.youtube.com/embed/NB5VQVQBhRU'}
        title={'cover'}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        className={classes.video}
      />
    </div>
  );
}

export default Pilebyg;
