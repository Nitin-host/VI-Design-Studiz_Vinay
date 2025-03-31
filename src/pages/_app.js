import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import { useRouter } from 'next/router';
import NavBar from '../component/NavBar';
import Footer from '../component/footer';
import '../styles/globals.css';
import '../styles/navBar.css';
import '../styles/home.css';
import '../styles/interiors.css';
import '../styles/Footer.css';
import '../styles/contact.css';

const titleMap = {
    '/': 'VI Design Studio',
    '/interiors': 'INTERIORS | VI Design Studio',
    '/land-scape': 'LANDSCAPE | VI Design Studio',
    // '/architecture': 'ARCHITECTURE | VI Design Studio',
    // '/project': 'PROJECT | VI Design Studio',
    '/contact': 'CONTACT | VI Design Studio',
};


function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [title, setTitle] = useState('VI Design Studio');

    useEffect(() => {
        const handleRouteChange = (url) => {
            const pageTitle = titleMap[url] || 'VI Design Studio';
            setTitle(pageTitle);
        };

        handleRouteChange(router.pathname);

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);


    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Transform your spaces with expert interior design, innovative architecture, and breathtaking landscape solutions. Elevate your home or business with VI Design Studioz."
          />
        </Head>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={true}
          storageKey="vi-design-theme"
        >
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    );
}

export default MyApp;
