import { createMuiTheme } from '@material-ui/core';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#00A4EC',
    },
    text: {
      primary: '#333',
    },
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    h2: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 700,
    },
    body1: {},
  },

  overrides: {
    MuiLink: {
      root: {
        transition: 'all .2s',
        '&:hover': {
          backgroundColor: '#000',
          color: '#fff',
        },
      },
    },
  },
});

export default Theme;
