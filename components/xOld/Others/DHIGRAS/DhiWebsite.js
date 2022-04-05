import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import dhiWebsite0 from 'assets/images/dhi-website-0.jpg';
import dhiWebsite1 from 'assets/images/dhi-website-1.jpg';
import dhiWebsite2 from 'assets/images/dhi-website-2.jpg';

const portals = [
  {
    title: 'visit website',
    image: dhiWebsite0,
    link: 'https://www.dhi-gras.com',
  },
  {
    title: 'visit website',
    image: dhiWebsite1,
    link: 'https://www.dhi-gras.com',
  },
  {
    title: 'visit website',
    image: dhiWebsite2,
    link: 'https://www.dhi-gras.com',
  },
];

const imageStyle = {
  width: '100%',
};

function DHIWebsite() {
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

export default DHIWebsite;
