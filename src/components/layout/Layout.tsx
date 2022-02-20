import Head from "next/head";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="site-wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffe196"/>
        <meta name="apple-mobile-web-app-title" content="MD Consultants"/>
        <meta name="application-name" content="MD Consultants"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffe196"/>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <header className="site-header">
        <Header />
      </header>
      <nav className="site-nav">
        <Navigation />
      </nav>
      <main className="site-content">{children}</main>
      <footer className="site-footer">
        <Footer />
      </footer>
    </div>
  );
}
