import HeroSection from "@/components/HeroSection";
import QuizConnection from "@/components/QuizConnection";
import Benefits from "@/components/Benefits";
import OfferStack from "@/components/OfferStack";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  console.log("Index component rendering...");
  
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <QuizConnection />
      <Benefits />
      <OfferStack />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default Index;
