import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { linkStyle } from 'styles/global';

function ProductMobile({ props }) {
  const {
    title,
    technologies,
    description,
    contentMobile,
    link,
    linkText,
  } = props;

  const classes = linkStyle();

  return (
    <Box>
      <Box boxSizing={'border-box'} pt={10} width={1}>
        <Typography variant="h2">{title}</Typography>
        <Box py={1}>
          <Typography variant="body1">
            <span style={{ fontWeight: 700 }}>{technologies.mainTitle} </span>
            {technologies.location && ' - ' + technologies.location}
            {' - '} {technologies.subTitle}
          </Typography>
        </Box>
        <Box py={1}>
          <Typography variant={'body1'}>
            {description && description.map((paragraph) => paragraph)}
          </Typography>
          {link && (
            <Typography variant="body1" className={classes.wrapper}>
              {link}
            </Typography>
          )}
        </Box>
        <Box>
          {contentMobile &&
            contentMobile.map((content, i) => (
              <Box width={1} pb={10} key={i}>
                {content}
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default ProductMobile;
