import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
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
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PainPoints />
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