import * as React from 'react';
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'utils/createEmotionCache';

type DocumentProps = {
  emotionStyleTags: React.ReactElement[];
};

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="emotion-insertion-point" content="" />
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => {
        const AppWithEmotion = App as React.ComponentType<
          Record<string, unknown> & { emotionCache?: typeof cache }
        >;
        return (props: Record<string, unknown>) => (
          <AppWithEmotion {...props} emotionCache={cache} />
        );
      },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionChunks = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionChunks.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
