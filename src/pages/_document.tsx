import Document, {
  DocumentContext, Html, Head, NextScript, Main,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
          <title>👨🏽‍💻 Melqui Sodré Desenvolvedor Front-End</title>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
