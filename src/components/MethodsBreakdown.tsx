import { Card, CardContent } from "@/components/ui/card";
import prayerImage from "@/assets/prayer-meditation.jpg";

const MethodsBreakdown = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              🎯 Inclui Guias Passo a Passo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Veja exatamente como aplicar cada método com explicações claras e exemplos práticos para que não se perca em nenhum detalhe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            <Card className="border-spiritual-gold/50 shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-bold text-lg mb-2">Para Iniciantes</h3>
                <p className="text-muted-foreground">
                  Ideal para quem quer resultados reais sem confusão nem frustração
                </p>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold/50 shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="font-bold text-lg mb-2">Crescer & Servir</h3>
                <p className="text-muted-foreground">
                  Para cristãos que sonham em aprofundar sua fé e impactar vidas
                </p>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold/50 shadow-warm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-lg mb-2">Metodologia Clara</h3>
                <p className="text-muted-foreground">
                  Sistema simples e efetivo que transformou centenas de pessoas
                </p>
              </CardContent>
            </Card>

          </div>

          <div className="text-center">
            <img 
              src={prayerImage} 
              alt="Pessoa em Oração e Meditação" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-spiritual"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodsBreakdown;