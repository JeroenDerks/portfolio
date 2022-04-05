import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export default function sketch(p) {
  const config = {
    apiKey: 'AIzaSyB5PFdZgVzRS08x2o1CMyIkm-Pqokcqv-g',
    authDomain: 'platform-for-democracy.firebaseapp.com',
    databaseURL: 'https://platform-for-democracy.firebaseio.com',
    projectId: 'platform-for-democracy',
    storageBucket: 'platform-for-democracy.appspot.com',
    messagingSenderId: '841639763431',
  };

  var typed = '';
  const TYPE_YOUR_MIND = 'TYPE YOUR MIND!';
  const TITLE = 'PLATFORM FOR FREE SPEECH';
  var f = 255;
  var count = 0;
  var database;
  var ref;

  var padding = 80;
  var widthFactor = 0.8;

  p.setup = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;
    p.createCanvas(width, height);
    p.frameRate(10);
    p.textSize(20);

    firebase.initializeApp(config);
    database = firebase.database();
    ref = database.ref('savedtext');
    ref.on('value', p.gotData, p.errData);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.padding !== null) padding = props.padding;
    if (props.width !== null) widthFactor = props.width;

    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    p.resizeCanvas(width, height);
  };

  p.windowResized = function () {
    let width = parseInt(window.innerWidth * widthFactor) - padding * 3;
    let height = window.innerHeight - padding * 2;

    p.resizeCanvas(width, height);
    p.drawText();
  };

  p.gotData = function (data) {
    const scores = data.val();
    const keys = Object.keys(scores);
    const key = keys[keys.length - 1];
    typed = scores[key].content;
    p.drawText();
  };

  p.drawText = function () {
    p.fill(f);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);
    p.fill(255 - f);

    p.textAlign(p.RIGHT);
    p.text(TYPE_YOUR_MIND, 0, 20, p.width - 20, 20);

    p.textAlign(p.LEFT);
    p.text(TITLE, 20, 20, p.width - 20, 20);
    p.text(typed, 20, 50, p.width - 40, p.height - 250);

    if (count > (p.width * p.height) / 20) {
      typed = ' ';
      f *= -1;
      count = 0;
    }
  };

  p.draw = function () {
    p.drawText();
  };

  p.keyPressed = function () {
    if (p.keyCode === p.BACKSPACE) f *= -1;
    else if (p.keyCode === p.RETURN) {
      typed += ' ';
      const list = p.split(typed, ' ');
      p.saveStrings(list, 'my_contribution.txt');
    }
    p.drawText();
  };

  p.keyTyped = function () {
    typed += p.key;
    var data = {
      name: 'text',
      content: '' + typed,
    };
    ref = database.ref('savedtext');
    ref.push(data);
    count += 40;
    p.drawText();
  };
}
