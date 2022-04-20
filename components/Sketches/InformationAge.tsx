import React from 'react';
import dynamic from 'next/dynamic';

const InformationAgeSketch = dynamic(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

let letters = [];

let x = 16;
let y = 30;
let c = 0;
let mx = 0;
let my = 0;
let easing = 0.05;
let s = 'INFORMATION AGE ';
let initiated = false;

export default ({ width, height }) => {
  function Letter(p5, _x, _y, _i) {
    this.x = _x - 20;
    this.y = _y - 5;
    this.i = _i;
    this.r = 0;
    p5.text(s.charAt(this.i), this.x, this.y);

    this.hovered = function () {
      let dx = p5.abs(mx - this.x);
      let dy = p5.abs(my - this.y);
      if (dx < p5.random(120) && dy < p5.random(120)) {
        this.i = p5.round(p5.random(16));
        this.r = p5.round(p5.random(50));
        p5.fill(255);
        p5.rect(this.x - 8, this.y - y, x, y);
        p5.fill(0);
        if (this.r !== 1) {
          p5.text(s.charAt(this.i), this.x, this.y);
        }
      }
    };
  }

  const setup = (p5, canvasParentRef) => {
    const h = width > 900 ? height - 160 : height - 30;
    const w = canvasParentRef.clientWidth;

    p5.createCanvas(w, h).parent(canvasParentRef);

    p5.textSize(20);
    p5.background(255);
    p5.fill(0);
    p5.textAlign(p5.CENTER);
    p5.stroke(255);

    for (let j = 0; j <= p5.height; j += y) {
      for (let i = 0; i <= p5.width; i += x) {
        letters.push(new Letter(p5, i, j, c % s.length));
        c++;
      }
    }
  };

  const draw = (p5) => {
    if ((p5.mouseX !== 0 && p5.mouseY !== 0) || !initiated) {
      const dx = p5.mouseX - mx;
      mx += dx * easing;
      const dy = p5.mouseY - my;
      my += dy * easing;

      initiated = true;

      for (let i = 0; i < letters.length; i++) {
        letters[i].hovered();
        if (letters[i].r === 1) letters.splice(i, 1);
      }
    }
  };

  return <InformationAgeSketch setup={setup} draw={draw} />;
};
