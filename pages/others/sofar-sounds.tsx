import React from 'react';
import Grid from '@mui/material/Grid';
import OtherLayout from 'components/Layout/OtherLayout';
import { VideoWrapper } from 'components/Layout/Visual/Video';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const videoIds = [
  'OUJ3AjhQdg4',
  'v4x-7nBKvS8',
  'BK7brzDjab0',
  'jESiXHWAsPo',
  'shUdPhXdoPQ',
  'vk_q9LRYEwo',
  'auQvwyLFhL4',
  '2dYlu22ENXA',
  '0XGyD3cEPp4',
  'AoOmGZ-MoSI',
  'shtpmR4yzqY',
  '3r0rsk-tNV4',
  'pqHy-vzKlxo',
  'u9zEC7udEeM',
  '0fDMVb3lTbk',
];

const SofarSounds = () => (
  <OtherLayout>
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
  </OtherLayout>
);

export default SofarSounds;
