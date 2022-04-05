import { makeStyles } from '@material-ui/core/styles';

export const gridStyle = makeStyles({
  categoryWrapper: {
    height: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    pointerEvents: 'none',
    paddingTop: 200,
  },
  grid: {
    maxWidth: 1200,
  },
  gridItem: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
    cursor: 'pointer',
  },
  greyScale: {
    filter: 'grayscale(70%)',
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    bottom: 6,
    right: 2,
    opacity: 0.6,
    transition: 'opacity .2s',
    cursor: 'pointer',
    zIndex: 2000,
    '&:hover': {
      opacity: 0.8,
    },
  },
  image: {
    width: '100%',
  },
  transition: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
  },
  wrapper: {
    transition: 'all .6s ',
    transitionTimingFunction: 'ease',
  },
});

export const linkStyle = makeStyles({
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  wrapper: {
    backgroundColor: '#000',
    width: 'max-content',
    padding: '0px 2px',
    cursor: 'pointer',
    pointerEvents: 'all',
  },
});

export const videoStyle = makeStyles({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  videoWrapper: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%',
  },
});
