import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="Layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <a className="icon">💎🤲</a>
        </Link>
        <h1>Crypto Tracker</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
