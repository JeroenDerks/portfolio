import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import Image from 'components/Image';
import darkweb from 'public/images/dw1.jpg';
import Link from 'components/Link';

const Darkweb = () => (
    <ArchiveLayout>
        <Grid container spacing={4} wrap="wrap-reverse">
            <Grid item xs={12} sm={12} >
                <Image src={darkweb} alt="darkweb" unoptimized />
            </Grid>
        </Grid>
        <Link href="http://www.darkweb.dk" target="_blank" variant="small">
            darkweb.dk
        </Link>
    </ArchiveLayout>
);

export default Darkweb;
