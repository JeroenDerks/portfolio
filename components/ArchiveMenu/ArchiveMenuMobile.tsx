import React, { useState } from 'react';
import styled from '@mui/system/styled';
import ArchiveMenuLink from 'components/ArchiveMenuLink';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Typography from '@mui/material/Typography';
import { projects } from './menuData';
import { useRouter } from 'next/router';

const MenuContainer = styled(Box)({
  background: '#fff',
  borderBottom: '1px solid grey',
});

const leftColumn = projects.filter((p, i) => i < 2);
const rightColumn = projects.filter((p, i) => i >= 2);

const ArchiveMenuMobile = () => {
  const [state, setState] = useState(false);
  const router = useRouter();

  const reducedRoute = projects.reduce((acc, val) => {
    const match = val.data.find(({ slug }) => router.pathname.includes(slug));
    if (match) acc = val.title + ' > ' + match.name;
    return acc;
  }, '');

  const toggleDrawer = (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <Box position="fixed" top={0} left={0} width={1}>
      <MenuContainer px={2} py={1}>
        <Box display="flex" justifyContent="space-between" pt={2}>
          <Typography>{reducedRoute}</Typography>
          <button onClick={() => toggleDrawer(!state)}>toggle</button>
        </Box>
      </MenuContainer>

      <SwipeableDrawer
        anchor="top"
        open={state}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Grid container px={2} pt={2} pb={4}>
          <Grid item xs={6} sm={6}>
            {leftColumn.map(({ title, data }) => (
              <Box key={title} mt={2} flexDirection="column" display="flex">
                <Typography
                  variant="subtitle1"
                  textTransform="uppercase"
                  mb={1}
                >
                  {title}
                </Typography>
                {data.map(({ name, slug }) => (
                  <ArchiveMenuLink href={`/archive/${slug}`} key={name}>
                    {name}
                  </ArchiveMenuLink>
                ))}
              </Box>
            ))}
          </Grid>
          <Grid item xs={6} sm={6}>
            {rightColumn.map(({ title, data }) => (
              <Box key={title} mt={2} flexDirection="column" display="flex">
                <Typography
                  variant="subtitle1"
                  textTransform="uppercase"
                  mb={1}
                >
                  {title}
                </Typography>
                {data.map(({ name, slug }) => (
                  <ArchiveMenuLink href={`/archive/${slug}`} key={name}>
                    {name}
                  </ArchiveMenuLink>
                ))}
              </Box>
            ))}
          </Grid>
        </Grid>
      </SwipeableDrawer>
    </Box>
  );
};

export default ArchiveMenuMobile;
