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
import dhi1 from 'public/images/dhi1.jpg';
import dhi3 from 'public/images/dhi3.jpg';
// import Link from 'components/Link';

const DhiGrasDevelopment = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            DHI GRAS - Development
          </Typography>
        </HeadingSection>

        <InfoSection>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            React, Mapbox
          </Typography>
          <Typography variant="body1">design, web development</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Between 2018 and 2020, I have been working at DHI Gras where I was
            responsible for almost all digital output.
          </Typography>
          <Typography variant="body1" paragraph>
            The web development focussed on online data viewers and portals
            through which we raised awareness for our products and projects. I
            streamlined the design, implemented a mobile-friendliness focus and
            improved the techstack to include the most modern frontend
            frameworks.
          </Typography>
          <Typography variant="body1" paragraph>
            It resulted in over 2 dozen viewers and new ways of sharing and
            promoting our work.
          </Typography>
          {/* <Link href="/others/dhi-portals" variant="small">
          see the portals
          </Link> */}
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={dhi1} alt="dhi gras development main" />
        <Image src={dhi3} alt="dhi gras development second" />
      </VisualSection>
    </HomeSection>
  );
};

export default DhiGrasDevelopment;
