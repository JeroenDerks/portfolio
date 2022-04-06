import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import 'styles/style.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Jeroen Derks - portfolio</title>
        <meta
          name="description"
          content="Welcome to Jeroen's collection of web development, tech experiments and digital-physical interfaces"
        />
        <meta
          property="og:title"
          content="Jeroen Derks - portfolio"
          key="title"
        />
        <meta property="og:image" content="/public/thumbnail192.png" />
        <meta
          property="og:description"
          content="Jeroen's collection of web development, tech experiments and digital-physical interfaces"
        />
      </Head>
      <Component pageProps={pageProps} />
    </ThemeProvider>
  );
}
