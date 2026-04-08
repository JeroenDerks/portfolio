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
import { Iframe, VideoWrapper } from 'components/Video';

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
                    todo
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
