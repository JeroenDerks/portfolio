import React from 'react';
import Sticky from 'react-sticky-el';
import { Box, Grid, Typography } from '@material-ui/core';
import { AppContext } from 'App';
import { linkStyle } from 'styles/global';

const ASPECT_RATIO = 0.5625;
const MAX_COLUMNS = 12;
const USED_COLUMNS = 7;

function Product({ props }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

  const classes = linkStyle();

  const { title, technologies, description, content, link } = props;
  const id = title.replace(/\s/g, '');

  const paddingX = padding.x * 8 * 2;
  const paddingY = padding.y * 8;

  const widthUsedColumns =
    ((window.innerWidth - paddingX) / MAX_COLUMNS) * USED_COLUMNS;
  const elementHeight = widthUsedColumns * ASPECT_RATIO;

  const paddingFirstElement = window.innerHeight - paddingY - elementHeight;

  return (
    <div id={id} style={{ position: 'relative' }}>
      <Sticky
        boundaryElement={'#' + id}
        style={{ position: 'relative' }}
        stickyStyle={{ pointerEvents: 'none', zIndex: '1000' }}
        hideOnBoundaryHit={false}
      >
        <Box
          boxSizing={'border-box'}
          display={'flex'}
          flexWrap="wrap"
          pt={padding.y}
          height={'100vh'}
          width={1}
        >
          <Grid container spacing={2} style={{ height: 'max-content' }}>
            <Grid item sm={12} md={10} lg={11}>
              <Typography variant="h2">{title}</Typography>
            </Grid>
            <Grid item sm={12} md={2} lg={1}>
              <Box px={1}>
                <Typography variant="body1">
                  <span style={{ fontWeight: 700 }}>
                    {technologies.mainTitle}
                  </span>
                </Typography>
                {technologies.location && (
                  <Box pt={1}>
                    <Typography variant="body1">
                      {technologies.location}
                    </Typography>
                  </Box>
                )}

                <Box pt={1}>
                  <Typography variant="body1">
                    {technologies.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box width={1} pb={padding.y} alignSelf={'flex-end'}>
            <Grid container spacing={0}>
              <Grid item md={7} lg={7}></Grid>
              <Grid item md={3} lg={4}>
                <Box px={8}>
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
                  pb={padding.y}
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
