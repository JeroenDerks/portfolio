import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';

function Sofar() {
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

  const portals = [
    { comp: makeVideo('OUJ3AjhQdg4') },
    { comp: makeVideo('v4x-7nBKvS8') },
    { comp: makeVideo('BK7brzDjab0') },
    { comp: makeVideo('jESiXHWAsPo') },
    { comp: makeVideo('shUdPhXdoPQ') },
    { comp: makeVideo('vk_q9LRYEwo') },
    { comp: makeVideo('auQvwyLFhL4') },
    { comp: makeVideo('2dYlu22ENXA') },
    { comp: makeVideo('0XGyD3cEPp4') },
    { comp: makeVideo('AoOmGZ-MoSI') },
    { comp: makeVideo('shtpmR4yzqY') },
    { comp: makeVideo('3r0rsk-tNV4') },
    { comp: makeVideo('pqHy-vzKlxo') },
    { comp: makeVideo('u9zEC7udEeM') },
    { comp: makeVideo('0fDMVb3lTbk') },
  ];

  return (
    <Grid container spacing={4} wrap="wrap-reverse">
      {portals.map(({ comp }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          {comp}
        </Grid>
      ))}
    </Grid>
  );
}

export default Sofar;
