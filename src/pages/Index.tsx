import { useEffect } from "react";
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
  
  useEffect(() => {
    // Script para detectar saída da página e redirecionar para back redirect
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        // Redireciona apenas uma vez
        if (!sessionStorage.getItem('redirected')) {
          sessionStorage.setItem('redirected', 'true');
          window.location.href = "/back-redirect";
        }
      }
    };

    const handleBeforeUnload = () => {
      if (!sessionStorage.getItem('redirected')) {
        sessionStorage.setItem('redirected', 'true');
        window.location.href = "/back-redirect";
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
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
