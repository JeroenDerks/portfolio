import React from 'react';
import styled from '@mui/system/styled';

const VideoWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '56.25%',
});

const Iframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const Video = ({ vimeoVideoId }: { vimeoVideoId: string }) => {
  const vimeoVideoSrc =
    vimeoVideoId &&
    `https://player.vimeo.com/video/${vimeoVideoId}?title=0&byline=0&portrait=0`;

  return (
    <VideoWrapper>
      <Iframe
        src={vimeoVideoSrc}
        title={vimeoVideoId}
        frameBorder="0"
        allow="fullscreen"
        // samesite="None"
      />
    </VideoWrapper>
  );
};

export default Video;
