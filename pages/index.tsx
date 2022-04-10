import React, { useRef } from 'react';
import About from 'components/Sections/Home/About';
import Bundeswehr from 'components/Sections/Home/Bundeswehr';
import ChemicalReactions from 'components/Sections/Home/ChemicalReactions';
import Darkweb from 'components/Sections/Home/Darkweb';
import DhiGrasDevelopment from 'components/Sections/Home/DhiGrasDevelopment/DhiGrasDevelopment';
import Hero from 'components/Sections/Home/Hero';
import Heysports from 'components/Sections/Home/Heysports';
import DhiGrasDesign from 'components/Sections/Home/DhiGrasDesign';
import RebekkaBorum from 'components/Sections/Home/RebekkaBorum';
import Reitzenstein from 'components/Sections/Home/Reitzenstein';

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
      <Darkweb />
      <Heysports />
      <Bundeswehr />
      <DhiGrasDevelopment />
      <DhiGrasDesign />
      <ChemicalReactions />
      <RebekkaBorum />
      <Reitzenstein />
      <About />
    </>
  );
};

export default Home;
