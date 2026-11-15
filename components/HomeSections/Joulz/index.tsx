import React from 'react';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  HeadingSection,
  InfoSection,
  StaticSection,
  TextSection,
} from 'components/Layout/LayoutSections';
import { VisualSection } from 'components/Layout';
import Image from 'components/Image';
import joulz1 from 'public/images/joulz1.png';
import joulz2 from 'public/images/joulz2.png';
import Link from 'components/Link';

const Joulz = () => (
  <HomeSection>
    <StaticSection>
      <HeadingSection>
        <Typography variant="h3" fontWeight="bold">
          Joulz website
        </Typography>
      </HeadingSection>

      <InfoSection>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          Project Lead
        </Typography>
        <Typography variant="body1">NextJS, TypeScript, Storyblok</Typography>
      </InfoSection>

      <TextSection>
        <Typography variant="body1" paragraph>
          Joulz builds and manages energy infrastructure for businesses, from
          grid connections to smart grids and energy hubs. The new website
          explains these complex solutions through themes, sectors and
          real-world cases, helping companies get a grip on their energy
          capacity in a time of grid congestion.
        </Typography>
        <Typography variant="body1" paragraph>
          As Project Lead, I owned the project from start to finish. I led the
          discovery phase with stakeholders to shape scope and direction, then
          steered the team of designers and developers through delivery, acting
          as the main point of contact for the client.
        </Typography>
        <Link href="https://www.joulz.nl" variant="small" target="_blank">
          joulz.nl
        </Link>
      </TextSection>
    </StaticSection>

    <VisualSection>
      <Image src={joulz1} alt="Joulz website homepage on desktop" />
      <Image src={joulz2} alt="Joulz website pages on mobile" />
    </VisualSection>
  </HomeSection>
);

export default Joulz;
