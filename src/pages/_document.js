import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Bootstrap CSS */}
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/logo.png" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/* Bootstrap JS and dependencies */}
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;