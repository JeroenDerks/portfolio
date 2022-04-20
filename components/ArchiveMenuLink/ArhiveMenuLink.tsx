import React from 'react';
import styled from '@mui/system/styled';
import Link from 'next/link';

export const StyledLink = styled('a')({
  color: '#000',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  fontSize: 13,
  marginBottom: 4,
  marginLeft: -2,
  padding: '0px 2px',
  width: 'fit-content',

  '&:hover': {
    color: '#fff',
    backgroundColor: '#000',
  },
});

const ArchiveMenuLink = ({
  children,
  href,
}: {
  children: string;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

export default ArchiveMenuLink;
