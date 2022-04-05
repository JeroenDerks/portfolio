import React from 'react';
import About from 'components/Sections/Home/About';
import ChemicalReactions from 'components/Sections/Home/ChemicalReactions';
import Darkweb from 'components/Sections/Home/Darkweb';
import Hero from 'components/Sections/Home/Hero';

const Home = () => (
  <>
    <Hero />
    <Darkweb />
    <ChemicalReactions />
    <About />
  </>
);

export default Home;
