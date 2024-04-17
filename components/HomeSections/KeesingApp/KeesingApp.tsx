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
import keesingAppOverview from 'public/images/keesing_app_overview.jpg';
import Link from 'components/Link';
import { Box, Grid } from '@mui/material';

const KeesingApp = () => {
  return (
    <HomeSection>
      <StaticSection>
        <HeadingSection>
          <Typography variant="h3" fontWeight="bold">
            KeesingApp
          </Typography>
        </HeadingSection>
        <InfoSection>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Expo, React Native
          </Typography>
          <Typography variant="body1">app development</Typography>
        </InfoSection>

        <TextSection>
          <Typography variant="body1" paragraph>
            KeesingApp simplifies counterfeit detection for passports, ID cards,
            driver's licenses, and banknotes. It supports 3 types of security
            feature detection: <em>Look</em>, <em>Feel</em> and <em>Tilt</em>.
          </Typography>

          <Typography variant="body1" paragraph>
            <em>Look</em> shows detailed imagery of a documents security
            features, while <em>Feel</em> informs the user ahout tactile
            specifications.
            <em>Tilt</em> information is obtained through holographic images of
            your documents by tilting your device.
          </Typography>
          <Grid container direction="row" justifyContent="flex-start" gap={1}>
            <Grid item>
              <Link
                href="https://apps.apple.com/nl/app/keesingapp/id6479046618?l=en-GB"
                variant="small"
                target="_blank"
              >
                ios
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://play.google.com/store/apps/details?id=com.keesing.documentchecker.prod&hl=en&gl=US"
                variant="small"
                target="_blank"
              >
                android
              </Link>
            </Grid>
          </Grid>
        </TextSection>
      </StaticSection>

      <VisualSection>
        <Image src={keesingAppOverview} alt="KeesignApp overview" />
        <Image src={keesingAppOverview} alt="KeesignApp overview" />
      </VisualSection>
    </HomeSection>
  );
};

export default KeesingApp;
