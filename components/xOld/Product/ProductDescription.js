import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { linkStyle } from 'styles/global';
import { AppContext } from 'pages/_app';

function ProductDescription({ description, link }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

  const classes = linkStyle();

  return (
    <Box px={padding.text}>
      {description &&
        description.map((paragraph, i) => (
          <Box pt={1} key={i}>
            <Typography variant={'body1'}>{paragraph}</Typography>
          </Box>
        ))}
      {link && (
        <Box pt={1}>
          <Typography variant="body1" className={classes.wrapper}>
            {link}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ProductDescription;
