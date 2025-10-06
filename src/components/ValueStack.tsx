import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ValueStack = () => {
  const scrollToOffer = () => {
    window.open("https://pay.cakto.com.br/3fd4jcm", "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-spiritual-gold/10 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-spiritual-gold text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg mb-4 md:mb-6">
              💎 VALOR TOTAL INCRÍVEL 💎
            </div>
            
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 px-4">
              Um resumo de tudo o que você vai receber HOJE
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
              Veja todo o valor extraordinário que está obtendo
            </p>
            
            <div className="text-2xl md:text-3xl font-bold text-spiritual-gold mb-6 md:mb-8">
              R$ 675 em valor!
            </div>
          </div>

          <Card className="border-spiritual-gold border-2 shadow-2xl mb-6 md:mb-8">
            <CardContent className="p-4 md:p-8">
              
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                
                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ DESPERTAR DA FÉ (Livro Digital + Vídeos)</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 219</span>
                </div>

                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ Rosário e Terço - Guia Completo</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 97</span>
                </div>

                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ Jejum Espiritual - Do Iniciante ao Avançado</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 127</span>
                </div>

                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ 100 Versículos para Memorizar</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 87</span>
                </div>

                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ Plano de Leitura Bíblica Anual</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 97</span>
                </div>

                <div className="flex justify-between items-center py-2 md:py-3 border-b border-spiritual-gold/20 gap-2">
                  <span className="font-semibold text-foreground text-sm md:text-base">✓ Certificado de Conclusão</span>
                  <span className="font-bold text-spiritual-gold text-sm md:text-base whitespace-nowrap">R$ 47</span>
                </div>

                <div className="flex justify-between items-center py-3 md:py-4 text-lg md:text-xl font-bold border-t-2 border-spiritual-gold gap-2">
                  <span className="text-foreground">Valor total</span>
                  <span className="text-spiritual-gold whitespace-nowrap">R$ 674,90</span>
                </div>

              </div>

              <div className="text-center bg-red-50 p-6 rounded-lg mb-8 border-2 border-red-200">
                <div className="text-red-600 font-bold text-lg mb-2">
                  🔥 Preço especial apenas até HOJE 🔥
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">
                  R$ 19,90
                </div>
                <div className="text-red-600 font-semibold">
                  Você economiza R$ 655,00!
                </div>
              </div>

              <p className="text-center text-sm text-muted-foreground mb-6">
                O preço de referência está em reais, mas o pagamento é processado na moeda do seu país.
              </p>

              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-4">
                  Clique no botão abaixo para conhecer o valor na moeda do seu país e reservar seu livro 👇
                </p>
              </div>

              <Button 
                variant="cta-large" 
                onClick={scrollToOffer}
                className="w-full text-base md:text-xl py-4 md:py-6 mb-6"
              >
                🚀 COMEÇAR AGORA
              </Button>

              <div className="text-center space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-center items-center gap-4">
                  <span>🔒 Pagamento Seguro</span>
                  <span>✅ Acesso Imediato</span>
                  <span>💯 7 dias de Garantia</span>
                </div>
              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default ValueStack;