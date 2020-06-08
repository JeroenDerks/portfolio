import React from 'react';
import Product from 'components/Product';
import ProductMobile from 'components/ProductMobile';

import { AppContext } from 'App';

import ds1 from 'assets/images/ds1.jpg';

const imageStyle = {
  width: '100%',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const getVideo = (src) => {
  return (
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
        src={`https://player.vimeo.com/video/${src}?title=0&byline=0&portrait=0`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        title={src}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

const performances = [
  {
    title: 'Dynamic Still',
    technologies: {
      mainTitle: 'HTC Vive, Python, Processing',
      location: 'Improv Festival, Aalborg Theatre',
      subTitle: 'robot programmer',
    },
    description: [
      'This improvisational piece investigates creative performances between living and non-living actors— a human being and an intelligent mobile robot. None of the programmed elements are pre-scripted or tele-operated; audiences watch the actors communicate and improvise to develop an original performance. ',
      'The project is developed by RELATE - Research Laboratory for Art and Technology at AAU.',
    ],
    content: [
      getVideo('211666686'),
      <img src={ds1} style={imageStyle} alt={'dynamic_still'} />,
    ],

    contentMobile: [
      getVideo('211666686'),
      <img src={ds1} style={imageStyle} alt={'dynamic_still'} />,
    ],
    link: (
      <a
        href="https://vbn.aau.dk/en/publications/tonight-we-improvise-real-time-tracking-for-human-robot-improvisa"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        Read the paper
      </a>
    ),
  },
];

function Performances() {
  const {
    state: { mobile, padding },
  } = React.useContext(AppContext);

  const paddingStyle = {
    paddingTop: padding.y * 8,
    paddingBottom: padding.y * 8,
    paddingLeft: padding.x * 8,
    paddingRight: padding.x * 8,
    boxSizing: 'border-box',
  };

  return (
    <div
      id="installations"
      style={paddingStyle}
      // position="relative"
    >
      {performances &&
        performances.map((installation, i) => (
          <React.Fragment key={i}>
            {mobile ? (
              <ProductMobile props={installation} />
            ) : (
              <Product props={installation} />
            )}
          </React.Fragment>
        ))}
    </div>
  );
}

export default Performances;
