import React from 'react';
import AboutButtons from './AboutButtons';
import FadeInSection from './FadeInSection';
import ProductHeader from './ProductHeader';

import { Box, Grid, Typography } from '@material-ui/core';
import { AppContext } from 'App';

function Product({ props }) {
  const {
    state: { padding },
  } = React.useContext(AppContext);

  const { title, technologies, description, content } = props;

  return (
    <div style={{ position: 'relative' }}>
      <FadeInSection>
        <Box
          boxSizing={'border-box'}
          display={'flex'}
          flexWrap="wrap"
          pt={padding.y}
          height={'100vh'}
          width={1}
        >
          <ProductHeader title={title} technologies={technologies} />

          <Box width={1} pb={padding.y} alignSelf={'flex-end'}>
            <Grid container direction="row" alignItems="flex-end">
              <Grid item md={6} lg={7}>
                <Box width={1}>{content}</Box>
              </Grid>
              <Grid item md={4} lg={4}>
                <Box px={padding.text}>
                  {description &&
                    description.map((section, i) => (
                      <Box pt={2} key={i}>
                        <Typography
                          variant={'body1'}
                          style={{ fontWeight: 700 }}
                        >
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
                <AboutButtons />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </FadeInSection>
    </div>
  );
}

export default Product;
