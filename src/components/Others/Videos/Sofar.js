import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';

const imageStyle = {
  width: '100%',
};

function Sofar() {
  const classes = videoStyle();

  const portals = [
    {
      comp: (
        <div className={classes.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/OUJ3AjhQdg4"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/v4x-7nBKvS8"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/BK7brzDjab0"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/jESiXHWAsPo"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/shUdPhXdoPQ"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/vk_q9LRYEwo"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/auQvwyLFhL4"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/2dYlu22ENXA"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/0XGyD3cEPp4"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/AoOmGZ-MoSI"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/shtpmR4yzqY"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/3r0rsk-tNV4"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/pqHy-vzKlxo"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/u9zEC7udEeM"
            frameBorder="0"
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
            src="https://www.youtube.com/embed/0fDMVb3lTbk"
            frameBorder="0"
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

export default Sofar;
