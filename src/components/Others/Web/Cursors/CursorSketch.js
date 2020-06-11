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
    p.createCanvas(
      parseInt(window.innerWidth * widthFactor) - padding,
      window.innerHeight - padding
    );
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.padding !== null) {
      padding = props.padding;
    }
    if (props.width !== null) {
      widthFactor = props.width;
    }
    p.resizeCanvas(
      parseInt(window.innerWidth * widthFactor) - padding,
      window.innerHeight - padding
    );
  };

  p.windowResized = function () {
    p.resizeCanvas(
      parseInt(window.innerWidth * widthFactor) - padding,
      window.innerHeight - padding
    );
  };

  p.draw = function () {
    incr += 0.005;
    p.background(255);
    for (var i = padding; i < p.width - padding; i += 30) {
      for (var j = padding; j < p.height; j += 30) {
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
