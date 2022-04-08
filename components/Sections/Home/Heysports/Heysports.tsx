import React from 'react';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  HeadingSection,
  InfoSection,
  StaticSection,
  TextSection,
} from 'components/Layout/LayoutSections';
import { Image, VisualSection } from 'components/Layout/Visual';
import heysports1 from 'public/images/heysports_4.0.png';
import heysports2 from 'public/images/heysports_4.1.png';
import Link from 'components/Link';

const Heysports = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Heysports
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            React, NextJs, MUI, Strapi
          </Typography>
          <Typography variant="body1">Frontend development</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Heysports.io is the number 1 application for finding fitness and
            yoga studios in the Basel, Bern, Luzern, St Gallen and Zurich. The
            site offers users an overview of the studio details and interesting
            articles for improving your lifestyle
          </Typography>
          <Typography variant="body1">
            For this site I developed the frontend, created the component
            library, integrated the filtering functionality with map and
            improved search engine optimisation.
          </Typography>

          <Link href="https://heysports.io/" variant="small">
            heysports.io
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={heysports1} alt="Heysports landing page" />
        <Image src={heysports2} alt="Heysports studio overview page" />
      </VisualSection>
    </HomeSection>
  );
};

export default Heysports;
