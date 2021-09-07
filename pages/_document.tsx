import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Manrope:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="canonical" href="https://joaopinheiro.vercel.app/" />
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
