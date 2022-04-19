import React from 'react';
import styled from '@mui/system/styled';
import Link from 'next/link';

export const StyledLink = styled('a')(
  ({
    noHoverEffect,
    variant,
  }: {
    noHoverEffect: true | undefined;
    variant?: 'small' | 'large';
  }) => ({
    color: variant === 'small' ? '#fff' : '#000',
    backgroundColor: variant === 'small' ? '#000' : 'transparent',
    cursor: 'pointer',
    transition: 'all .2s',
    textDecoration: 'none',
    fontWeight: variant === 'small' ? '500' : 'bold',
    fontSize: variant === 'small' ? 13 : 20,
    padding: noHoverEffect === undefined && '0px 4px',

    '&:hover': {
      backgroundColor: noHoverEffect === undefined && '#000',
      color: noHoverEffect === undefined && '#fff',
    },
  })
);

const LinkComponent = ({
  children,
  href,
  noHoverEffect,
  target,
  variant,
}: {
  children: string | React.ReactNode;
  href: string;
  noHoverEffect?: true;
  target?: string;
  variant?: 'small' | 'large';
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink
        noHoverEffect={noHoverEffect}
        target={target}
        variant={variant}
      >
        {children}
      </StyledLink>
    </Link>
  );
};

export default LinkComponent;
