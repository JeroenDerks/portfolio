import React from 'react';
import AboutButtons from './AboutButtons';

import { Box, Grid, Typography } from '@material-ui/core';
import { AppContext } from 'pages/_app';

function Product({ props }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

  const { content, description, technologies, title } = props;
  const logos = technologies.logos;

  return (
    <div style={{ position: 'relative' }}>
      <Box
        boxSizing={'border-box'}
        display={'flex'}
        flexWrap="wrap"
        pt={padding.y}
        height={'100vh'}
        width={1}
      >
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
            <Grid container>
              {logos.map(({ logo, link }, i) => (
                <Grid item xs={1} sm={1} md={3} key={i}>
                  <a href={link}>
                    <img
                      src={logo}
                      alt={title}
                      target="_blank"
                      style={{ width: 20 }}
                    />
                  </a>
                </Grid>
              ))}
            </Grid>
            {technologies.location && (
              <Typography variant="body1">{technologies.location}</Typography>
            )}

            <Typography variant="body1">{technologies.subTitle}</Typography>
          </Grid>
        </Grid>

        <Box width={1} pb={padding.y / 2} alignSelf={'flex-end'}>
          <Grid container direction="row" alignItems="flex-end">
            <Grid item md={6} lg={7}>
              <Box width={1}>{content}</Box>
            </Grid>
            <Grid item md={4} lg={4}>
              <Box px={padding.text}>
                {description &&
                  description.map((section, i) => (
                    <Box pt={2} key={i}>
                      <Typography variant={'body1'} style={{ fontWeight: 700 }}>
                        {section.subtitle}
                      </Typography>
                      {section.data &&
                        section.data.map((expercience, j) => (
                          <Box pt={1} key={j}>
                            <Typography variant={'body1'}>
                              {expercience}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  ))}
              </Box>
            </Grid>
            <Grid item md={12}>
              <Box pt={padding.y / 2}>
                <AboutButtons />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Product;
