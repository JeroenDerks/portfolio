export const getMargin = () => {
  const size = window.innerWidth < 1200 ? window.innerWidth / 20 : 1200 / 10;
  const margin =
    parseInt((Math.random() - 0.5) * size) +
    'px ' +
    parseInt((Math.random() - 0.5) * size * 2) +
    'px ' +
    parseInt((Math.random() - 0.5) * size) +
    'px ' +
    parseInt(Math.random() * size * 2) +
    'px ';
  // return '0px 0px 0px 0px';
  return margin;
};

export const getY = () => {
  return [
    (Math.random() - 0.5) * 500 + 'px',
    (Math.random() - 0.5) * 500 + 'px',
  ];
};
