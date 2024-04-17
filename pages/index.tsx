import React, { Suspense, lazy } from 'react';
import Hero from 'components/HomeSections/Hero';

const About = lazy(() => import('components/HomeSections/About'));
const Bundeswehr = lazy(() => import('components/HomeSections/Bundeswehr'));
const Darkweb = lazy(() => import('components/HomeSections/Darkweb'));
const DhiDesign = lazy(() => import('components/HomeSections/DhiGrasDesign'));
const DhiDev = lazy(() => import('components/HomeSections/DhiGrasDevelopment'));
const Heysports = lazy(() => import('components/HomeSections/Heysports'));
const Reitzenstein = lazy(() => import('components/HomeSections/Reitzenstein'));
const Spotten = lazy(() => import('components/HomeSections/Spotten'));
const KeesingApp = lazy(() => import('components/HomeSections/KeesingApp'));
const Zelf = lazy(() => import('components/HomeSections/Zelf'));
const KeesingDocumentChecker = lazy(
  () => import('components/HomeSections/KeesingDocumentChecker')
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
          <KeesingApp />
          <Spotten />
          <Zelf />
          <KeesingDocumentChecker />
          <Talentefinder />
          <Heysports />
          <Bundeswehr />
          <DhiDev />
          <DhiDesign />
          <Darkweb />
          <Reitzenstein />
          <About />
        </section>
      </Suspense>
    </>
  );
};

export default Home;
