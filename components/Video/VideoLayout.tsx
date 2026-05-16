import styled from '@mui/system/styled';

export const VideoWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'aspectRatio',
})<{ aspectRatio?: number }>(({ aspectRatio }) => ({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom:
    aspectRatio !== undefined && aspectRatio > 0
      ? `${(100 / aspectRatio).toFixed(4)}%`
      : '56.25%',
}));

export const Iframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
