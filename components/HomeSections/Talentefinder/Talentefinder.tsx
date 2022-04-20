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
import { VideoWrapper, Iframe } from 'components/Video';
import Image from 'components/Image';
import Link from 'components/Link';
import tf4 from 'public/images/tf4.png';

const Talentefinder = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Talentefinder
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            React, styled components, Redux, Storybook
          </Typography>
          <Typography variant="body1">frontend development</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Talentefinder is the number 1 match making application for career
            events. Recruiters and talents can use the match making interface to
            find the perfect career opportunity and the class' best talents.
          </Typography>
          <Typography variant="body1" paragraph>
            In 2021 the application held over 100 events with more than 35000
            talents. As the frontend developer of this team, I ensure that the
            application runs smoothly and that new features are implemented
            effectively. Some of my proudest achievements include: implementing
            localisation, implementing updated brand identity, developing the
            job platform with payment subscription and much more.
          </Typography>

          <Link
            href="https://www.talentefinder.de/"
            target="_blank"
            variant="small"
          >
            visit marketing site
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={tf4} alt="Talentefinder main" />

        <VideoWrapper>
          <Iframe
            loading="lazy"
            src="https://www.youtube.com/embed/KvfaUJcAx-Q?controls=1&autoplay=1&mute=1&loop=1&playlist=KvfaUJcAx-Q"
            title="talentefinder promo"
            frameBorder="0"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </VideoWrapper>
      </VisualSection>
    </HomeSection>
  );
};

export default Talentefinder;
