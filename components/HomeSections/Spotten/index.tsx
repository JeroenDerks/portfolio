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
import spotten1 from 'public/images/spotten_app.jpg';
import spotten2 from 'public/images/spotten_dashboard.jpg';
import Link from 'components/Link';

const Spotten = () => (
  <HomeSection>
    <StaticSection>
      <HeadingSection>
        <Typography variant="h3" fontWeight="bold">
          Spotten
        </Typography>
      </HeadingSection>

      <InfoSection>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          App & Frontend
        </Typography>
        <Typography variant="body1">
          React Native, React, TS, styled components,
        </Typography>
      </InfoSection>

      <TextSection>
        <Typography variant="body1" paragraph>
          Spotten is an app platform that makes parking for companies a breeze.
        </Typography>
        <Typography variant="body1" paragraph>
          Users can make reservations, start parking transactions, open parking
          barrier gates and control when their parking sessions ends. While
          admins can control all these processes from the Spotten dashboard.
        </Typography>
        <Typography variant="body1" paragraph>
          Spotten is an initiative by Dura Vermeer
        </Typography>
        <Link href="https://www.spotten.nl" variant="small" target="_blank">
          claim your spot
        </Link>
      </TextSection>
    </StaticSection>

    <VisualSection>
      <Image src={spotten1} alt="Spotten app" />
      <Image src={spotten2} alt="Spotten dashboard" />
    </VisualSection>
  </HomeSection>
);

export default Spotten;
