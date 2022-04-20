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
import Link from 'components/Link';
import rr1 from 'public/images/rr_1.png';
import rr2 from 'public/images/rr_2.png';

const RebekkaBorum = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Reitzenstein
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            React, Rellax
          </Typography>
          <Typography variant="body1">
            concept, design and development
          </Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Reinhard Reitzenstein is the allegorical minimalist. If you have to
            ask, you'll never know....
          </Typography>
          <Typography variant="body1" paragraph>
            The website shows an overview of 30 years of Reitzensteins work. The
            order is reordered on rerender while the parralax scoll represents
            the non-linear flow of the natural world. Which description is
            inversed?
          </Typography>

          <Link
            href="https://www.reitzenstein.art/"
            target="_blank"
            variant="small"
          >
            www.reitzenstein.art
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={rr1} alt="Reinhard main" />
        <Image src={rr2} alt="Reinhard second" />
      </VisualSection>
    </HomeSection>
  );
};

export default RebekkaBorum;
