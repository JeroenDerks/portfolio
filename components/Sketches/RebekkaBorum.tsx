import React from 'react';
import dynamic from 'next/dynamic';

const RebekkaBorumSketch = dynamic(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

let img = [];
let counter = 1;
let topofscreen;
let bottomofscreen;

let sqsize = 40;
let halfsq = 20;
let imgxoff = 0;
let imgyoff = 0;

let arr = [];
let lines = [];
let section = 0;
let state = 0;
let splitString;
let imageOptions = '1,2,3,4,5';
let mx = 0;

export default ({ width, height }) => {
  const preload = (p5) => {
    for (let i = 0; i < 5; i++) {
      p5.loadImage(`/images/r${i + 1}.jpg`, (_img) => (img[i] = _img));
    }
  };

  const setup = (p5, canvasParentRef) => {
    const h = width > 900 ? height - 160 : height - 30;
    const w = canvasParentRef.clientWidth;

    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.background(220);
    setDimensions(p5);

    console.log(img);
    splitString = p5.split(imageOptions, ',');
  };

  const draw = (p5) => {
    // Animated Objects
    if (arr.length > 0) {
      if (p5.frameCount % p5.round(p5.random(100)) === 0) {
        var x = arr[arr.length - 1] * sqsize;
        lines.push(new Line(p5, x));
        p5.shorten(arr);
      }
    }
    for (var i = lines.length - 1; i >= 0; i--) {
      lines[i].show();
      if (lines[i].finished()) {
        lines.splice(i, 1);
      }
    }

    // Users' Mouse drawing elements
    if (p5.mouseY > bottomofscreen || p5.mouseY < topofscreen) {
      mx = p5.mouseX;
      if (p5.mouseY > p5.height * 0.5) state = 1;
      else state = 2;
      counter = splitString[p5.round(p5.random(3))];
    } else {
      if (state === 2)
        p5.copy(
          img[counter],
          (mx % section) - imgxoff - halfsq,
          topofscreen - halfsq - imgyoff,
          sqsize,
          p5.mouseY - topofscreen + sqsize,
          mx - halfsq,
          topofscreen - halfsq,
          sqsize,
          p5.mouseY - topofscreen + sqsize
        );
      else
        p5.copy(
          img[counter],
          (mx % section) - imgxoff - halfsq,
          p5.mouseY - halfsq - imgyoff,
          sqsize,
          bottomofscreen - p5.mouseY + sqsize,
          mx - halfsq,
          p5.mouseY - halfsq,
          sqsize,
          bottomofscreen - p5.mouseY + sqsize
        );
    }

    p5.noStroke();
    p5.fill(255);
    p5.rect(0, 0, p5.width, p5.height * 0.25);
    p5.rect(0, p5.height * 0.75, p5.width, p5.height * 0.25);
  };

  const setDimensions = (p5) => {
    // create array with swapped values
    while (arr.length <= 16 * p5.ceil(p5.width / 700)) {
      var randomnumber = p5.ceil(
        p5.random() * (16 * p5.ceil(p5.width / 700) + 1)
      );
      if (arr.indexOf(randomnumber) >= 0) continue;
      arr[arr.length] = randomnumber;
    }
    sqsize = Math.round(p5.width / (16 * p5.ceil(p5.width / 700)));
    halfsq = Math.round(sqsize * 0.5);
    section = Math.round(p5.width / p5.ceil(p5.width / 700));
    imgxoff = Math.round((section - 756) * 0.5);
    imgyoff = Math.round(p5.height * 0.5 - img[0]?.height * 0.5);
    topofscreen = Math.round(p5.height * 0.2);
    bottomofscreen = Math.round(p5.height * 0.8);
  };

  function Line(p5, _x) {
    this.x = _x - halfsq;
    this.y = 0;
    this.r = p5.height * 0.25 + sqsize;
    this.incr = p5.random(1, 4);
    this.pos = p5.round(p5.random(1, 2));
    this.img = p5.round(p5.random(img.length - 1));
    this.angle = -90 + 180 * this.pos;
    this.prevY = this.y;
    this.diff = p5.height * 0.5 + this.r * p5.sin(p5.radians(this.angle));

    this.show = function () {
      this.y = Math.round(
        p5.height * 0.5 + this.r * p5.sin(p5.radians(this.angle))
      );
      p5.copy(
        img[this.img],
        (this.x % section) - imgxoff,
        this.y - imgyoff,
        sqsize,
        sqsize,
        this.x,
        this.y,
        sqsize,
        sqsize
      );
      this.angle += this.incr;
      this.diff = this.y - this.prevY;
      this.prevY = this.y;
    };
    this.finished = function () {
      if (this.pos === 2 && this.diff < 0) {
        return true;
      } else if (this.pos !== 2 && this.diff > 0 && this.diff < 100) {
        return true;
      }
    };
  }

  return <RebekkaBorumSketch setup={setup} draw={draw} preload={preload} />;
};
