import React from 'react';
import Typography from '@mui/material/Typography';
import HomeSection from 'components/Layout/LayoutSections';
import {
  StaticSection,
  GeneralSection,
} from 'components/Layout/LayoutSections';
import profilePhoto from 'public/images/jeroenderks.jpg';
import Link from 'components/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { StyledLink } from 'components/Link/Link';
import Image from 'components/Image';

const experienceData = [
  {
    title: 'Frontend developer / Label A',
    location: 'Amsterdam, NL / 2022 - current',
  },
  {
    title: 'Frontend developer / LAUDO',
    location: 'Berlin, DE / 2020 - 2022',
  },
  {
    title: 'Frontend developer and designer / DHI GRAS',
    location: 'Copenhagen, DK / 2018 - 2020',
  },
  {
    title: 'Developer and interaction designer / YOKE',
    location: 'Copenhagen, DK / 2017',
  },
  {
    title: 'VR post production assistent / Makropol',
    location: 'Copenhagen, DK / 2017',
  },
  {
    title: 'Research assistant and co-author / RELATE AAU',
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

const About = () => (
  <HomeSection>
    <span id="about" />
    <StaticSection>
      <GeneralSection>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={7}>
            <Typography variant="h3" fontWeight="bold">
              Jeroen Derks
            </Typography>
            <Typography variant="body1" fontWeight={400}>
              Experienced Full-stack Developer with a passion for design and
              collaboration. Proficient in React, NextJS and TypeScript across
              app, frontend and backend development. Passionate about boosting
              quality of work and facilitating team growth. Let's build some
              great online and offline experiences together!
            </Typography>
          </Grid>

          <Grid item xs={0} sm={0} md={4} lg={4} />
          <Grid item xs={12} sm={12} md={2} lg={1}>
            <Link
              href="https://www.linkedin.com/in/derksdk/"
              variant="small"
              target="_blank"
            >
              Linkedin
            </Link>
            <br />
            <Link
              href="https://github.com/JeroenDerks"
              variant="small"
              target="_blank"
            >
              Github
            </Link>
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
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  Favorite experiences:
                </Typography>
                {experienceData.map(({ title, location }) => (
                  <React.Fragment key={title}>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body1" gutterBottom fontSize={11}>
                      {location}
                    </Typography>
                  </React.Fragment>
                ))}

                <Typography
                  variant="body1"
                  fontWeight="bold"
                  gutterBottom
                  mt={2}
                >
                  Education:
                </Typography>
                {educationData.map(({ title, location }) => (
                  <React.Fragment key={title}>
                    <Typography variant="body1">{title}</Typography>
                    <Typography variant="body1" gutterBottom fontSize={11}>
                      {location}
                    </Typography>
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={10} lg={11} mt={2}>
            <StyledLink
              href="/files/cv_jeroenderks_2024.pdf"
              download
              rel="noopener noreferrer"
              target="_blank"
            >
              CV
            </StyledLink>
          </Grid>
          <Grid item xs={6} sm={6} md={2} lg={1} mt={2} alignItems="flex-end">
            <Link href="/archive">Archive</Link>
          </Grid>
        </Grid>
      </GeneralSection>
    </StaticSection>
  </HomeSection>
);

export default About;
