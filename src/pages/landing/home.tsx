/**
 * Home Page Component
 * This component serves as the home page of the application.
 * It includes a navigation bar and a welcome message.
 * It is styled using Tailwind CSS for a modern look.
 */
import React, { useEffect } from "react";
import NavbarUI from "@/components/custom/navbar";
import HomeContent from "@/components/landing/home-content";
import VideoDialog from "@/components/landing/video-dialog";
import FeaturesParallax from "@/components/landing/features";
import TextRevealHome from "@/components/landing/text-reveal-home";
import ClientMarquee from "@/components/landing/clients";
import Footer from "@/components/custom/footer";
import { useUtilsContext } from "@/providers/utils-providers";

/**
 * The Home component renders the home page of the application.
 * It includes a navigation bar and a welcome message.
 * It is styled using Tailwind CSS for a modern look.
 */
const Home: React.FC = () => {
  const { updatePreloader } = useUtilsContext();
  useEffect(() => {
    updatePreloader();
  }, []);
  return (
    <div>
      <NavbarUI />
      <HomeContent />
      <VideoDialog />
      <FeaturesParallax />
      <TextRevealHome />
      <ClientMarquee />
      <Footer />
    </div>
  );
};

export default Home;
