import { useEffect, useState } from "react";
import DateBanner from "@/components/DateBanner";
import HeroSection from "@/components/HeroSection";
import Identification from "@/components/Identification";
import ProblemAgitation from "@/components/ProblemAgitation";
import SolutionIntro from "@/components/SolutionIntro";
import ProductPresentation from "@/components/ProductPresentation";
import MethodsBreakdown from "@/components/MethodsBreakdown";
import BenefitsSection from "@/components/BenefitsSection";
import BonusesSection from "@/components/BonusesSection";
import PricingOffer from "@/components/PricingOffer";
import SocialProof from "@/components/SocialProof";
import AuthoritySection from "@/components/AuthoritySection";
import ValueStack from "@/components/ValueStack";
import FAQ from "@/components/FAQ";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const hasSeenExit = sessionStorage.getItem('exit-intent-shown');
    
    if (!hasSeenExit) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY < 10) {
          setShowExitIntent(true);
          sessionStorage.setItem('exit-intent-shown', 'true');
          window.location.href = '/back-redirect';
        }
      };

      const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        if (!hasSeenExit) {
          sessionStorage.setItem('exit-intent-shown', 'true');
          window.location.href = '/back-redirect';
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <DateBanner />
      <HeroSection />
      <Identification />
      <ProblemAgitation />
      <SolutionIntro />
      <ProductPresentation />
      <MethodsBreakdown />
      <BenefitsSection />
      <BonusesSection />
      <PricingOffer />
      <SocialProof />
      <AuthoritySection />
      <ValueStack />
      <FAQ />
      <Guarantee />
      <FinalCTA />
    </div>
  );
};

export default Index;