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

const FEXP = () => (
    <HomeSection>
        <StaticSection>
            <HeadingSection>
                <Typography variant="h3" fontWeight="bold">
                    Fugro Experience
                </Typography>
            </HeadingSection>
            <InfoSection>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                    Full stack
                </Typography>
                <Typography variant="body1">
                    NextJS, TypeScript, Electron, Storyblok, Framer Motion, ARKit
                </Typography>
            </InfoSection>

            <TextSection>
                <Typography variant="body1" paragraph>
                    Digitale evolutie is essentieel voor alle bedrijven binnen elke sector. Touchtribe hielp opleidingsinstituut ROVC, onderdeel van de Salta Group, bij het transformeren van hun digitale landschap.
                </Typography>

            </TextSection>
        </StaticSection>

        <VisualSection>
            <VideoWrapper>
                <Iframe
                    src='https://player.vimeo.com/video/1153663973?title=0&byline=0&portrait=0&autoplay=1&mute=1&loop=1&controls=0&playlist=1153663973'
                    frameBorder="0"
                    allow="fullscreen"
                    loading="lazy"

                />
            </VideoWrapper>
        </VisualSection>
    </HomeSection>
);

export default FEXP;
