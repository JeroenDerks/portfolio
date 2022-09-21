import React from 'react';
import dynamic from 'next/dynamic';

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});
let distance = [];
let mousex = [];
let mousey = [];
let speedx = [];
let avgspeedx = [];
let speedy = [];
let avgspeedy = [];
let totalspeed = 0;
let acceleration = 0;
let previousspeed = 0;
let totalcount = 0;
let avgmovement = 0;
let click = 0;
let w025, w075;
let htop, hmid, hlow;
let fadeIn = true;
let paddingLeft = 80;

export default ({ width, height }) => {
  const setup = (p5, canvasParentRef) => {
    const w = width || window.innerWidth;
    const h = height || window.innerHeight;
    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.pixelDensity(1);
    p5.background(255);
    p5.noStroke();

    w025 = 0.56 * p5.width - p5.height * 0.05;
    w075 = p5.width * 0.74;
    hmid = p5.height * 0.77 - (0.56 * p5.width - p5.height * 0.15) * 0.5625;
    htop = hmid;
    hlow = p5.height * 0.8;
    if (window.innerWidth > 1400) paddingLeft = 120;
    p5.textSize(12);
  };

  const mousePressed = (p5) => {
    click += 1;
    fadeIn = true;
  };

  const draw = (p5) => {
    if (fadeIn);
    else if (
      mousex[0] === p5.mouseX &&
      mousey[0] === p5.mouseY &&
      acceleration === 0
    )
      return;
    p5.background(255);

    for (let i = 9; i > 0; i--) {
      speedx[i] = speedx[i - 1];
      speedy[i] = speedy[i - 1];
      avgspeedx[i] = avgspeedx[i - 1];
      avgspeedy[i] = avgspeedy[i - 1];
    }
    speedx[0] = p5.abs(p5.pmouseX - p5.mouseX);
    speedy[0] = p5.abs(p5.pmouseY - p5.mouseY);

    avgspeedx[0] = p5.round(speedx.reduce((a, b) => a + b, 0) * 0.1);
    avgspeedy[0] = p5.round(speedy.reduce((a, b) => a + b, 0) * 0.1);

    totalspeed = avgspeedx[0] + avgspeedy[0];
    acceleration = totalspeed - previousspeed;

    totalcount =
      totalcount +
      p5.abs(p5.pmouseY - p5.mouseY) +
      p5.abs(p5.pmouseX - p5.mouseX);

    avgmovement = p5.round(totalcount / p5.frameCount);

    for (let i = avgmovement; i > 0; i--) {
      mousex[i] = mousex[i - 1];
      mousey[i] = mousey[i - 1];
      distance[i] = distance[i - 1];
    }
    mousex[0] = p5.mouseX;
    mousey[0] = p5.mouseY;
    distance[0] = p5.int(p5.dist(w025, hmid, p5.mouseX - 4, p5.mouseY + 3));

    for (let i = avgmovement; i > 0; i--) {
      p5.fill(255, 255, 235);
      p5.stroke(255);
      p5.strokeWeight(2);

      let scaleX = distance[i] + speedx[i] + avgspeedx[i];
      let scaleY = distance[i] + speedy[i] + avgspeedy[i];
      if (Number.isInteger(scaleX) && Number.isInteger(scaleY))
        p5.ellipse(mousex[i], mousey[i], scaleX, scaleY);
    }
    p5.stroke(255, 255, 150);
    p5.strokeWeight(click);
    p5.fill(255, 255, 0);

    let scaleX = distance[0] + speedx[0] + avgspeedx[0];
    let scaleY = distance[0] + speedy[0] + avgspeedy[0];
    if (Number.isInteger(scaleX) && Number.isInteger(scaleY))
      p5.ellipse(mousex[0], mousey[0], scaleX, scaleY);

    p5.fill(50);
    p5.noStroke();

    p5.text(distance[0], w025, hmid);
    // text(a + "\u00B0", w050, hmid);
    p5.text(p5.int(p5.mouseX), paddingLeft, hmid);
    p5.text(p5.int(p5.mouseY), paddingLeft, hmid + 20);
    p5.text(click, w075, htop);
    p5.text(avgspeedx[0], paddingLeft, hlow - 20);
    p5.text(avgspeedy[0], paddingLeft, hlow);
    // text(tm, 80, hlow)    HERE COMES VELOCITY = TM + RELATIVE DIRECTION
    p5.text(acceleration, w025, hlow);
    p5.text(avgmovement, w075, hlow);
    previousspeed = totalspeed;

    if (fadeIn) {
      p5.fill(255, 255 - p5.frameCount * 5);
      p5.rect(0, 0, p5.width, p5.height);
      if (p5.frameCount * 5 > 255) fadeIn = false;
    }
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
};
