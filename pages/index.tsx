import React from 'react';
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

const Home = () => (
  <>
    <Hero />
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

export default Home;
