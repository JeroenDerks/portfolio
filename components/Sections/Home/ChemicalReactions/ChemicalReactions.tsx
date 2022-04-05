import React from 'react';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  HeadingSection,
  InfoSection,
  StaticSection,
  TextSection,
} from 'components/Layout/LayoutSections';
import { Image, Video, VisualSection } from 'components/Layout/Visual';
import nobel4 from 'public/images/nobel4.jpg';

const ChemicalReactions = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Chemical Reactions
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Unity, Contentful CMS
          </Typography>
          <Typography variant="body1">at YOKE for:</Typography>
          <Typography variant="body1">Nobel Museum Dubai</Typography>

          <Typography variant="body1">
            interaction design, development
          </Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            An interface designed to teach people about chemical reactions.
          </Typography>
          <Typography variant="body1">
            The visitor is offered physical blocks that represent chemical
            elements. By combining the right elements they can trigger
            information and video material of their specific chemical reaction.
          </Typography>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Video vimeoVideoId="254181584" />
        <Image src={nobel4} alt="chemicalReactions1" />
      </VisualSection>
    </HomeSection>
  );
};

export default ChemicalReactions;
