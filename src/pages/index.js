import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import DownloadSection from "../components/DownloadSection";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { isSupported } from "@firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfquMpKcVNcAFDEFp_zGMbqE5FmHEWQoY",
  authDomain: "finderlost-65f3e.firebaseapp.com",
  projectId: "finderlost-65f3e",
  storageBucket: "finderlost-65f3e.appspot.com",
  messagingSenderId: "968782545174",
  appId: "1:968782545174:web:4947976f2c3690d29e5037",
  measurementId: "G-8EWSNRC4GW",
};

export default function Home() {
  const app = initializeApp(firebaseConfig);

  if (typeof window !== "undefined" && isSupported()) {
    const analytics = getAnalytics(app);
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main>
        <Navbar />
        <HomeSection />
        <KeyFeaturesSection />
        <DownloadSection />
        <Footer />
      </main>
    </>
  );
}
