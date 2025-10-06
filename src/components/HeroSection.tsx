import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-faith-restoration.jpg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            Descubra Como Restaurar Sua Fé e Sentir a Presença de Deus 
            <span className="block text-spiritual-gold mt-2 md:mt-4">
              Mesmo Que Sua Vida Espiritual Esteja Fria
            </span>
          </h1>
          
          <h2 className="font-body text-base md:text-2xl lg:text-3xl mb-6 md:mb-8 text-gray-200 font-light px-4">
            Domine os Métodos Mais Poderosos de Oração e Conexão Espiritual desde Casa, Passo a Passo, com Resultados Reais em Dias, Não Anos
          </h2>

          <div className="bg-white/10 backdrop-blur-sm border border-spiritual-gold/50 rounded-lg p-4 md:p-6 mb-6 md:mb-8 max-w-3xl mx-auto">
            <p className="text-sm md:text-lg text-spiritual-gold font-semibold">
              ✨ Sem conhecimentos teológicos complexos. Sem confusão. Com métodos práticos e resultados que transformarão sua vida espiritual.
            </p>
          </div>
          
          <Button 
            variant="cta-large" 
            onClick={scrollToCTA}
            className="animate-pulse-slow"
          >
            🙏 Quero Restaurar Minha Fé Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;