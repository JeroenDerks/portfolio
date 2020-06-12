import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import { Link } from 'react-router-dom';
import darkwebSketch from './partials/DarkwebSketch';
import dw1 from 'assets/images/dw1.jpg';
import dw2 from 'assets/images/dw2.jpg';

import nobel4 from 'assets/images/nobel4.jpg';
import konstruktur from 'assets/images/konstruktur.jpg';
import dhi1 from 'assets/images/dhi1.jpg';
import dhi2 from 'assets/images/dhi2.jpg';

import rb1 from 'assets/images/rb1.jpg';
import rb2 from 'assets/images/rb2.jpg';

import ds1 from 'assets/images/ds1.jpg';

const imageStyle = {
  width: '100%',
};
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const video = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const videoWrapper = {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '56.25%',
};

const getVideo = (src) => {
  return (
    <div style={videoWrapper}>
      <iframe
        src={`https://player.vimeo.com/video/${src}?title=0&byline=0&portrait=0`}
        title={src}
        frameBorder="0"
        allow="fullscreen"
        allowFullScreen
        style={video}
      />
    </div>
  );
};

export const projects = [
  {
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
      <div style={{ cursor: 'crosshair' }}>
        <P5Wrapper sketch={darkwebSketch} />
      </div>,
      <img src={dw1} style={imageStyle} alt={'dw1'} />,
    ],

    contentMobile: [
      <img src={dw1} style={imageStyle} alt={'dw1'} />,
      <img src={dw2} style={imageStyle} alt={'dw2'} />,
    ],
    link: (
      <a
        href="http://www.darkweb.dk"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        direct darkweb access
      </a>
    ),
  },
  {
    title: 'Chemical Reactions',
    technologies: {
      mainTitle: 'Unity, Contentful CMS',
      location: `at YOKE for:\nNobel Museum Dubai`,
      subTitle: 'interaction design, development',
    },
    description: [
      'An interface designed to teach people about chemical reactions.',
      'The visitor is offered physical blocks that represent chemical elements. By combining the right elements they can trigger information and video material of their specific chemical reaction.',
    ],
    content: [
      getVideo('254181584'),
      <img src={nobel4} style={imageStyle} alt={'chemicalReactions1'} />,
    ],

    contentMobile: [
      getVideo('254181584'),
      <img src={nobel4} style={imageStyle} alt={'chemicalReactions2'} />,
    ],
  },
  {
    title: 'Konstruktur',
    technologies: {
      mainTitle: 'OpenFrameworks',
      location: `at YOKE for:\nHorsens Manucipality`,
      subTitle: 'assembly, installation',
    },
    description: [
      'An interactive grid of 196 custom-made responsive lightsources explores light as a material for creating temporary structures in urban space.',
      'Konstruktur is a live experiment, challenging the perception of space. Appearing as a three dimensional sketch pad, the installation works as an interactive light architecture. By inviting visitors to create temporary structures of light, the installation explores the fleeting urban spaces of tomorrow.',
      'Music in video by: Reveal by Panxing',
    ],
    content: [
      getVideo('241518803'),
      <img src={konstruktur} style={imageStyle} alt="Konstruktur1" />,
    ],

    contentMobile: [
      getVideo('241518803'),
      <img src={konstruktur} style={imageStyle} alt="Konstruktur1" />,
    ],
  },
  {
    title: 'DHI GRAS',
    technologies: {
      mainTitle: 'React, JS, Wordpress',
      subTitle: 'design, web development',
    },
    description: [
      'Since I was DHI GRAS’ first person with design skills and an interest in frontend development, I was responsible for defining a graphic style and increasing the organisation’s online presence.',
      'In almost 2 years we launched over 30 data viewers and web portals, made over 15 videos and gave the website a complete overhaul.',
    ],
    content: [
      <img src={dhi1} style={imageStyle} alt="dhi1" />,
      <img src={dhi2} style={imageStyle} alt="dhi2" />,
    ],

    contentMobile: [
      <img src={dhi1} style={imageStyle} alt="dhi1" />,
      <img src={dhi2} style={imageStyle} alt="dhi2" />,
    ],
    link: (
      <Link to="/others/dhi-overview" style={linkStyle}>
        more details
      </Link>
    ),
  },
  {
    title: 'Rebekka Borum',
    technologies: {
      mainTitle: 'P5js, HTML, CSS ',
      subTitle: 'design, web development',
    },
    description: [
      'Rebekka is an Aalborg based painter. Her website is inspired by the geometrical, balanced shapes of her paintings.',
      'In addition her fans have the possibility to digitally reconstruct her artworks in the opening graphic on the landing page',
    ],
    content: [
      <img src={rb1} style={imageStyle} alt="rebekka1" />,
      <img src={rb2} style={imageStyle} alt="rebekka2" />,
    ],

    contentMobile: [
      <img src={rb1} style={imageStyle} alt="rebekka1" />,
      <img src={rb2} style={imageStyle} alt="rebekka2" />,
    ],
    link: (
      <a
        href="http://www.rebekka-borum.com"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
      >
        take me there
      </a>
    ),
  },

  // {
  //   title: 'Ludic Code',
  //   technologies: {
  //     mainTitle: 'Processing & Kinect',
  //     location: 'Nordkraft, Aalborg',
  //     subTitle: 'programmer, designer, researcher',
  //   },
  //   description: [
  //     'Ludic Code is a BA research project on designing for interactive playgrounds.',
  //     'For 10 days, hundreds of children and adults played in what is commonly a transit area. It taught us (Daniel Hristov and Jeroen Derks) that these technologies should be immediate, understandable, and most importantly: supporting the desire to explore and play.',
  //   ],
  //   content: [getVideo('180657153'), getVideo('211682937')],
  //   contentMobile: [getVideo('180657153'), getVideo('211682937')],
  // },
  // {
  //   title: 'Snake Skin',
  //   technologies: {
  //     mainTitle: 'Processing & Kinect',
  //     location: 'Kunsten Museum for Modern Art',
  //     subTitle: 'programmer, designer',
  //   },
  //   description: [
  //     'SnakeSkin is an interactive installation presented in correspondence to Ernesto Neto’s exhibition ‘Rui Ni / Voices of the Forrest’.',
  //     'eto’s work focuses on relations and balance between nature and culture.',
  //     'This inspired us to develop an installation in which visitors experience the biological differences between snakes and human beings.',
  //     'The experience was designed to supporte discussions on physical and social adaptation.',
  //   ],
  //   content: [getVideo('212966526'), getVideo('212969684')],
  //   contentMobile: [getVideo('212966526'), getVideo('212969684')],
  // },

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
