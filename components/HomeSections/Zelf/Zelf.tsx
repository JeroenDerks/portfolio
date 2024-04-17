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
import zelfImg from 'public/images/zelf.jpg';
import Link from 'components/Link';
import VimeoVideo, { Iframe, VideoWrapper } from 'components/Video';

const Zelf = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Zelf
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Full stack
          </Typography>
          <Typography variant="body1">
            React, AWS, Lambda, DynamoDb, Cognito, Contentful, GraphQL, Mollie
          </Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Zelf is the personal dashboard for entrepreneurs who are starting
            their self-employed journey.
          </Typography>
          <Typography variant="body1" paragraph>
            Based on the user's requirements, Zelf offers tailored information
            about Business, Sales, Administration, Risks management, Accounting
            and Banking.
          </Typography>
          <Link href="https://zelf.nl/" variant="small" target="_blank">
            zelf.nl
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={zelfImg} alt="Zelf overview" />
        <VideoWrapper>
          <Iframe
            src="https://www.youtube-nocookie.com/embed/jjg6aWJk7Ck?si=ZpRUH1r8eL3Zw4_9&amp;controls=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=jjg6aWJk7Ck"
            title="Zelf promo"
            frameBorder="0"
            allow="fullscreen"
            loading="lazy"
          />
        </VideoWrapper>
      </VisualSection>
    </HomeSection>
  );
};

export default Zelf;
