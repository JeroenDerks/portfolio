import React from 'react';
import Grid from '@mui/material/Grid';
import OtherLayout from 'components/Layout/OtherLayout';
import { VideoWrapper, Iframe } from 'components/Layout/Visual/Video';

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
  <OtherLayout>
    <Grid container spacing={4} wrap="wrap-reverse">
      {videoIds.map((videoId, i) => (
        <Grid item xs={12} sm={12} md={6} key={i}>
          <VideoWrapper>
            <Iframe
              src={`https://www.youtube.com/embed/${videoId}?controls=1`}
              title={`dhi video ${i}`}
              frameBorder="0"
              loading="lazy"
              allow="fullscreen; accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </VideoWrapper>
        </Grid>
      ))}
    </Grid>
  </OtherLayout>
);

export default DhiPortals;
