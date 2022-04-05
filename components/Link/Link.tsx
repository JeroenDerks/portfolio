import React from 'react';
import Link from 'next/link';

const LinkComponent = ({
  href,
  variant,
  children,
}: {
  href: string;
  variant?: 'small' | 'large';
  children: string;
}) => {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkComponent;
