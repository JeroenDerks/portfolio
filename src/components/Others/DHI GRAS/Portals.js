import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import imageAltimetry from 'assets/others/dhi-portal-altimetry.jpg';
import imageSoilMoisture from 'assets/others/dhi-portal-soil-moisture.jpg';
import imageFloodsDK from 'assets/others/dhi-portal-floods-dk.jpg';
import imageFloodMetrics from 'assets/others/dhi-portal-flood-metrics.jpg';
import imageWaterQuality from 'assets/others/dhi-portal-wq.jpg';
import imageFloodsFR from 'assets/others/dhi-portal-floods-france.jpg';

import { OthersContext } from 'Others';

const portals = [
  {
    title: 'Altimetry',
    image: imageAltimetry,
    link: 'https://altimetry.dhigroup.com/',
  },
  {
    title: 'Soil Moisture',
    image: imageSoilMoisture,
    link: 'https://soilmoisturedev.z6.web.core.windows.net/',
  },
  {
    title: 'Danish floods',
    image: imageFloodsDK,
    link: 'http://labs.dhi-gras.com/dkfloods',
  },
  {
    title: 'Flood metrics',
    image: imageFloodMetrics,
    link: 'https://floodmetricspro.z6.web.core.windows.net/',
  },
  {
    title: 'Water quality',
    image: imageWaterQuality,
    link: 'https://marineobserver.dhigroup.com/',
  },
  {
    title: 'French floods',
    image: imageFloodsFR,
    link: 'http://labs.dhi-gras.com/fr-inondations/',
  },
];

const imageStyle = {
  width: '100%',
};

function Portals() {
  const {
    state: { padding, width },
  } = React.useContext(OthersContext);

  return (
    <Grid container spacing={4}>
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

export default Portals;
