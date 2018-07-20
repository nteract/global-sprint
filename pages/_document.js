import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,700"
            rel="stylesheet"
          />
          <style>{`
            :root {
            }

            body, html {
              margin: 0;
              padding: 0;
            }

            html {
              background-color: #ff598f;
            }

            `}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
