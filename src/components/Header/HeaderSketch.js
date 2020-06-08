export default function sketch(p) {
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

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    w025 = 0.56 * p.width - p.height * 0.05;
    w075 = p.width * 0.74;
    hmid = p.height * 0.77 - (0.56 * p.width - p.height * 0.15) * 0.5625;
    htop = hmid;
    hlow = p.height * 0.8;
    if (window.innerWidth > 1400) paddingLeft = 120;
    p.textSize(12);
  };

  console.log('headersketchg');

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.paddingLeft !== null) {
      paddingLeft = props.paddingLeft;
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    if (window.innerWidth > 1400) paddingLeft = 120;
    else paddingLeft = 80;
    w025 = 0.56 * p.width - p.height * 0.05;
    w075 = p.width * 0.74;
    hmid = p.height * 0.77 - (0.56 * p.width - p.height * 0.15) * 0.5625;
    htop = hmid;
    hlow = p.height * 0.8;
  };

  p.draw = function () {
    if (fadeIn);
    else if (
      mousex[0] === p.mouseX &&
      mousey[0] === p.mouseY &&
      acceleration === 0
    )
      return;
    p.background(255);

    for (let i = 9; i > 0; i--) {
      speedx[i] = speedx[i - 1];
      speedy[i] = speedy[i - 1];
      avgspeedx[i] = avgspeedx[i - 1];
      avgspeedy[i] = avgspeedy[i - 1];
    }
    speedx[0] = p.abs(p.pmouseX - p.mouseX);
    speedy[0] = p.abs(p.pmouseY - p.mouseY);

    avgspeedx[0] = p.round(speedx.reduce((a, b) => a + b, 0) * 0.1);
    avgspeedy[0] = p.round(speedy.reduce((a, b) => a + b, 0) * 0.1);

    totalspeed = avgspeedx[0] + avgspeedy[0];
    acceleration = totalspeed - previousspeed;

    totalcount =
      totalcount + p.abs(p.pmouseY - p.mouseY) + p.abs(p.pmouseX - p.mouseX);

    avgmovement = p.round(totalcount / p.frameCount);

    for (let i = avgmovement; i > 0; i--) {
      mousex[i] = mousex[i - 1];
      mousey[i] = mousey[i - 1];
      distance[i] = distance[i - 1];
    }
    mousex[0] = p.mouseX;
    mousey[0] = p.mouseY;
    distance[0] = p.int(p.dist(w025, hmid, p.mouseX - 4, p.mouseY + 3));

    for (let i = avgmovement; i > 0; i--) {
      p.fill(255, 255, 235);
      p.stroke(255);
      p.strokeWeight(2);

      let scaleX = distance[i] + speedx[i] + avgspeedx[i];
      let scaleY = distance[i] + speedy[i] + avgspeedy[i];
      if (Number.isInteger(scaleX) && Number.isInteger(scaleY))
        p.ellipse(mousex[i], mousey[i], scaleX, scaleY);
    }
    p.stroke(255, 255, 150);
    p.strokeWeight(click);
    p.fill(255, 255, 0);

    let scaleX = distance[0] + speedx[0] + avgspeedx[0];
    let scaleY = distance[0] + speedy[0] + avgspeedy[0];
    if (Number.isInteger(scaleX) && Number.isInteger(scaleY))
      p.ellipse(mousex[0], mousey[0], scaleX, scaleY);

    p.fill(50);
    p.noStroke();

    p.text(distance[0], w025, hmid);
    // text(a + "\u00B0", w050, hmid);
    p.text(p.int(p.mouseX), paddingLeft, hmid);
    p.text(p.int(p.mouseY), paddingLeft, hmid + 20);
    p.text(click, w075, htop);
    p.text(avgspeedx[0], paddingLeft, hlow - 20);
    p.text(avgspeedy[0], paddingLeft, hlow);
    // text(tm, 80, hlow)    HERE COMES VELOCITY = TM + RELATIVE DIRECTION
    p.text(acceleration, w025, hlow);
    p.text(avgmovement, w075, hlow);
    previousspeed = totalspeed;

    if (fadeIn) {
      p.fill(255, 255 - p.frameCount * 5);
      p.rect(0, 0, p.width, p.height);
      if (p.frameCount * 5 > 255) fadeIn = false;
    }
  };

  p.mouseReleased = function () {
    click++;
  };
}
