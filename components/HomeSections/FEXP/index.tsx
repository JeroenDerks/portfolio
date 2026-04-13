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
                    I led the digital signage programme for Fugro's new headquarters in
                    Leidschendam. Overseeing delivery end to end, aligning UX and visual design
                    across every touchpoint, and coordinating two freelancers alongside 2 mobile
                    and 2 frontend developers.
                </Typography>
                <Typography variant="body1" >
                    The platform drives dozens of screens throughout
                    the building, from a central LED globe with a live world map and day/night
                    view to floor displays for news, projects, and colleague stories, all fed from
                    a headless CMS. I also advised on an AR layer for visitors and staff. The
                    stack combines fixed-resolution layouts, offline-first playback, live data, multi-screen video sync, and Electron in kiosk mode
                    for stable 24/7 operation.
                </Typography>
            </TextSection>
        </StaticSection>

        <VisualSection>
            <VideoWrapper aspectRatio={649 / 365.2}>
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
