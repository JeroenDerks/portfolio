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

const portraitVideoBox = { paddingBottom: '177.78%' } as const;

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
                    NextJS, TypeScript, Storyblok
                </Typography>
            </InfoSection>

            <TextSection>
                <Typography variant="body1" paragraph>
                    todo
                </Typography>
                <Link href="https://fugro.com/" variant="small" target="_blank">fugro.com</Link>

            </TextSection>
        </StaticSection>

        <VisualSection >
            <VideoWrapper style={{ backgroundColor: '#c5cbd5' }}>
                <Iframe
                    src='https://player.vimeo.com/video/910457423?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&autopause=0&playlist=910457423'
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    loading="lazy"

                />
            </VideoWrapper>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <VideoWrapper style={portraitVideoBox}>
                        <Iframe
                            src='https://player.vimeo.com/video/910457532?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&autopause=0&playlist=910457532'
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            loading="lazy"
                        />
                    </VideoWrapper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <VideoWrapper style={portraitVideoBox}>
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
