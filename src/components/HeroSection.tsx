import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-faith-restoration.jpg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Sente Que Deus Está Distante?
            <span className="block text-spiritual-gold mt-2">
              Descubra Como Reacender Sua Fé em Minutos Por Dia
            </span>
          </h1>
          
          <p className="font-body text-base sm:text-lg md:text-xl mb-6 text-gray-200 leading-relaxed px-2">
            Métodos práticos de oração que transformam sua conexão espiritual — mesmo que você nunca tenha conseguido manter uma rotina de fé
          </p>
          
          <Button 
            variant="cta-large" 
            onClick={scrollToCTA}
            className="text-base sm:text-lg md:text-xl px-8 py-6"
          >
            🙏 Quero Reacender Minha Fé
          </Button>
          
          <p className="text-xs sm:text-sm text-gray-300 mt-4">
            ✓ Acesso imediato • ✓ Apenas R$ 19,90 • ✓ Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;