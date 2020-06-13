import r1 from './images/r1.jpg';
import r2 from './images/r2.jpg';
import r3 from './images/r3.jpg';
import r4 from './images/r4.jpg';
import r5 from './images/r5.jpg';

const defaulImages = [r1, r2, r3, r4, r5];

export default function sketch(p) {
  var img = [];
  var counter = 1;
  var topofscreen;
  var bottomofscreen;

  var sqsize = 40;
  var halfsq = 20;
  var imgxoff = 0;
  var imgyoff = 0;

  var arr = [];
  var lines = [];
  var section = 0;
  var state = 0;
  var splitString;
  var imageOptions = '1,2,3,4,5';
  var mx = 0;
  var widthFactor = 0.85;
  var padding = 80;

  p.preload = function () {
    for (let i = 0; i < imageOptions.split(',').length; i++) {
      img[i] = p.loadImage(defaulImages[i]);
    }
  };

  p.setup = function () {
    if (window.innerWidth < 900) widthFactor = 1;
    else if (window.innerWidth < 1400) widthFactor = 0.8;
    else widthFactor = 0.85;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    p.createCanvas(width, height);
    p.background(220);
    p.setDimensions();

    splitString = p.split(imageOptions, ',');
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.padding !== null) padding = props.padding;
    if (props.width !== null) widthFactor = props.width;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    p.resizeCanvas(width, height);
  };

  p.windowResized = function () {
    lines.splice(0, lines.length);

    if (window.innerWidth < 900) widthFactor = 1;
    else if (window.innerWidth < 1400) widthFactor = 0.8;
    else widthFactor = 0.85;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;
    p.createCanvas(width, height);

    p.setDimensions();
    p.background(220);
  };

  p.setDimensions = function () {
    // create array with swapped values
    while (arr.length <= 16 * p.ceil(p.width / 700)) {
      var randomnumber = p.ceil(p.random() * (16 * p.ceil(p.width / 700) + 1));
      if (arr.indexOf(randomnumber) >= 0) continue;
      arr[arr.length] = randomnumber;
    }
    sqsize = parseInt(p.width / (16 * p.ceil(p.width / 700)));
    halfsq = parseInt(sqsize * 0.5);
    section = parseInt(p.width / p.ceil(p.width / 700));
    imgxoff = parseInt((section - 756) * 0.5);
    imgyoff = parseInt(p.height * 0.5 - img[0].height * 0.5);
    topofscreen = parseInt(p.height * 0.2);
    bottomofscreen = parseInt(p.height * 0.8);
  };

  p.draw = function () {
    // Animated Objects
    if (arr.length > 0) {
      if (p.frameCount % p.round(p.random(100)) === 0) {
        var x = arr[arr.length - 1] * sqsize;
        lines.push(new Line(x));
        p.shorten(arr);
      }
    }
    for (var i = lines.length - 1; i >= 0; i--) {
      lines[i].show();
      if (lines[i].finished()) {
        lines.splice(i, 1);
      }
    }

    // Users' Mouse drawing elements
    if (p.mouseY > bottomofscreen || p.mouseY < topofscreen) {
      mx = p.mouseX;
      if (p.mouseY > p.height * 0.5) state = 1;
      else state = 2;
      counter = splitString[p.round(p.random(3))];
    } else {
      if (state === 2)
        p.copy(
          img[counter],
          (mx % section) - imgxoff - halfsq,
          topofscreen - halfsq - imgyoff,
          sqsize,
          p.mouseY - topofscreen + sqsize,
          mx - halfsq,
          topofscreen - halfsq,
          sqsize,
          p.mouseY - topofscreen + sqsize
        );
      else
        p.copy(
          img[counter],
          (mx % section) - imgxoff - halfsq,
          p.mouseY - halfsq - imgyoff,
          sqsize,
          bottomofscreen - p.mouseY + sqsize,
          mx - halfsq,
          p.mouseY - halfsq,
          sqsize,
          bottomofscreen - p.mouseY + sqsize
        );
    }

    p.noStroke();
    p.fill(255);
    p.rect(0, 0, p.width, p.height * 0.25);
    p.rect(0, p.height * 0.75, p.width, p.height * 0.25);
  };

  function Line(_x) {
    this.x = _x - halfsq;
    this.y = 0;
    this.r = p.height * 0.25 + sqsize;
    this.incr = p.random(1, 4);
    this.pos = p.round(p.random(1, 2));
    this.img = p.round(p.random(img.length - 1));
    this.angle = -90 + 180 * this.pos;
    this.prevY = this.y;
    this.diff = p.height * 0.5 + this.r * p.sin(p.radians(this.angle));

    this.show = function () {
      this.y = parseInt(p.height * 0.5 + this.r * p.sin(p.radians(this.angle)));
      p.copy(
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
}
