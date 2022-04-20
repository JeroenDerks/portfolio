import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Image } from 'components/Layout/Visual';
import ArchiveLayout from 'components/ArchiveLayout';

import imageAltimetry from 'public/images/dhi-portal-altimetry.jpg';
import imageSoilMoisture from 'public/images/dhi-portal-soil-moisture.jpg';
import imageFloodsDK from 'public/images/dhi-portal-floods-dk.jpg';
import imageFloodMetrics from 'public/images/dhi-portal-flood-metrics.jpg';
import imageWaterQuality from 'public/images/dhi-portal-wq.jpg';
import imageFloodsFR from 'public/images/dhi-portal-floods-france.jpg';
import imageSavSw from 'public/images/dhi-portal-savsweden.jpg';
import imageFloodMetricsDemo from 'public/images/dhi-portals-floodmetrics-demo2.jpg';

const portals = [
  {
    title: 'Altimetry',
    image: imageAltimetry,
    link: 'https://altimetry.dhigroup.com/',
  },

  {
    title: 'Danish floods',
    image: imageFloodsDK,
    link: 'http://labs.dhi-gras.com/dkfloods',
  },
  {
    title: 'Water quality',
    image: imageWaterQuality,
    link: 'https://marineobserver.dhigroup.com/',
  },
  {
    title: 'Flood metrics',
    image: imageFloodMetrics,
    link: 'https://floodmetricspro.z6.web.core.windows.net/',
  },
  {
    title: 'Soil Moisture',
    image: imageSoilMoisture,
    link: 'https://soilmoisturedev.z6.web.core.windows.net/',
  },
  {
    title: 'Submerged Aquatic Vegetation',
    image: imageSavSw,
    link: 'http://labs.dhi-gras.com/sav-sweden/',
  },
  {
    title: 'Flood metrics showcase',
    image: imageFloodMetricsDemo,
    link: 'https://floodmetrics.dhigroup.com/showcase',
  },
  {
    title: 'French floods',
    image: imageFloodsFR,
    link: 'http://labs.dhi-gras.com/fr-inondations/',
  },
];

const DhiPortals = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {portals.map(({ image, link, title }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Typography variant="body1">{title}</Typography>
          <a href={link} target="_blank">
            <Image src={image} alt={title} />
          </a>
        </Grid>
      ))}
    </Grid>
  </ArchiveLayout>
);

export default DhiPortals;
