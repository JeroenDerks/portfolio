import React, { Suspense, lazy } from 'react';
import Hero from 'components/HomeSections/Hero';

const About = lazy(() => import('components/HomeSections/About'));
const Bundeswehr = lazy(() => import('components/HomeSections/Bundeswehr'));
const Darkweb = lazy(() => import('components/HomeSections/Darkweb'));
const Heysports = lazy(() => import('components/HomeSections/Heysports'));
const RebekkaBorum = lazy(() => import('components/HomeSections/RebekkaBorum'));
const Reitzenstein = lazy(() => import('components/HomeSections/Reitzenstein'));

const ChemicalReactions = lazy(
  () => import('components/HomeSections/ChemicalReactions')
);
const DhiGrasDevelopment = lazy(
  () => import('components/HomeSections/DhiGrasDevelopment')
);
const DhiGrasDesign = lazy(
  () => import('components/HomeSections/DhiGrasDesign')
);
const Talentefinder = lazy(
  () => import('components/HomeSections/Talentefinder')
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
      <Suspense fallback={<div>Loading...</div>}>
        <section>
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
        </section>
      </Suspense>
    </>
  );
};

export default Home;
