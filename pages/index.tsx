import React from 'react';
import About from 'components/Sections/Home/About';
import Bundeswehr from 'components/Sections/Home/Bundeswehr';
import ChemicalReactions from 'components/Sections/Home/ChemicalReactions';
import Darkweb from 'components/Sections/Home/Darkweb';
import DhiGrasDevelopment from 'components/Sections/Home/DhiGrasDevelopment/DhiGrasDevelopment';
import Hero from 'components/Sections/Home/Hero';
import DhiGrasDesign from 'components/Sections/Home/DhiGrasDesign';
import RebekkaBorum from 'components/Sections/Home/RebekkaBorum';

const Home = () => (
  <>
    <Hero />
    <Darkweb />
    <Bundeswehr />
    <DhiGrasDevelopment />
    <DhiGrasDesign />
    <ChemicalReactions />
    <RebekkaBorum />
    <About />
  </>
);

export default Home;
