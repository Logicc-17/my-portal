import HeroSection from "@/components/HeroSection";
import ApproachSection from "@/components/ApproachSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WorkSection from "@/components/WorkSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="film-grain bg-background min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div className="line-reveal w-full max-w-6xl mx-auto" />
        
        <div id="approach">
          <ApproachSection />
        </div>
        
        <div className="line-reveal w-full max-w-6xl mx-auto" />
        
        <div id="capabilities">
          <CapabilitiesSection />
        </div>
        
        <div className="line-reveal w-full max-w-6xl mx-auto" />
        
        <div id="work">
          <WorkSection />
        </div>
        
        <div className="line-reveal w-full max-w-6xl mx-auto" />
        
        <div id="philosophy">
          <PhilosophySection />
        </div>
        
        <div className="line-reveal w-full max-w-6xl mx-auto" />
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
