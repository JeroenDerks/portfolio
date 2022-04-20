import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'components/Image';
import ArchiveLayout from 'components/ArchiveLayout';
import Link from 'next/link';

import imagePortals from 'public/images/dhi-portal-collection.jpg';
import imageWebsite from 'public/images/dhi-website-collection.jpg';
import imageVideos from 'public/images/dhi-video-collection.jpg';

const others = [
  {
    title: 'portals',
    image: imagePortals,
    link: '/others/dhi-portals',
  },
  {
    title: 'website',
    image: imageWebsite,
    link: 'https://www.dhi-gras.com/',
    target: '_blank',
  },
  {
    title: 'videos',
    image: imageVideos,
    link: '/others/dhi-videos',
  },
];

const DhiOverview = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {others.map(({ image, link, title, target }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Typography variant="body1">{title}</Typography>
          <Link href={link} passHref>
            <a target={target}>
              <Image src={image} alt={title} />
            </a>
          </Link>
        </Grid>
      ))}
    </Grid>
  </ArchiveLayout>
);

export default DhiOverview;
