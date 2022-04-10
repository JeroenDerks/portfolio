import React from 'react';
import styled from '@mui/system/styled';
import Link from 'next/link';

export const StyledLink = styled('a')(
  ({ variant }: { variant?: 'small' | 'large' }) => ({
    color: variant === 'small' ? '#fff' : '#000',
    backgroundColor: variant === 'small' ? '#000' : 'transparent',
    cursor: 'pointer',
    transition: 'all .2s',
    textDecoration: 'none',
    fontWeight: variant === 'small' ? '500' : 'bold',
    fontSize: variant === 'small' ? 13 : 20,
    padding: '0px 4px',

    '&:hover': {
      backgroundColor: '#000',
      color: '#fff',
    },
  })
);

const LinkComponent = ({
  children,
  href,
  target,
  variant,
}: {
  children: string;
  href: string;
  target?: string;
  variant?: 'small' | 'large';
}) => {
  return (
    <Link href={href} passHref={target && true}>
      <StyledLink variant={variant} target={target}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default LinkComponent;
