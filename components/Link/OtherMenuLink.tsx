import React from 'react';
import styled from '@mui/system/styled';
import Link from 'next/link';

export const StyledLink = styled('a')(({ active }: { active?: boolean }) => ({
  color: '#000',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all .2s',
  textDecoration: active ? 'underline' : 'none',
  fontSize: 13,
  marginBottom: 4,

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const LinkComponent = ({
  active,
  children,
  href,
}: {
  active: boolean;
  children: string;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink active={active}>{children}</StyledLink>
    </Link>
  );
};

export default LinkComponent;
