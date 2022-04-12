import React from 'react';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  HeadingSection,
  InfoSection,
  StaticSection,
  TextSection,
} from 'components/Layout/LayoutSections';
import { VisualSection } from 'components/Layout/Visual';
import UnlockUi from './UnlockUi';
import bwi1 from 'public/images/bw_0.png';
import bwi2 from 'public/images/bw_1.png';

// import Link from 'components/Link';

const PlaceholderText = styled(Typography)({
  color: 'lightgray',
});
const Bundeswehr = () => {
  const [locked, setLocked] = React.useState(true);

  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            {locked ? 'Top secret' : 'Bundeswehr'}
          </Typography>
        </HeadingSection>

        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            React, Mapbox, Wordpress CMS
          </Typography>
          {locked ? (
            <PlaceholderText variant="body2">
              ██ █████ <br />
              ███ ███████
            </PlaceholderText>
          ) : (
            <Typography variant="body1">
              At Laudo <br />
              For 3yourmind
            </Typography>
          )}
        </InfoSection>

        <TextSection>
          {locked && (
            <>
              <PlaceholderText variant="body2" paragraph>
                ███ ███ ██████ ████ ██ ████ █ █████████ ███ █████ ██ ████████
                ████████ ███ ██████ ██████ █████ ██ ██████ ██ ██████ ███ █████
                ████ ██ █████ ██ ███ ██ ███████ ████████ ██ ███ ████████████
              </PlaceholderText>

              <PlaceholderText variant="body2">
                ███ ████ ██████ █ ███ ████████████ ███ ███ ████████
                ███████████████ █████████ █ ███ ███ ████ ████████ ██ █ ████████
                █████ ███ ██ ████ ██ ███ ███████████ ████ ███ █ █████████
                ███████ █████ ███ ███████ ██ ████████
              </PlaceholderText>
            </>
          )}
          {!locked && (
            <>
              <Typography variant="body1" paragraph>
                For the German army we created a frontend for their 3d printing
                platform. The system allows users to upload 3d models and order
                them to print in the 3d printing locations of the Bundeswehr.
              </Typography>

              <Typography variant="body1">
                For this project I was responsible for the frontend development,
                including a map and blog powered by a Wordpress headless CSM as
                well as the integration with the 3d printing backend which was
                developed by 3yourmind.
              </Typography>
            </>
          )}
        </TextSection>
      </StaticSection>

      <VisualSection>
        <UnlockUi
          handleUnlock={() => setLocked(false)}
          locked={locked}
          imageSrc={bwi1}
          id={1}
        />
        <UnlockUi
          handleUnlock={() => setLocked(false)}
          locked={locked}
          imageSrc={bwi2}
          id={2}
        />
      </VisualSection>
    </HomeSection>
  );
};

export default Bundeswehr;
