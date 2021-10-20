import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import tingbjerg1 from 'assets/images/tingbjergCeiling.jpg';
import tingbjerg2 from 'assets/images/tingbjergTrees.jpg';

function Tingbjerg() {
  const portals = [
    {
      title: 'Interactive ceiling light installation in Tingbjerg',
      img: <img src={tingbjerg1} style={{ width: '100%' }} alt="tingbjerg1" />,
    },
    {
      title: 'Interactive tree light installation in Tingbjerg',
      img: <img src={tingbjerg2} style={{ width: '100%' }} alt="tingbjerg1" />,
    },
  ];

  return (
    <Grid container spacing={4} wrap="wrap-reverse">
      {portals.map(({ img, title }, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <Typography variant="body1">{title}</Typography>
          {img}
        </Grid>
      ))}
    </Grid>
  );
}

export default Tingbjerg;
