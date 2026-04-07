import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

const NextImage = ({
  src,
  alt,
  unoptimized,
}: {
  src: StaticImageData;
  alt: string;
  unoptimized?: boolean;
}) => {
  const aspectPaddingPercent = (src.height / src.width) * 100;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: `${aspectPaddingPercent}%`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 900px) 50vw, 100vw"
        style={{ objectFit: 'cover' }}
        placeholder={!unoptimized ? 'blur' : 'empty'}
        unoptimized={unoptimized}
      />
    </div>
  );
};

export default NextImage;
