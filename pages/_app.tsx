import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme';
import 'styles/style.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Jeroen Derks portfolio</title>
        <meta name="title" content="Jeroen Derks portfolio" />
        <meta
          name="description"
          content="Experienced Full-stack Developer with a passion for design and collaboration. Proficient in React, NextJS and TypeScript across app, frontend and backend development. Passionate about boosting quality of work and facilitating team growth. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jeroen Derks portfolio" />
        <meta
          property="og:description"
          content="Experienced Full-stack Developer with a passion for design and collaboration. Proficient in React, NextJS and TypeScript across app, frontend and backend development. Passionate about boosting quality of work and facilitating team growth. "
        />
        <meta property="og:image" content="/public/thumbnail192.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Jeroen Derks portfolio" />
        <meta
          property="twitter:description"
          content="Experienced Full-stack Developer with a passion for design and collaboration. Proficient in React, NextJS and TypeScript across app, frontend and backend development. Passionate about boosting quality of work and facilitating team growth. "
        />
        <meta property="twitter:image" content="/public/thumbnail192.png" />
      </Head>
      <Component pageProps={pageProps} />
    </ThemeProvider>
  );
}
