import React from 'react';
import Cover from 'components/Others/Installations/Cover';
import DHIPortals from 'components/Others/DHI GRAS/Portals';

export const categories = [
  {
    group: 'DHI GRAS',
    projects: [
      { link: 'dhi-portals', name: 'portals', comp: DHIPortals },
      { link: 'dhi-website', name: 'website', comp: <></> },
      { link: 'dhi-videos', name: 'videos', comp: <></> },
    ],
  },
  {
    group: 'INSTALLATIONS',
    projects: [
      { link: 'ludiccode', name: 'ludic code', comp: <></> },
      { link: 'snakeskin', name: 'snake skin', comp: <></> },
      { link: 'nodes', name: 'nodes', comp: <></> },
      { link: 'urbanplanen', name: 'urbanplanen', comp: <></> },
      { link: 'stopmotion', name: 'stop motion machine', comp: <></> },
      { link: 'cover', name: 'cover', comp: Cover },
      { link: 'tingbjergceiling', name: 'tingbjerg ceiling', comp: <></> },
      { link: 'tingbjergtrees', name: 'tingbjerg trees', comp: <></> },
      { link: 'thefreaksregister', name: 'the freaks register', comp: <></> },
      { link: 'theshydie', name: 'the shy die', comp: <></> },
      { link: 'sphero', name: 'sphero', comp: <></> },
    ],
  },
  {
    group: 'WEB',
    projects: [
      { link: 'rebekkaborum', name: 'rebekka borum', comp: <></> },
      { link: 'aalborgsurreal', name: 'aalborg surreal', comp: <></> },
      { link: 'freespeech', name: 'platform for free speech', comp: <></> },
      { link: 'informationage', name: 'information age', comp: <></> },
    ],
  },
  {
    group: 'PERSONAL VIDEOS',
    projects: [
      { link: 'justwater', name: 'just water', comp: <></> },
      { link: 'aman', name: 'a man and his mind', comp: <></> },
      { link: 'fittingin', name: 'fitting in', comp: <></> },
      { link: 'au2pilot', name: 'au2pilot', comp: <></> },
    ],
  },
  {
    group: 'COMMERCIAL VIDEOS',
    projects: [
      { link: 'pilebyg', name: 'pilebyg', comp: <></> },
      { link: 'sofar', name: 'sofar', comp: <></> },
      { link: 'oersterk', name: 'oersterk', comp: <></> },
      { link: 'densorteskole', name: 'den sorte skole', comp: <></> },
      { link: 'lps', name: 'laylor performance systems', comp: <></> },
      { link: 'aboveground', name: 'aboveground art supply', comp: <></> },
    ],
  },
];
