import React from 'react';
import dynamic from 'next/dynamic';

const CursorSketch = dynamic(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

let mouse;
let incr = 0;

export default ({ width, height }) => {
  const preload = (p5) => {
    p5.loadImage('/images/cursor.png', (img) => (mouse = img));
  };

  const setup = (p5, canvasParentRef) => {
    const h = width > 900 ? height - 160 : height - 140;
    const w = canvasParentRef.clientWidth;

    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.pixelDensity(1);
    p5.noStroke();
  };

  const draw = (p5) => {
    incr += 0.005;
    p5.background(255);
    for (let i = 30; i < p5.width - 30; i += 30) {
      for (let j = 30; j < p5.height; j += 30) {
        p5.push();
        p5.translate(i, j);
        let a = p5.atan2(p5.mouseY - j, p5.mouseX - i);
        a += incr;
        p5.rotate(a);
        p5.image(mouse, 0, 0, 15, 25);
        p5.pop();
      }
    }
  };

  return <CursorSketch setup={setup} draw={draw} preload={preload} />;
};
