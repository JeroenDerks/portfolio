import React from 'react';
import Sticky from 'react-sticky-el';
import { Box, Grid } from '@material-ui/core';
import { AppContext } from 'App';
import ProductHeader from './ProductHeader';
import ProductDescription from './ProductDescription';

const ASPECT_RATIO = 0.5625;
const MAX_COLUMNS = 12;
const USED_COLUMNS = 7;

function Product({ props }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

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
          boxSizing="border-box"
          display="flex"
          flexWrap="wrap"
          pt={padding.y}
          height="100vh"
          width={1}
        >
          <ProductHeader title={title} technologies={technologies} />

          <Box width={1} pb={padding.y} alignSelf={'flex-end'}>
            <Grid container spacing={0}>
              <Grid item md={6} lg={7}></Grid>
              <Grid item md={4} lg={4}>
                <ProductDescription description={description} link={link} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Sticky>

      <Box style={{ marginTop: '-100vh' }}>
        <Grid container spacing={0}>
          {content &&
            content.map((element, i) => (
              <React.Fragment key={i}>
                <Grid item md={6} lg={7}>
                  <Box
                    width={1}
                    pb={padding.y}
                    style={{ paddingTop: i === 0 ? paddingFirstElement : 0 }}
                  >
                    {element}
                  </Box>
                </Grid>
                <Grid item md={6}></Grid>
              </React.Fragment>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Product;
