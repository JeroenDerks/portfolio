import styled from '@mui/system/styled';

export const VideoWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  height: 0,
  paddingBottom: '56.25%',
});

export const Iframe = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
