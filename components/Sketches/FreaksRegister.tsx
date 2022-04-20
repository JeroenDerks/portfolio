import React from 'react';
import dynamic from 'next/dynamic';

const FreaksRegisterSketch = dynamic(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

var v = [];
var x = 0;
var targetx = 2;
var incr = 1;
const TOTAL_IMG = 57;

export default ({ width, height }) => {
  const preload = (p5) => {
    for (let i = 0; i < 57; i++) {
      p5.loadImage(
        `/images/freaks_register/fr-${i + 1}.jpg`,
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
    targetx = p5.floor(p5.map(p5.mouseX, 0, p5.width, TOTAL_IMG, 0));
    if (targetx >= TOTAL_IMG) targetx = TOTAL_IMG;
    if (targetx <= 1) targetx = 1;
    if (x === targetx) return;

    if (x - targetx < 0) incr = 1;
    else incr = -1;

    if (x !== targetx) x += incr;

    if (v[x]) p5.image(v[x], 0, 0, p5.width, p5.height);
  };

  return <FreaksRegisterSketch setup={setup} draw={draw} preload={preload} />;
};
