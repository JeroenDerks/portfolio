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
import dhivideo from 'public/images/dhi-video-collection.jpg';
import dhiwebsite from 'public/images/dhi-website-collection.jpg';
import Link from 'components/Link';
import Image from 'components/Image';

const DhiGrasDevelopment = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            DHI GRAS - Design
          </Typography>
        </HeadingSection>

        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Wordpress, Elementor, After Effects
          </Typography>

          <Typography variant="body1">Design, motion animation</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            During my time at DHI GRAS, I was responsible for defining a graphic
            style and increasing the organisation’s online presence.{' '}
          </Typography>
          <Typography variant="body1" paragraph>
            This required us to esteblish a online brand identity and a
            streamlined tone for communication. It resulted in a new DHI GRAS
            website developed in Wordpress with Elementor, and dozens of SoMe
            videos that have gained significant online attention.
          </Typography>

          <Link href="/archive/dhi-overview" variant="small">
            more details
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={dhiwebsite} alt="dhi gras design website" />
        <Image src={dhivideo} alt="dhi gras design videos" />
      </VisualSection>
    </HomeSection>
  );
};

export default DhiGrasDevelopment;
