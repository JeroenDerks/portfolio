import React from 'react';
import Grid from '@mui/material/Grid';
import ArchiveLayout from 'components/ArchiveLayout';
import { VideoWrapper } from 'components/Video';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const videoIds = [
  '7SWHQRxW8-g',
  '7DKz5lCiG3U',
  'r3Nlq_ur7e0',
  'sriM98k958o',
  'UebTQanM4gc',
  'FmLog63z1sk',
  '6dPjEc4aLaE',
  'GpabIh-vGVA',
  'j0WJVquog9Q',
  'Qf9TQyBs3oA',
];

const DhiPortals = () => (
  <ArchiveLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {videoIds.map((videoId, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <VideoWrapper>
            <LiteYouTubeEmbed
              id={videoId}
              title={`dhi video ${i}`}
              webp={true}
            />
          </VideoWrapper>
        </Grid>
      ))}
    </Grid>
  </ArchiveLayout>
);

export default DhiPortals;
