import React from 'react';
import About from 'components/HomeSections/About';
import Bundeswehr from 'components/HomeSections/Bundeswehr';
import ChemicalReactions from 'components/HomeSections/ChemicalReactions';
import Darkweb from 'components/HomeSections/Darkweb';
import DhiGrasDevelopment from 'components/HomeSections/DhiGrasDevelopment/DhiGrasDevelopment';
import Hero from 'components/HomeSections/Hero';
import Heysports from 'components/HomeSections/Heysports';
import DhiGrasDesign from 'components/HomeSections/DhiGrasDesign';
import RebekkaBorum from 'components/HomeSections/RebekkaBorum';
import Reitzenstein from 'components/HomeSections/Reitzenstein';
import Talentefinder from 'components/HomeSections/Talentefinder';

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
