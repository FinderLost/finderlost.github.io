import Head from "next/head";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const metadata = {
  title: "Finder Lost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  );
}