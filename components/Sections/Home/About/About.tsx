import React from 'react';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  StaticSection,
  GeneralSection,
} from 'components/Layout/LayoutSections';
import { Image } from 'components/Layout/Visual';
import profilePhoto from 'public/images/jeroenderks.jpg';
import Link from 'components/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StyledLink } from 'components/Link/Link';

const experienceData = [
  {
    title: 'Frontend developer/ LAUDO',
    location: 'Berlin, DE/ 2020 - current',
  },
  {
    title: 'Frontend developer and designer/ DHI GRAS',
    location: 'Copenhagen, DK/ 2018 - 2020',
  },
  {
    title: 'Developer and interaction designer/ YOKE',
    location: 'Copenhagen, DK/ 2017',
  },
  {
    title: 'VR post production assistent/ Makropol',
    location: 'Copenhagen, DK/ 2017',
  },
  {
    title: 'Research assistant and co-author/ RELATE AAU',
    location: 'Aalborg DK/ 2017',
  },
];

const educationData = [
  {
    title: 'Art & Technology BA/ Aalborg University',
    location: 'Aalborg, DK/ 2013 - 2016',
  },
  {
    title: 'International Communication and Media BA/ Utrecht UoAS',
    location: 'Utrecht, NL/ 2008 - 2013',
  },
];

const About = () => {
  return (
    <HomeSection>
      <span id="about" />
      <StaticSection>
        <GeneralSection>
          <Grid container>
            <Grid item xs={12} sm={12} md={10} lg={11}>
              <Typography variant="h3" fontWeight="bold">
                Jeroen Derks
              </Typography>
              <Typography variant="body1" fontWeight={400}>
                Seniored React developer with a love for design and heaps of
                experience with Maps, Design systems and Localization. <br />
                Enjoy working with Typescript, NextJs, MUI, and love learning
                more
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={2} lg={1}>
              <Typography variant="body1" gutterBottom fontWeight="bold">
                Born in the Netherlands
              </Typography>
              <Typography variant="body1">
                Educated in Denmark, living in Berlin
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            position={{ xs: 'static', sm: 'static', md: 'absolute' }}
            bottom="0"
            py={{ xs: 1, sm: 1, md: 10 }}
          >
            <Grid item xs={12} sm={12} md={6} lg={7}>
              <Image src={profilePhoto} alt="mug_shot" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={5}>
              <Box px={{ xs: 0, sm: 0, md: 5 }} height={1} display="flex">
                <Box alignSelf="flex-end">
                  <Typography variant="body1" fontWeight="bold" paragraph>
                    Favorite experiences:
                  </Typography>
                  {experienceData.map(({ title, location }) => (
                    <React.Fragment key={title}>
                      <Typography variant="body1">{title}</Typography>
                      <Typography variant="body2" gutterBottom>
                        {location}
                      </Typography>
                    </React.Fragment>
                  ))}

                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    paragraph
                    mt={2}
                  >
                    Education:
                  </Typography>
                  {educationData.map(({ title, location }) => (
                    <React.Fragment key={title}>
                      <Typography variant="body1">{title}</Typography>
                      <Typography variant="body2" gutterBottom>
                        {location}
                      </Typography>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={10} lg={11} mt={2}>
              <StyledLink
                href="/files/cv_jeroenderks.pdf"
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                CV
              </StyledLink>
            </Grid>
            <Grid item xs={6} sm={6} md={2} lg={1} mt={2} alignItems="flex-end">
              <Link href="/others">More</Link>
            </Grid>
          </Grid>
        </GeneralSection>
      </StaticSection>
    </HomeSection>
  );
};

export default About;
