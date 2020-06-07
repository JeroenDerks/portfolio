import React from 'react';
import Sticky from 'react-sticky-el';
import { Box, Grid, Typography } from '@material-ui/core';
import { AppContext } from 'App';
import { linkStyle } from 'styles/global';

function Product({ props }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

  const classes = linkStyle();

  const { title, technologies, description, content, link } = props;
  const id = title.replace(/\s/g, '');

  const totalPadding = padding * 8 * 2;
  const elementHeight = ((window.innerWidth - 160) / 12) * 7 * 0.544;
  const paddingFirstElement = window.innerHeight - totalPadding - elementHeight;

  return (
    <div id={id} style={{ position: 'relative' }}>
      <Sticky
        boundaryElement={'#' + id}
        style={{
          position: 'relative',
        }}
        stickyStyle={{ pointerEvents: 'none', zIndex: '1000' }}
        hideOnBoundaryHit={false}
      >
        <Box
          boxSizing={'border-box'}
          display={'flex'}
          flexWrap="wrap"
          pt={padding > 10 ? 10 : padding}
          height={'100vh'}
          width={1}
        >
          <Grid container spacing={2} style={{ height: 'max-content' }}>
            <Grid item sm={12} md={10} lg={10}>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            <Grid item sm={12} md={2} lg={2}>
              <Box px={1}>
                <Typography variant="body1">
                  <span style={{ fontWeight: 700 }}>
                    {technologies.mainTitle}
                  </span>
                </Typography>
                {technologies.location && (
                  <Box pt={2}>
                    <Typography variant="body1">
                      {technologies.location}
                    </Typography>
                  </Box>
                )}

                <Box pt={2}>
                  <Typography variant="body1">
                    {technologies.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box width={1} pb={padding} alignSelf={'flex-end'}>
            <Grid container spacing={2}>
              <Grid item md={7} lg={7}></Grid>
              <Grid item md={3} lg={3}>
                <Box px={1}>
                  {description &&
                    description.map((paragraph, i) => (
                      <Box pb={1} key={i}>
                        <Typography variant={'body1'}>{paragraph}</Typography>
                      </Box>
                    ))}
                  {link && (
                    <Typography variant="body1" className={classes.wrapper}>
                      {link}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Sticky>

      <Box style={{ marginTop: '-100vh' }}>
        <Grid container spacing={0}>
          {content &&
            content.map((element, i) => (
              <Grid item md={7} key={i}>
                <Box
                  width={1}
                  pb={padding}
                  style={{ paddingTop: i === 0 ? paddingFirstElement : 0 }}
                >
                  {element}
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
