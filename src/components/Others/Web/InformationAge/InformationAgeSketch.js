export default function sketch(p) {
  var letters = [];

  var x = 16;
  var y = 30;
  var c = 0;
  var mx = 0;
  var my = 0;
  var easing = 0.05;
  var s = 'INFORMATION AGE ';

  var padding = 80;
  var widthFactor = 0.8;
  var initiated = false;
  const ASPECT_RATIO = 0.5625;

  p.setup = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
      height = window.innerHeight - padding * 2;
    }

    p.createCanvas(width, height);

    p.textSize(20);
    p.background(255);
    p.fill(0);
    p.textAlign(p.CENTER);
    p.stroke(255);

    for (let j = 0; j <= p.height; j += y) {
      for (let i = 0; i <= p.width; i += x) {
        letters.push(new Letter(i, j, c % s.length));
        c++;
      }
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.padding !== null) padding = props.padding;
    if (props.width !== null) widthFactor = props.width;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
      height = window.innerHeight - padding * 2;
    }

    p.resizeCanvas(width, height);
  };

  p.windowResized = function () {
    c = 0;
    letters.splice(1, letters.length);

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
      height = width * ASPECT_RATIO;
    }

    p.resizeCanvas(width, height);

    p.background(255);
    for (let j = 0; j <= p.height; j += y) {
      for (let i = 0; i <= p.width; i += x) {
        letters.push(new Letter(i, j, c % s.length));
        c++;
      }
    }
    initiated = false;
  };

  p.draw = function () {
    if ((p.mouseX !== 0 && p.mouseY !== 0) || !initiated) {
      const dx = p.mouseX - mx;
      mx += dx * easing;
      const dy = p.mouseY - my;
      my += dy * easing;

      initiated = true;

      for (var i = 0; i < letters.length; i++) {
        letters[i].hovered();
        if (letters[i].r === 1) letters.splice(i, 1);
      }
    }
  };

  function Letter(_x, _y, _i) {
    this.x = _x - 20;
    this.y = _y - 5;
    this.i = _i;
    this.r = 0;
    p.text(s.charAt(this.i), this.x, this.y);

    this.hovered = function () {
      var dx = p.abs(mx - this.x);
      var dy = p.abs(my - this.y);
      if (dx < p.random(120) && dy < p.random(120)) {
        this.i = p.round(p.random(16));
        this.r = p.round(p.random(50));
        p.fill(255);
        p.rect(this.x - 8, this.y - y, x, y);
        p.fill(0);
        if (this.r !== 1) {
          p.text(s.charAt(this.i), this.x, this.y);
        }
      }
    };
  }
}
