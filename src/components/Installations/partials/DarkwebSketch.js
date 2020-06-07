var Mondriaan = [];
var VLines = [];
var HLines = [];
var rm = false;
var timer, newLineTimer;

export default function sketch(p) {
  p.setup = function () {
    let xOffset = 176;
    if (window.innerWidth > 1400) xOffset = 256;
    const _width = ((window.innerWidth - xOffset) / 12) * 7;
    const _height = _width * 0.544;
    p.createCanvas(_width, _height);
    Mondriaan.push(new p.Square(0, 0, p.width, p.height));
    p.fill(0);
    p.rect(0, 0, p.width, p.height);
    timer = 0;
    newLineTimer = 120;
  };

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.padding !== null) {
  //     padding = props.padding * 8;
  //   }
  // };

  p.windowResized = function () {
    Mondriaan.splice(0, Mondriaan.length);
    VLines.splice(0, VLines.length);
    HLines.splice(0, HLines.length);

    let xOffset = 176;
    if (window.innerWidth > 1400) xOffset = 256;
    const _width = ((window.innerWidth - xOffset) / 12) * 7;
    const _height = _width * 0.544;

    p.resizeCanvas(_width, _height);
    Mondriaan.push(new p.Square(0, 0, p.width, p.height));
    newLineTimer = 120;
    timer = 0;
  };

  p.draw = function () {
    p.stroke(0);
    p.strokeWeight(4);
    p.fill(0);
    p.rect(0, 0, p.width, p.height);
    timer++;
    if (timer % newLineTimer === 0) {
      newLineTimer += 10;
      timer = 0;
      var rmx = p.int(p.random(p.width));
      var rmy = p.int(p.random(p.height));
      for (var i = Mondriaan.length - 1; i >= 0; i--) {
        if (Mondriaan[i].intersects(rmx, rmy)) {
          var SCx = Mondriaan[i].x;
          var SCy = Mondriaan[i].y;
          var SCw = Mondriaan[i].w;
          var SCh = Mondriaan[i].h;
          var h = SCy + SCh - rmy;
          var w = SCx + SCw - rmx;
          rm = true;
        }
        if (rm) {
          Mondriaan.splice(i, 1);
          if (SCw > SCh) {
            VLines.push(new p.VLine(rmx, SCy, SCh, w));
            Mondriaan.push(new p.Square(SCx, SCy, rmx - SCx, SCh));
            Mondriaan.push(new p.Square(rmx, SCy, SCw + SCx - rmx, SCh));
          } else {
            HLines.push(new p.HLine(SCx, rmy, SCw, h));
            Mondriaan.push(new p.Square(SCx, SCy, SCw, rmy - SCy));
            Mondriaan.push(new p.Square(SCx, rmy, SCw, SCh + SCy - rmy));
          }
          rm = false;
        }
      }
    }
    for (var i = 0; i < Mondriaan.length; i++) {
      Mondriaan[i].move();
      Mondriaan[i].display();
    }
    for (var i = 0; i < VLines.length; i++) {
      VLines[i].move();
      VLines[i].display();
    }
    for (var i = 0; i < HLines.length; i++) {
      HLines[i].move();
      HLines[i].display();
    }
  };

  p.mouseReleased = function () {
    for (var i = Mondriaan.length - 1; i >= 0; i--) {
      if (Mondriaan[i].intersects(p.mouseX, p.mouseY)) {
        var SCx = Mondriaan[i].x;
        var SCy = Mondriaan[i].y;
        var SCw = Mondriaan[i].w;
        var SCh = Mondriaan[i].h;
        var h = SCy + SCh - p.mouseY;
        var w = SCx + SCw - p.mouseX;
        rm = true;
      }
      if (rm) {
        Mondriaan.splice(i, 1);
        if (SCw > SCh) {
          VLines.push(new p.VLine(p.mouseX, SCy, SCh, w));
          Mondriaan.push(new p.Square(SCx, SCy, p.mouseX - SCx, SCh));
          Mondriaan.push(
            new p.Square(p.mouseX, SCy, SCw + SCx - p.mouseX, SCh)
          );
        } else {
          HLines.push(new p.HLine(SCx, p.mouseY, SCw, h));
          Mondriaan.push(new p.Square(SCx, SCy, SCw, p.mouseY - SCy));
          Mondriaan.push(
            new p.Square(SCx, p.mouseY, SCw, SCh + SCy - p.mouseY)
          );
        }
        rm = false;
      }
    }
    return false;
  };

  p.VLine = function (x, y, h, w) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.i = this.h % 5;
    this.incr = 5;
    this.by = 0;
    this.bf = 1;
    this.incr = 5;
    this.bounce = false;
    this.grow = true;
    this.display = function () {
      p.stroke(0);
      p.strokeWeight(3);
      p.line(
        this.x + this.by,
        this.y - 1,
        this.x + this.by,
        this.y + this.i - 1
      );
      p.strokeWeight(1);
      p.stroke(150);
      p.line(
        this.x + this.by,
        this.y + 1,
        this.x + this.by,
        this.y + this.i - 1
      );
      p.line(this.x, this.y, this.x, this.y + this.i);
    };
    this.move = function () {
      if (this.bounce) {
        this.by += this.bf;
        if (this.by >= this.w - 2 || this.by < 0) this.bf *= -1;
      }
      if (this.grow) {
        this.i += this.incr;
        if (this.i >= this.h) {
          if (this.h > 10 && this.h < 30) {
            this.bounce = true;
          }
          this.grow = false;
        }
      }
    };
  };

  p.HLine = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.i = this.w % 5;
    this.by = 0;
    this.bf = 1;
    this.incr = 5;
    this.bounce = false;
    this.grow = true;
    this.display = function () {
      p.stroke(0);
      p.strokeWeight(3);
      // line(this.x, this.y + this.by, this.x + this.i, this.y + this.by);
      p.line(
        this.x + 2,
        this.y + this.by,
        this.x + this.i - 2,
        this.y + this.by
      );
      p.strokeWeight(1);
      p.stroke(150);
      p.line(this.x, this.y, this.x + this.i, this.y);
      p.line(
        this.x + 2,
        this.y + this.by,
        this.x + this.i - 2,
        this.y + this.by
      );
    };
    this.move = function () {
      if (this.bounce) {
        this.by += this.bf;
        if (this.by >= this.h - 2 || this.by < 0) this.bf *= -1;
      }
      if (this.grow) {
        this.i += this.incr;
        if (this.i >= this.w) {
          this.incr = 0;
          if (this.w > 10 && this.w < 30) {
            this.bounce = true;
          }
          this.grow = false;
        }
      }
    };
  };

  p.Square = function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.mx = 0;
    this.my = 0;
    this.incr = 5;
    this.i = this.y;
    this.display = function () {
      p.noStroke();
      p.noFill();
      p.rect(this.x, this.y, this.w, this.h);
    };
    this.move = function () {
      this.i += this.incr;
      if (this.i >= this.y + this.h) {
        this.incr = 0;
      }
    };
    this.intersects = function (mx, my) {
      this.mx = mx;
      this.my = my;
      if (
        this.mx > this.x &&
        this.mx < this.x + this.w &&
        this.my > this.y &&
        this.my < this.y + this.h
      ) {
        return true;
      } else {
        return false;
      }
    };
  };
}
