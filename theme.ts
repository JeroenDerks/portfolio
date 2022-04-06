import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'sans-serif'].join(' , '),
    subtitle1: {
      fontSize: 13,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 13,
    },
    body2: {
      color: 'grey',
    },
    h1: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '-0.06em',
      fontSize: 52,
      '@media (max-width:900px)': {
        fontSize: '42px',
      },
    },
    h2: {
      fontSize: 14,
      fontWeight: 400,
    },
    h3: {
      textTransform: 'uppercase',
      letterSpacing: '-0.06em',
      '@media (max-width:900px)': {
        fontSize: '32px',
        paddingTop: 80,
      },
    },
  },
});
