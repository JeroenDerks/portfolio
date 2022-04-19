import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Image } from 'components/Layout/Visual';
import OtherLayout from 'components/Layout/OtherLayout';

import dhiWebsite0 from 'public/images/dhi-website-0.jpg';
import dhiWebsite1 from 'public/images/dhi-website-1.jpg';
import dhiWebsite2 from 'public/images/dhi-website-2.jpg';

const websites = [
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

const DhiPortals = () => (
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {websites.map(({ image, link, title }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Typography variant="body1">{title}</Typography>
          <a href={link} target="_blank">
            <Image src={image} alt={title} />
          </a>
        </Grid>
      ))}
    </Grid>
  </OtherLayout>
);

export default DhiPortals;
