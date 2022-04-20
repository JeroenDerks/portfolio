import React from 'react';
import dynamic from 'next/dynamic';

const InformationAgeSketch = dynamic(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

var v = [];
var x = 0;
var targetx = 2;
var incr = 1;

export default ({ width, height }) => {
  const preload = (p5) => {
    for (let i = 0; i < 43; i++) {
      p5.loadImage(
        `/images/aalborg_surreal/HEADS00${i}.jpg`,
        (img) => (v[i] = img)
      );
    }
  };

  const setup = (p5, canvasParentRef) => {
    const h = width > 900 ? height - 160 : height - 30;
    const w = canvasParentRef.clientWidth;

    p5.createCanvas(w, h).parent(canvasParentRef);
  };

  const draw = (p5) => {
    targetx = p5.floor(p5.map(p5.mouseX || 0, 0, p5.width, 0, 42));
    if (targetx >= 42) targetx = 42;
    if (x === targetx) return;

    if (x - targetx <= 0) incr = 1;
    else incr = -1;

    if (x !== targetx) x += incr;

    if (x < 0) x = 0;
    p5.image(v[x], 0, 0, p5.width, p5.height);
  };

  return <InformationAgeSketch setup={setup} draw={draw} preload={preload} />;
};
