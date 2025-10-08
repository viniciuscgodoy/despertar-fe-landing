import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PricingOffer = () => {
  const scrollToOffer = () => {
    window.open("https://pay.cakto.com.br/3fd4jcm", "_blank");
  };

  return (
    <section id="oferta" className="py-16 bg-gradient-to-br from-spiritual-gold/10 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-lg mb-4 md:mb-6">
              🔥 APENAS HOJE 🔥
            </div>
            
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-4">
              Oferta Disponível Até Hoje!
            </h2>
            
            <div className="text-xl md:text-2xl font-bold text-spiritual-gold mb-6 md:mb-8">
              Economize 91%!
            </div>
          </div>

          <Card className="border-spiritual-gold border-2 shadow-glow mb-6 md:mb-8 bg-gradient-premium">
            <CardContent className="p-4 md:p-8">
              
              <div className="text-center mb-6 md:mb-8">
                <p className="text-sm md:text-base text-muted-foreground mb-2 md:mb-3 px-2">
                  Valor do Livro Digital + Vídeos
                </p>
                <div className="text-xl md:text-2xl font-bold text-muted-foreground mb-2 line-through decoration-2">
                  R$ 219,90
                </div>
                <div className="text-sm md:text-base text-muted-foreground mb-4 line-through decoration-2">
                  + R$ 455,00 em Bônus
                </div>
                
                <div className="bg-spiritual-gold/10 border-2 border-spiritual-gold p-4 md:p-6 rounded-lg mb-4 md:mb-6">
                  <p className="text-sm md:text-base font-semibold text-foreground mb-2 px-2">
                    Hoje você investe apenas:
                  </p>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-spiritual-gold mb-2">
                    R$ 19,90
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    💳 Pagamento único • Sem mensalidades
                  </p>
                  <p className="text-xs md:text-sm font-bold text-spiritual-deep mt-2">
                    Economize mais de 90%!
                  </p>
                </div>
              </div>

              <Button 
                variant="cta-large" 
                onClick={scrollToOffer}
                className="w-full text-base md:text-xl py-4 md:py-6 mb-4 md:mb-6"
              >
                🙏 QUERO COMEÇAR AGORA
              </Button>

              <div className="text-center space-y-2 text-xs md:text-sm text-muted-foreground px-2">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
                  <span>🔒 Pagamento Seguro</span>
                  <span>✅ Acesso Imediato</span>
                  <span>💯 Garantia de 7 Dias</span>
                </div>
                
                <p className="mt-3 md:mt-4">
                  Aja agora antes que volte ao preço original.
                </p>
                <p className="text-xs">
                  O preço de referência está em reais, pagamento processado em sua moeda local.
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-300 border-2">
            <CardContent className="p-4 md:p-6">
              <div className="text-center">
                <h3 className="font-heading text-lg md:text-xl font-bold text-red-700 mb-3 md:mb-4">
                  🔥 ÚLTIMAS CÓPIAS DISPONÍVEIS! 🔥
                </h3>
                <p className="text-sm md:text-base text-red-600 font-semibold mb-3 md:mb-4">
                  Apenas por HOJE com 91% de Desconto
                </p>
                <p className="text-sm md:text-base text-red-600 mb-3 md:mb-4 px-2">
                  Economize R$ 655,00 - De R$ 674,90 para apenas R$ 19,90
                </p>
                
                <div className="bg-red-100 p-3 md:p-4 rounded-lg mb-3 md:mb-4">
                  <div className="text-xs md:text-sm font-semibold text-red-700 mb-2">
                    📚 187 livros vendidos
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-red-700 mb-2">
                    Restam apenas 13 cópias em promoção
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-3 md:h-4 mb-2">
                    <div className="bg-red-600 h-3 md:h-4 rounded-full" style={{width: '93.5%'}}></div>
                  </div>
                </div>
                
                <p className="text-red-700 font-bold text-xs md:text-sm px-2">
                  ⚡ ATENÇÃO! Uma vez esgotadas as 13 cópias restantes, o preço volta para R$ 674,90
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PricingOffer;