import React from 'react';
import Image from 'next/image';

declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

const NextImage = ({
  src,
  alt,
  unoptimized,
}: {
  src: StaticImageData;
  alt: string;
  unoptimized?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    width="1080"
    height="608"
    placeholder={!unoptimized ? 'blur' : 'empty'}
    unoptimized={unoptimized}
  />
);

export default NextImage;
