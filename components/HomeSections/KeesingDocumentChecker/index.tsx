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
import { Iframe, VideoWrapper } from 'components/Video';
import Image from 'components/Image';
import dc_desktop from 'public/images/keesing_dc_desktop.jpg';
import Link from 'components/Link';

const KeesingDocumentChecker = () => (
  <HomeSection>
    <StaticSection>
      <HeadingSection>
        <Typography variant="h3" fontWeight="bold">
          DocumentChecker
        </Typography>
      </HeadingSection>
      <InfoSection>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          Frontend
        </Typography>
        <Typography variant="body1">NextJS, TS, ReactQuery, Mantine</Typography>
      </InfoSection>

      <TextSection>
        <Typography variant="body1" paragraph>
          Keesing's DocumentChecker database contains the world's most
          comprehensive and accurate reference information for ID documents and
          banknotes.
        </Typography>
        <Typography variant="body1" paragraph>
          It contains banknotes and ID documents from over 200 countries, and
          holds 70,000 images including security features like holograms and
          microprint.
        </Typography>
        <Link
          href="https://www.keesingtechnologies.com/documentchecker"
          variant="small"
          target="_blank"
        >
          inspect
        </Link>
      </TextSection>
    </StaticSection>

    <VisualSection>
      <Image src={dc_desktop} alt="DocumentChecker promo desktop" />
      <VideoWrapper>
        <Iframe
          src="https://www.youtube-nocookie.com/embed/IS1VuIyNWdI?si=x7EQbtHMrXN2H2ol&amp;controls=0&amp;start=16&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=IS1VuIyNWdI"
          title="DocumentChecker"
          allow="fullscreen;autoplay;loop"
          loading="lazy"
          style={{
            borderLeft: '5px solid white',
            borderTop: '2px solid white',
          }}
        />
      </VideoWrapper>
    </VisualSection>
  </HomeSection>
);

export default KeesingDocumentChecker;
