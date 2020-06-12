import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';

const imageStyle = {
  width: '100%',
};

function DhiVideo() {
  const classes = videoStyle();

  const portals = [
    {
      comp: (
        <div className={classes.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/7SWHQRxW8-g"
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
            src="https://www.youtube.com/embed/7DKz5lCiG3U"
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
            src="https://www.youtube.com/embed/r3Nlq_ur7e0"
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
            src="https://www.youtube.com/embed/sriM98k958o"
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
            src="https://www.youtube.com/embed/UebTQanM4gc"
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
            src="https://www.youtube.com/embed/6dPjEc4aLaE"
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
            src="https://www.youtube.com/embed/GpabIh-vGVA"
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
            src="https://www.youtube.com/embed/j0WJVquog9Q"
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
            src="https://www.youtube.com/embed/Qf9TQyBs3oA"
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

export default DhiVideo;
