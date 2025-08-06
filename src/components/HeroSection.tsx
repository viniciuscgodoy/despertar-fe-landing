import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-prayer-sunrise.jpg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sua fé está esfriando? 
            <span className="block text-spiritual-gold">
              Descubra como reacender sua conexão com Deus
            </span>
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal">
              antes que seja tarde demais.
            </span>
          </h1>
          
          <h2 className="font-body text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light">
            Existe um caminho simples e prático para restaurar sua fé — 
            e você pode começar hoje mesmo.
          </h2>
          
          <Button 
            variant="cta-large" 
            onClick={scrollToCTA}
            className="animate-pulse hover:animate-none"
          >
            🙏 Quero Restaurar Minha Fé Agora
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;