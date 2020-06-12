import React from 'react';
import { Grid } from '@material-ui/core';
import { videoStyle } from 'styles/global';
import nodes1 from 'assets/images/nodes1.jpg';
import nodes2 from 'assets/images/nodes3.jpg';

const imageStyle = {
  width: '100%',
};

function Nodes() {
  const classes = videoStyle();

  const portals = [
    {
      comp: <img src={nodes1} style={{ width: '100%' }} />,
    },
    {
      comp: <img src={nodes2} style={{ width: '100%' }} />,
    },
    {
      comp: (
        <div className={classes.videoWrapper}>
          <iframe
            src={`https://player.vimeo.com/video/176175393?title=0&byline=0&portrait=0`}
            title={'cover'}
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

export default Nodes;
