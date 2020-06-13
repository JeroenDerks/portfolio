import React from 'react';
import ProductAbout from 'components/Product/ProductAbout';
import ProductMobileAbout from 'components/ProductMobile/ProductMobileAbout';

import { AppContext } from 'App';

import profilePhoto from 'assets/images/jeroenderks.jpg';

const imageStyle = {
  width: '100%',
};

const aboutMe = {
  title: 'Jeroen Derks',
  technologies: {
    mainTitle: '+45 5281 6166',
    location: 'From the Netherlands',
    subTitle: 'Based in CPH, Denmark',
  },
  description: [
    {
      subtitle: 'Experience',
      data: [
        '• Frontend developer and designer/ DHI GRAS/ Copenhagen, DK/ 2018 - 2020',
        '• Student Interaction Designer/ YOKE/ Copenhagen, DK/ 2017',
        '• VR Post Production Assistent/ Makropol/ Copenhagen, DK/ 2017',
        '• Graphic and interactive design intern/ Derooted Creative Agency/ Toronto, CAN/ 2011',
      ],
    },
    {
      subtitle: 'Education',
      data: [
        '• Art & Technology BA/ Aalborg University/ Aalborg, DK/ 2013 - 2016',
        '• International Communication and Media BA/ University of Applied sciences/ Utrecht, NL/ 2008 - 2013',
      ],
    },
  ],
  content: <img src={profilePhoto} style={imageStyle} alt={'dynamic_still'} />,
};

function About() {
  const {
    state: { aboutRef, mobile, padding },
  } = React.useContext(AppContext);

  const paddingStyle = {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: padding.x * 8,
    paddingRight: padding.x * 8,
    boxSizing: 'border-box',
  };

  return (
    <div ref={aboutRef} style={paddingStyle}>
      {mobile ? (
        <ProductMobileAbout props={aboutMe} />
      ) : (
        <ProductAbout props={aboutMe} />
      )}
    </div>
  );
}

export default About;
