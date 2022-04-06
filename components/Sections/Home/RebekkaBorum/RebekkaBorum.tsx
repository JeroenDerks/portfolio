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
import rb1 from 'public/images/rb1.jpg';
import rb2 from 'public/images/rb2.jpg';
import Link from 'components/Link';

const RebekkaBorum = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            Rebekka Borum
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            P5js
          </Typography>
          <Typography variant="body1">design, web development</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            Rebekka is an Aalborg based painter. Her website is inspired by the
            geometrical, balanced shapes of her paintings.
          </Typography>
          <Typography variant="body1" paragraph>
            In addition her fans have the possibility to digitally reconstruct
            her artworks in the opening graphic on the landing page.
          </Typography>

          <Link
            href="http://www.rebekka-borum.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="small"
          >
            more details
          </Link>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={rb1} alt="Rebekka Borum main" />
        <Image src={rb2} alt="Rebekka Borum second" />
      </VisualSection>
    </HomeSection>
  );
};

export default RebekkaBorum;
