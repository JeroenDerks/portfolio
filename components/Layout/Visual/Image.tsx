import React from 'react';
import Image from 'next/image';

declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

const NextImage = ({ src, alt }: { src: StaticImageData; alt: string }) => (
  <Image src={src} alt={alt} width="1080" height="608" placeholder="blur" />
);

export default NextImage;
