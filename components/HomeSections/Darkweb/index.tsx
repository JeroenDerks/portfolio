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
import dw1 from 'public/images/dw1.jpg';
import dw3 from 'public/images/dw3.jpg';
import Link from 'components/Link';

const Darkweb = () => (
  <HomeSection>
    <StaticSection>
      <HeadingSection>
        <Typography variant="h3" fontWeight="bold">
          Darkweb
        </Typography>
      </HeadingSection>

      <InfoSection>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          Frontend
        </Typography>
        <Typography variant="body1">P5.js HTML CSS</Typography>
      </InfoSection>

      <TextSection>
        <Typography variant="body1" paragraph>
          Dark Web is an internet-based digital music release by sound artist
          Morten Poulsen.
        </Typography>
        <Typography variant="body1" paragraph>
          Through a combination of composed music and interactive visuals, Dark
          Web creates space and time for Deep Listening.
        </Typography>
        <Typography variant="body1" paragraph>
          Audio implementation by Martin Sohn Østergaard. Visual Design and
          Interaction Design by Jeroen Derks.
        </Typography>
        <Link href="https://www.darkweb.dk/" variant="small" target="_blank">
          direct darkweb access
        </Link>
      </TextSection>
    </StaticSection>

    <VisualSection>
      <Image src={dw1} alt="darkweb_1" />
      <Image src={dw3} alt="darkweb_2" />
    </VisualSection>
  </HomeSection>
);

export default Darkweb;
