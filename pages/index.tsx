import React from 'react';
import dynamic from 'next/dynamic';

import Hero from 'components/HomeSections/Hero';
import Talentefinder from 'components/HomeSections/Talentefinder';

const About = dynamic(() => import('components/HomeSections/About'));
const Bundeswehr = dynamic(() => import('components/HomeSections/Bundeswehr'));
const ChemicalReactions = dynamic(
  () => import('components/HomeSections/ChemicalReactions')
);
const Darkweb = dynamic(() => import('components/HomeSections/Darkweb'));
const DhiGrasDevelopment = dynamic(
  () => import('components/HomeSections/DhiGrasDevelopment')
);
const DhiGrasDesign = dynamic(
  () => import('components/HomeSections/DhiGrasDesign')
);
const Heysports = dynamic(() => import('components/HomeSections/Heysports'));
const RebekkaBorum = dynamic(
  () => import('components/HomeSections/RebekkaBorum')
);
const Reitzenstein = dynamic(
  () => import('components/HomeSections/Reitzenstein')
);

const Home = () => {
  const scrollTo = (v: string) => {
    if (v === 'projects') {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
    if (v === 'about') {
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.getBoundingClientRect().height,
        html.getBoundingClientRect().height
      );
      window.scrollTo({ top: height, behavior: 'smooth' });
    }
  };
  return (
    <>
      <Hero scrollTo={scrollTo} />
      <Talentefinder />
      <Heysports />
      <Bundeswehr />
      <DhiGrasDevelopment />
      <DhiGrasDesign />
      <Darkweb />
      <Reitzenstein />
      <ChemicalReactions />
      <RebekkaBorum />
      <About />
    </>
  );
};

export default Home;
