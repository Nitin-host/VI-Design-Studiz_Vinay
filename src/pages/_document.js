import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
          <Html lang='en'>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
              <link rel="icon" href="/favicon.ico" />
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