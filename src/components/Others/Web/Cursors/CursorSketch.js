import cursor from 'assets/others/cursor.png';

export default function sketch(p) {
  let mouse;
  let incr = 0;
  let padding = 80;
  let widthFactor = 0.8;

  p.preload = function () {
    mouse = p.loadImage(cursor);
  };

  p.setup = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
    }

    p.createCanvas(width, height);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.padding !== null) padding = props.padding;
    if (props.width !== null) widthFactor = props.width;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
    }

    p.resizeCanvas(width, height);
  };

  p.windowResized = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
    }

    p.resizeCanvas(width, height);
  };

  p.draw = function () {
    incr += 0.005;
    p.background(255);
    for (var i = 0; i < p.width; i += 30) {
      for (var j = 0; j < p.height; j += 30) {
        p.push();
        p.translate(i, j);
        var a = p.atan2(p.mouseY - j, p.mouseX - i);
        a += incr;
        p.rotate(a);
        p.image(mouse, 0, 0, 15, 25);
        p.pop();
      }
    }
  };
}
