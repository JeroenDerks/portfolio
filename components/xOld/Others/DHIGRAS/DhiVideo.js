import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';

function DhiVideo() {
  const classes = videoStyle();

  const makeVideo = (src) => (
    <div className={classes.videoWrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        frameBorder="0"
        title={`sofar_${src}`}
        allowFullScreen
        className={classes.video}
      />
    </div>
  );

  const videos = [
    { comp: makeVideo('7SWHQRxW8-g') },
    { comp: makeVideo('7DKz5lCiG3U') },
    { comp: makeVideo('r3Nlq_ur7e0') },
    { comp: makeVideo('sriM98k958o') },
    { comp: makeVideo('UebTQanM4gc') },
    { comp: makeVideo('FmLog63z1sk') },
    { comp: makeVideo('6dPjEc4aLaE') },
    { comp: makeVideo('GpabIh-vGVA') },
    { comp: makeVideo('j0WJVquog9Q') },
    { comp: makeVideo('Qf9TQyBs3oA') },
  ];

  return (
    <Grid container spacing={4} wrap="wrap-reverse">
      {videos.map(({ comp }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          {comp}
        </Grid>
      ))}
    </Grid>
  );
}

export default DhiVideo;
