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
              --outline-color: #11111177;
              --inline-color: #00000022;
            }

            body, html {
              margin: 0;
              padding: 0;
              color: var(--inline-color);
              text-shadow: 1px 0 0 var(--outline-color), 0 -1px 0 var(--outline-color), 0 1px 0 var(--outline-color), -1px 0 0 var(--outline-color);
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
