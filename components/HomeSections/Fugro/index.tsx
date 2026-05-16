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
import rovcImg1 from 'public/images/rovc-1.webp';
import rovcImg2 from 'public/images/rovc-3.webp';
import Link from 'components/Link';
import VimeoVideo, { Iframe, VideoWrapper } from 'components/Video';
import Grid from '@mui/material/Grid';

const Fugro = () => (
    <HomeSection>
        <StaticSection>
            <HeadingSection>
                <Typography variant="h3" fontWeight="bold">
                    Fugro website
                </Typography>
            </HeadingSection>
            <InfoSection>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                    Frontend
                </Typography>
                <Typography variant="body1">
                    NextJS, TypeScript, Storyblok, GraphQL
                </Typography>
            </InfoSection>

            <TextSection>
                <Typography variant="body1" paragraph>
                    Fugro is a Dutch multinational listed on the Dutch stock exchange, focused on geo-data and asset integrity. It provides geotechnical, hydrographic, and geoscience services to offshore energy, infrastructure, and renewables worldwide, helping clients deliver safe, sustainable projects—from offshore wind to subsea pipelines and coastal protection.
                </Typography>
                <Typography variant="body1" paragraph>
                    As Lead Developer, I own frontend technical direction and architecture: I guide the team, uphold code quality, and make scalable design choices. I run reviews, support people’s growth, explain technical ideas to non-technical stakeholders, and improve workflows and tooling.
                </Typography>
                <Link href="https://fugro.com/" variant="small" target="_blank">fugro.com</Link>

            </TextSection>
        </StaticSection>

        <VisualSection >
            <VideoWrapper aspectRatio={547.8 / 365.2}>
                <Iframe
                    src='https://player.vimeo.com/video/910457423?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&autopause=0&playlist=910457423'
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    loading="lazy"

                />
            </VideoWrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} display={{ xs: 'none', md: 'block' }}>
                    <VideoWrapper aspectRatio={316.25 / 412.667}>
                        <Iframe
                            src='https://player.vimeo.com/video/910457532?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&autopause=0&playlist=910457532'
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            loading="lazy"
                        />
                    </VideoWrapper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <VideoWrapper aspectRatio={316.25 / 412.667}>
                        <Iframe
                            src='https://player.vimeo.com/video/910457445?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&autopause=0&playlist=910457445'
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            loading="lazy"
                        />
                    </VideoWrapper>
                </Grid>
            </Grid>
        </VisualSection>
    </HomeSection >
);

export default Fugro;
