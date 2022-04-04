import React from 'react';
import ProductAbout from 'components/Product/ProductAbout';
import ProductMobileAbout from 'components/ProductMobile/ProductMobileAbout';
import githubLogo from 'assets/images/github-logo.png';
import linkedInLogo from 'assets/images/linkedin-logo.png';
import { AppContext } from 'App';

import profilePhoto from 'assets/images/jeroenderks.jpg';

const imageStyle = {
  width: '100%',
};

const aboutMe = {
  title: 'Jeroen Derks',
  technologies: {
    logos: [
      // {
      //   logo: githubLogo,
      //   link: 'https://github.com/JeroenDerks',
      // },
      { logo: linkedInLogo, link: 'https://www.linkedin.com/in/derksdk/' },
    ],
    location: 'Born in the Netherlands',
    subTitle: 'Educated in Denmark, living in Berlin',
  },
  description: [
    {
      subtitle: 'Favorite experiences',
      data: [
        '• Frontend developer/ LAUDO/ Berlin, DE/ 2020 - current',
        '• Frontend developer and designer/ DHI GRAS/ Copenhagen, DK/ 2018 - 2020',
        '• Developer and interaction designer/ YOKE/ Copenhagen, DK/ 2017',
        '• VR post production assistent/ Makropol/ Copenhagen, DK/ 2017',
        '• Research assistant and co-author/ RELATE AAU/ Aalborg DK/ 2017',
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
  content: <img src={profilePhoto} style={imageStyle} alt="dynamic_still" />,
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
