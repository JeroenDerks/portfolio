import React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import ArchiveMenuLink from 'components/ArchiveMenuLink';
import Typography from '@mui/material/Typography';
import { projects } from './menuData';

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100vh',
  position: 'fixed',
  top: 0,
});

const ArchiveMenu = () => {
  return (
    <Wrapper py={{ xs: 1, sm: 1, md: 10 }}>
      {projects.map(({ title, data }) => (
        <Box key={title} mt={2} flexDirection="column" display="flex">
          <Typography variant="subtitle1" textTransform="uppercase" mb={1}>
            {title}
          </Typography>
          {data.map(({ name, slug }) => (
            <ArchiveMenuLink href={`/archive/${slug}`} key={name}>
              {name}
            </ArchiveMenuLink>
          ))}
        </Box>
      ))}
    </Wrapper>
  );
};

export default ArchiveMenu;
