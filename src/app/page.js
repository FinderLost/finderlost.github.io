import Navbar from '../components/Navbar/Navbar';
import HomeSection from '../components/HomeSection/HomeSection';
import KeyFeaturesSection from '../components/KeyFeaturesSection/KeyFeaturesSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HomeSection />
      <KeyFeaturesSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
