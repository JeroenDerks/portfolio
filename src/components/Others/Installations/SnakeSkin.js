import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';

function SnakeSkin() {
  const classes = videoStyle();

  const portals = [
    {
      comp: (
        <div className={classes.videoWrapper}>
          <iframe
            src={`https://player.vimeo.com/video/212966526?title=0&byline=0&portrait=0`}
            title={'snakeskin1'}
            frameBorder="0"
            allow="fullscreen"
            allowFullScreen
            className={classes.video}
          />
        </div>
      ),
    },
    {
      comp: (
        <div className={classes.videoWrapper}>
          <iframe
            src={`https://player.vimeo.com/video/212969684?title=0&byline=0&portrait=0`}
            title={'snakeskin2'}
            frameBorder="0"
            allow="fullscreen"
            allowFullScreen
            className={classes.video}
          />
        </div>
      ),
    },
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

export default SnakeSkin;
