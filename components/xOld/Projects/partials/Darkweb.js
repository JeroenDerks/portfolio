import React from 'react';
// import P5Wrapper from 'react-p5-wrapper';
// import darkwebSketch from './DarkwebSketch';
import Product from 'components/Product';
import ProductMobile from 'components/ProductMobile';
import { AppContext } from 'App';

import dw1 from 'assets/images/dw1.jpg';
import dw2 from 'assets/images/dw2.jpg';
import dw3 from 'assets/images/dw3.jpg';

const imageStyle = {
  width: '100%',
};

const darkwebDetails = {
  title: 'Darkweb',
  technologies: {
    mainTitle: 'P5.js HTML CSS',
    subTitle: 'concept, interaction & visual design, web development',
  },
  description: [
    'Dark Web is an internet-based digital music release by sound artist Morten Poulsen',
    'Through a combination of composed music and interactive visuals, Dark Web creates space and time for Deep Listening.',
    'Audio implementation by Martin Sohn Østergaard. Visual Design and Interaction Design by Jeroen Derks.',
  ],
  content: [
    // <P5Wrapper sketch={darkwebSketch} />,
    <img src={dw1} style={imageStyle} alt={'dw1'} />,
    <img src={dw2} style={imageStyle} alt={'dw2'} />,
    <img src={dw3} style={imageStyle} alt={'dw3'} />,
  ],

  contentMobile: [
    <img src={dw1} style={imageStyle} alt={'dw1'} />,
    <img src={dw2} style={imageStyle} alt={'dw2'} />,
    <img src={dw3} style={imageStyle} alt={'dw3'} />,
  ],
};

function Darkweb() {
  const {
    state: { mobile, padding },
  } = React.useContext(AppContext);

  return (
    <>
      {mobile ? (
        <ProductMobile props={darkwebDetails} />
      ) : (
        <Product props={darkwebDetails} />
      )}
    </>
  );
}

export default Darkweb;
