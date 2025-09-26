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
          
          <div className="text-center mb-12">
            <div className="inline-block bg-spiritual-gold text-black px-6 py-3 rounded-full font-bold text-lg mb-6">
              💎 VALOR TOTAL INCRÍVEL 💎
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Um resumo de tudo o que você vai receber HOJE
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Veja todo o valor extraordinário que está obtendo
            </p>
            
            <div className="text-3xl font-bold text-spiritual-gold mb-8">
              R$ 675 em valor!
            </div>
          </div>

          <Card className="border-spiritual-gold border-2 shadow-2xl mb-8">
            <CardContent className="p-8">
              
              <div className="space-y-4 mb-8">
                
                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ DESPERTAR DA FÉ (Livro Digital + Vídeos)</span>
                  <span className="font-bold text-spiritual-gold">R$ 219</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ Rosário e Terço - Guia Completo</span>
                  <span className="font-bold text-spiritual-gold">R$ 97</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ Jejum Espiritual - Do Iniciante ao Avançado</span>
                  <span className="font-bold text-spiritual-gold">R$ 127</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ 100 Versículos para Memorizar</span>
                  <span className="font-bold text-spiritual-gold">R$ 87</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ Plano de Leitura Bíblica Anual</span>
                  <span className="font-bold text-spiritual-gold">R$ 97</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                  <span className="font-semibold text-foreground">✓ Certificado de Conclusão</span>
                  <span className="font-bold text-spiritual-gold">R$ 47</span>
                </div>

                <div className="flex justify-between items-center py-4 text-xl font-bold border-t-2 border-spiritual-gold">
                  <span className="text-foreground">Valor total</span>
                  <span className="text-spiritual-gold">R$ 674,90</span>
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
                className="w-full text-xl py-6 animate-pulse hover:animate-none mb-6"
              >
                🚀 BAIXAR AGORA - R$ 19,90
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