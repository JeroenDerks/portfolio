import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function ProductHeader({ title, technologies }) {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item sm={12} md={10} lg={11}>
        <Typography variant="h2">{title}</Typography>
      </Grid>

      <Grid item sm={12} md={2} lg={1}>
        <Typography variant="body1">
          <span style={{ fontWeight: 700 }}>{technologies.mainTitle}</span>
        </Typography>

        {technologies.location && (
          <Typography variant="body1">{technologies.location}</Typography>
        )}

        <Typography variant="body1">{technologies.subTitle}</Typography>
      </Grid>
    </Grid>
  );
}

export default ProductHeader;
