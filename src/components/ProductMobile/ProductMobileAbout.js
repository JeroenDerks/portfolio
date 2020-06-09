import React from 'react';
import AboutButtons from '../Product/AboutButtons';
import { Box, Typography } from '@material-ui/core';
import { linkStyle } from 'styles/global';

function ProductMobileAbout({ props }) {
  const { title, technologies, description, content } = props;

  return (
    <Box>
      <Box boxSizing={'border-box'} pt={10} width={1}>
        <Typography variant="h2">{title}</Typography>

        <Typography variant="body1">
          <span style={{ fontWeight: 700 }}>{technologies.mainTitle} </span>
          {technologies.location && ' - ' + technologies.location}
          {' - '} {technologies.subTitle}
        </Typography>

        <Box pt={2}>
          {description &&
            description.map((section, i) => (
              <Box pt={1} key={i}>
                <Typography variant={'body1'} style={{ fontWeight: 700 }}>
                  {section.subtitle}
                </Typography>
                {section.data &&
                  section.data.map((expercience, j) => (
                    <Box pt={1} key={j}>
                      <Typography variant={'body1'}>{expercience}</Typography>
                    </Box>
                  ))}
              </Box>
            ))}
        </Box>

        <Box>{content}</Box>
        <AboutButtons />
      </Box>
    </Box>
  );
}

export default ProductMobileAbout;
