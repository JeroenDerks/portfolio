import React from 'react';
import { Grid } from '@material-ui/core';
import urban1 from 'assets/others/urbanplanen1.jpg';
import urban2 from 'assets/others/urbanplanen2.jpg';
import urban3 from 'assets/others/urbanplanen3.jpg';
import urban4 from 'assets/others/urbanplanen4.jpg';
import urban5 from 'assets/others/urbanplanen5.jpg';
import urban6 from 'assets/others/urbanplanen6.jpg';

function UrbanPlanen() {
  const portals = [
    { comp: <img src={urban1} style={{ width: '100%' }} alt={'urban1'} /> },
    { comp: <img src={urban2} style={{ width: '100%' }} alt={'urban2'} /> },
    { comp: <img src={urban3} style={{ width: '100%' }} alt={'urban3'} /> },
    { comp: <img src={urban4} style={{ width: '100%' }} alt={'urban4'} /> },
    { comp: <img src={urban5} style={{ width: '100%' }} alt={'urban5'} /> },
    { comp: <img src={urban6} style={{ width: '100%' }} alt={'urban6'} /> },
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

export default UrbanPlanen;
