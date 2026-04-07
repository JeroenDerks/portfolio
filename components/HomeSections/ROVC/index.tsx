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

const ROVC = () => (
    <HomeSection>
        <StaticSection>
            <HeadingSection>
                <Typography variant="h3" fontWeight="bold">
                    ROVC
                </Typography>
            </HeadingSection>
            <InfoSection>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                    Full stack
                </Typography>
                <Typography variant="body1">
                    NextJS, AWS, Lambda, KontentAI, Algolia
                </Typography>
            </InfoSection>

            <TextSection>
                <Typography variant="body1" paragraph>
                    Digitale evolutie is essentieel voor alle bedrijven binnen elke sector. Touchtribe hielp opleidingsinstituut ROVC, onderdeel van de Salta Group, bij het transformeren van hun digitale landschap.
                </Typography>
                <Link href="https://rovc.nl/" variant="small" target="_blank">
                    rovc.nl
                </Link>
            </TextSection>
        </StaticSection>

        <VisualSection>
            <Image src={rovcImg1} alt="ROVC overview" />
            <Image src={rovcImg2} alt="ROVC overview" />
        </VisualSection>
    </HomeSection>
);

export default ROVC;
