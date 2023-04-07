import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import KeyFeaturesSection from '../components/KeyFeaturesSection';
import DownloadSection from '../components/DownloadSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <KeyFeaturesSection />
      <DownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
