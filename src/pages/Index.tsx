import VideoBackground from '@/components/VideoBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhoWeHelpSection from '@/components/WhoWeHelpSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResearchPreview from '@/components/ui/ResearchPreview';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <VideoBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
          <WhoWeHelpSection />
          <AboutSection />
          <ResearchPreview />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
