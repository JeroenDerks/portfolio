import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { linkStyle } from 'styles/global';

function ProductMobile({ props }) {
  const { title, technologies, description, contentMobile, link } = props;

  const classes = linkStyle();

  return (
    <Box>
      <Box boxSizing={'border-box'} pt={5} width={1}>
        <Typography variant="h2">{title}</Typography>
        <Box pt={1} />

        <Typography variant="body1">
          <span style={{ fontWeight: 700 }}>{technologies.mainTitle} </span>
          {technologies.location && ' - ' + technologies.location}
          {' - '} {technologies.subTitle}
        </Typography>

        <Box pt={1} />
        <Typography variant={'body1'}>
          {description && description.map((paragraph) => paragraph)}
        </Typography>
        {link && (
          <Box py={1}>
            <Typography variant="body1" className={classes.wrapper}>
              {link}
            </Typography>
          </Box>
        )}
        <Box>
          {contentMobile &&
            contentMobile.map((content, i) => (
              <Box width={1} py={2} key={i}>
                {content}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductMobile;
