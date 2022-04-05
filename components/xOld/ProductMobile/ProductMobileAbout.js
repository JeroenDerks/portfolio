import React from 'react';
import AboutButtons from '../Product/AboutButtons';
import { Box, Grid, Typography } from '@material-ui/core';

function ProductMobileAbout({ props }) {
  const { content, description, technologies, title } = props;
  const logos = technologies.logos;

  return (
    <Box>
      <Box boxSizing={'border-box'} pt={10} width={1}>
        <Typography variant="h2">{title}</Typography>
        <Box pt={1} />
        <Typography variant="body1">
          {technologies.location && technologies.location}
          {' - '} {technologies.subTitle}
        </Typography>

        <Box pt={1} />
        <Grid container spacing={1}>
          {logos.map(({ logo, link, title }, i) => (
            <Grid item xs={2} sm={1} md={3} key={i}>
              <a href={link}>
                <img src={logo} alt={title} style={{ width: 16 }} />
              </a>
            </Grid>
          ))}
        </Grid>

        <Box>
          {description &&
            description.map((section, i) => (
              <Box pt={1} key={i}>
                <Box pt={2}>
                  <Typography variant={'body1'} style={{ fontWeight: 700 }}>
                    {section.subtitle}
                  </Typography>
                </Box>
                {section.data &&
                  section.data.map((expercience, j) => (
                    <Box py={1} key={j}>
                      <Typography variant={'body1'}>{expercience}</Typography>
                    </Box>
                  ))}
              </Box>
            ))}
        </Box>

        <Box pt={2}>{content}</Box>
        <Box py={4}>
          <AboutButtons />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductMobileAbout;
