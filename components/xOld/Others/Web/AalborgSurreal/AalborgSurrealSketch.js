import heads_0 from './images/HEADS000.jpg';
import heads_1 from './images/HEADS001.jpg';
import heads_2 from './images/HEADS002.jpg';
import heads_3 from './images/HEADS003.jpg';
import heads_4 from './images/HEADS004.jpg';
import heads_5 from './images/HEADS005.jpg';
import heads_6 from './images/HEADS006.jpg';
import heads_7 from './images/HEADS007.jpg';
import heads_8 from './images/HEADS008.jpg';
import heads_9 from './images/HEADS009.jpg';
import heads_10 from './images/HEADS0010.jpg';
import heads_11 from './images/HEADS0011.jpg';
import heads_12 from './images/HEADS0012.jpg';
import heads_13 from './images/HEADS0013.jpg';
import heads_14 from './images/HEADS0014.jpg';
import heads_15 from './images/HEADS0015.jpg';
import heads_16 from './images/HEADS0016.jpg';
import heads_17 from './images/HEADS0017.jpg';
import heads_18 from './images/HEADS0018.jpg';
import heads_19 from './images/HEADS0019.jpg';
import heads_20 from './images/HEADS0020.jpg';
import heads_21 from './images/HEADS0021.jpg';
import heads_22 from './images/HEADS0022.jpg';
import heads_23 from './images/HEADS0023.jpg';
import heads_24 from './images/HEADS0024.jpg';
import heads_25 from './images/HEADS0025.jpg';
import heads_26 from './images/HEADS0026.jpg';
import heads_27 from './images/HEADS0027.jpg';
import heads_28 from './images/HEADS0028.jpg';
import heads_29 from './images/HEADS0029.jpg';
import heads_30 from './images/HEADS0030.jpg';
import heads_31 from './images/HEADS0031.jpg';
import heads_32 from './images/HEADS0032.jpg';
import heads_33 from './images/HEADS0033.jpg';
import heads_34 from './images/HEADS0034.jpg';
import heads_35 from './images/HEADS0035.jpg';
import heads_36 from './images/HEADS0036.jpg';
import heads_37 from './images/HEADS0037.jpg';
import heads_38 from './images/HEADS0038.jpg';
import heads_39 from './images/HEADS0039.jpg';
import heads_40 from './images/HEADS0040.jpg';
import heads_41 from './images/HEADS0041.jpg';
import heads_42 from './images/HEADS0042.jpg';

const images = [
  heads_0,
  heads_1,
  heads_2,
  heads_3,
  heads_4,
  heads_5,
  heads_6,
  heads_7,
  heads_8,
  heads_9,
  heads_10,
  heads_11,
  heads_12,
  heads_13,
  heads_14,
  heads_15,
  heads_16,
  heads_17,
  heads_18,
  heads_19,
  heads_20,
  heads_21,
  heads_22,
  heads_23,
  heads_24,
  heads_25,
  heads_26,
  heads_27,
  heads_28,
  heads_29,
  heads_30,
  heads_31,
  heads_32,
  heads_33,
  heads_34,
  heads_35,
  heads_36,
  heads_37,
  heads_38,
  heads_39,
  heads_40,
  heads_41,
  heads_42,
];
export default function sketch(p) {
  var v = [];
  var x = 0;
  var targetx = 2;
  var padding = 80;
  var widthFactor = 0.8;
  var incr = 1;

  const ASPECT_RATIO = 0.5625;

  p.preload = function () {
    for (var i = 0; i <= 42; i++) {
      v[i] = p.loadImage(images[i]);
    }
  };

  p.setup = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
      height = width * ASPECT_RATIO;
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
      height = width * ASPECT_RATIO;
    }

    p.resizeCanvas(width, height);
  };

  p.windowResized = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    if (window.innerWidth < 900) {
      width = window.innerWidth - padding * 2;
      height = width * ASPECT_RATIO;
    }

    p.resizeCanvas(width, height);
  };

  p.draw = function () {
    targetx = p.floor(p.map(p.mouseX, 0, p.width, 0, 42));
    if (targetx >= 42) targetx = 42;
    if (x === targetx) return;

    if (x - targetx < 0) incr = 1;
    else incr = -1;

    if (x !== targetx) x += incr;

    p.image(v[x], 0, 0, p.width, p.height);
  };
}
