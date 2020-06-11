import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import imagePortals from 'assets/others/dhi-portal-collection.jpg';
import imageWebsite from 'assets/others/dhi-website-collection.jpg';
import imageVideos from 'assets/others/dhi-video-collection.jpg';

const portals = [
  {
    title: 'portals',
    image: imagePortals,
    link: 'http://www.derks.dk/others/dhi-portals',
  },
  {
    title: 'website',
    image: imageWebsite,
    link: 'https://www.dhi-gras.com/',
  },
  {
    title: 'videos',
    image: imageVideos,
    link: 'http://www.derks.dk/others/dhi-videos',
  },
];

const imageStyle = {
  width: '100%',
};

function DhiOverview() {
  return (
    <Grid container spacing={4} wrap="wrap-reverse">
      {portals.map(({ image, link, title }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Typography variant="body1">{title}</Typography>
          <Link href={link} target="_blank">
            <img src={image} alt={title} style={imageStyle} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default DhiOverview;
