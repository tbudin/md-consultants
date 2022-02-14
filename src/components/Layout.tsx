import Head from "next/head";
import Navigation from "./Navigation";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#1b365d" />
      </Head>
      <header className="main-header">
        <Header />
      </header>
      <nav className="main-nav">
        <Navigation />
      </nav>
      <main className="main-content">{children}</main>
      <footer className="main-footer">
        <Footer />
      </footer>
    </div>
  );
}
