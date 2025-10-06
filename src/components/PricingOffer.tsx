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
          
          <div className="text-center mb-12">
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse-slow">
              🔥 OFERTA LIMITADA - APENAS HOJE 🔥
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Oferta Disponível Até Hoje!
            </h2>
            
            <div className="text-2xl font-bold text-spiritual-gold mb-8">
              Economize 91%!
            </div>
          </div>

          <Card className="border-spiritual-gold border-2 shadow-2xl mb-8">
            <CardContent className="p-8">
              
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground mb-4">
                  O valor total do Livro digital + Vídeos é de
                </p>
                <div className="text-3xl font-bold text-foreground mb-2">
                  R$ 219,90
                </div>
                <div className="text-lg text-muted-foreground mb-6">
                  + R$ 455,00 em Bônus
                </div>
                
                <div className="bg-muted/50 p-6 rounded-lg mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Mas apenas por Hoje, você pode acessar todo o conteúdo economizando mais de 90%, 
                    ou seja, faz apenas um único pagamento de
                  </p>
                  <div className="text-5xl font-bold text-spiritual-gold mb-2">
                    R$ 19,90
                  </div>
                  <div className="text-sm text-muted-foreground">
                    💳 Pagamento único - Sem mensalidades
                  </div>
                </div>
              </div>

              <Button 
                variant="cta-large" 
                onClick={scrollToOffer}
                className="w-full text-xl py-6 animate-pulse-slow mb-6"
              >
                🙏 QUERO O LIVRO COM TODOS OS BÔNUS
              </Button>

              <div className="text-center space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-center items-center gap-4">
                  <span>🔒 Pagamento Seguro</span>
                  <span>✅ Acesso Imediato</span>
                  <span>💯 Garantia de 7 Dias</span>
                </div>
                
                <p className="mt-4">
                  Aja agora antes que volte ao preço original.
                </p>
                <p className="text-xs">
                  O preço de referência está em reais, pagamento processado em sua moeda local.
                </p>
              </div>

            </CardContent>
          </Card>

          <Card className="bg-red-50 border-red-300 border-2">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-red-700 mb-4">
                  🔥 ÚLTIMAS CÓPIAS DISPONÍVEIS! 🔥
                </h3>
                <p className="text-red-600 font-semibold mb-4">
                  Apenas por HOJE com 91% de Desconto
                </p>
                <p className="text-red-600 mb-4">
                  Economize R$ 655,00 - De R$ 674,90 para apenas R$ 19,90
                </p>
                
                <div className="bg-red-100 p-4 rounded-lg mb-4">
                  <div className="text-sm font-semibold text-red-700 mb-2">
                    📚 187 livros vendidos
                  </div>
                  <div className="text-sm font-semibold text-red-700 mb-2">
                    Restam apenas 13 cópias em promoção
                  </div>
                  <div className="w-full bg-red-200 rounded-full h-4 mb-2">
                    <div className="bg-red-600 h-4 rounded-full" style={{width: '93.5%'}}></div>
                  </div>
                </div>
                
                <p className="text-red-700 font-bold text-sm">
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