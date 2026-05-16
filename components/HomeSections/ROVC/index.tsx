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
                    NextJS, TypeScript, AWS, Lambda, KontentAI, Algolia
                </Typography>
            </InfoSection>

            <TextSection>
                <Typography variant="body1" paragraph>
                    ROVC is the Netherlands' main technical training institute: it connects professionals and organizations with courses and certifications for lifelong learning.
                </Typography>
                <Typography variant="body1" paragraph>
                    As Frontend Developer, I maintain and imrprove this high-traffic platform with a modern composable stack using ISR for performance and SEO; Algolia for fast search, Tailwind CSS for styling, serverless microservices on AWS Lambda that sync product data between the ROVC API and CMS.
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
