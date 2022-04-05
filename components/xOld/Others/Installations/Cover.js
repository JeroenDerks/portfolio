import React from 'react';
import { videoStyle } from 'styles/global';

function Cover() {
  const classes = videoStyle();

  return (
    <div className={classes.videoWrapper}>
      <iframe
        src={`https://player.vimeo.com/video/207443334?title=0&byline=0&portrait=0`}
        title={'cover'}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        className={classes.video}
      />
    </div>
  );
}

export default Cover;
