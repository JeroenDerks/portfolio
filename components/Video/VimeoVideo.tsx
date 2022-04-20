import React from 'react';
import { VideoWrapper, Iframe } from 'components/Video';

const VimeoVideo = ({ vimeoVideoId }: { vimeoVideoId: string }) => {
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
        loading="lazy"
      />
    </VideoWrapper>
  );
};

export default VimeoVideo;
