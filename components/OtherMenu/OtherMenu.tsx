import React from 'react';
import styled from '@mui/system/styled';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { OtherMenuLink } from 'components/Link';
import { Typography } from '@mui/material';

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  height: '100vh',
  position: 'fixed',
  top: 0,
});

const projects = [
  {
    title: 'DHI GRAS',
    data: [
      { name: 'portals', slug: 'dhi-portals' },
      { name: 'website', slug: 'dhi-website' },
      { name: 'videos', slug: 'dhi-videos' },
    ],
  },
  {
    title: 'Installations',
    data: [
      { name: 'snake skin', slug: 'snake-skin' },
      { name: 'konstruktor', slug: 'konstruktor' },
      { name: 'dynamic still', slug: 'dynamic-still' },
      { name: 'ludic code', slug: 'ludic-code' },
      { name: 'nodes', slug: 'nodes' },
      { name: 'stop motion machine', slug: 'stop-motion-machine' },
      { name: 'cover', slug: 'cover' },
      { name: 'urbanplanen', slug: 'urbanplanen' },
      // { name: 'the freaks register', slug: 'the-freaks-register' },
      { name: 'the shy die', slug: 'the-shy-die' },
    ],
  },
  {
    title: 'Videos',
    data: [
      { name: 'pilebyg', slug: 'pilebyg' },
      { name: 'sofar sounds', slug: 'sofar-sounds' },
      { name: 'oersterk', slug: 'oersterk' },
      { name: 'den sorte skole', slug: 'den-sorte-skole' },
      { name: 'laylor performance systems', slug: 'lps' },
      { name: 'aboveground art supplies', slug: 'aboveground' },
      { name: 'just water', slug: 'just-water' },
      { name: "man's mind", slug: 'mans-mind' },
      { name: 'fitting in', slug: 'fitting-in' },
      { name: 'au2pilot', slug: 'au2pilot' },
    ],
  },
];
const OtherMenu = () => {
  const router = useRouter();

  return (
    <Wrapper py={{ xs: 1, sm: 1, md: 10 }}>
      {projects.map(({ title, data }) => (
        <Box key={title} mt={2} flexDirection="column" display="flex">
          <Typography variant="subtitle1" textTransform="uppercase" mb={1}>
            {title}
          </Typography>
          {data.map(({ name, slug }) => (
            <OtherMenuLink
              active={router.asPath.includes(slug) ? true : false}
              href={`/others/${slug}`}
              key={name}
            >
              {name}
            </OtherMenuLink>
          ))}
        </Box>
      ))}
    </Wrapper>
  );
};

export default OtherMenu;
