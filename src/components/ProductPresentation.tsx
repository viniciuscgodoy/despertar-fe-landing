import { Card, CardContent } from "@/components/ui/card";
import methodsImage from "@/assets/bible-study-methods.jpg";

const ProductPresentation = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={methodsImage} 
                alt="Métodos de Estudo Bíblico e Oração" 
                className="w-full rounded-lg shadow-spiritual"
              />
            </div>

            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Domine os 4 Métodos Essenciais
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Cada método inclui instruções detalhadas, exemplos práticos e exercícios espirituais para que você possa começar a transformar sua vida desde o primeiro dia.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-spiritual-gold/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🙏</div>
                    <h4 className="font-semibold text-sm">Oração Contemplativa</h4>
                    <p className="text-xs text-muted-foreground mt-2">Para iniciantes</p>
                  </CardContent>
                </Card>

                <Card className="border-spiritual-gold/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">📖</div>
                    <h4 className="font-semibold text-sm">Leitura Orante</h4>
                    <p className="text-xs text-muted-foreground mt-2">Nível intermediário</p>
                  </CardContent>
                </Card>

                <Card className="border-spiritual-gold/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">🤲</div>
                    <h4 className="font-semibold text-sm">Meditação Cristã</h4>
                    <p className="text-xs text-muted-foreground mt-2">Para iniciantes</p>
                  </CardContent>
                </Card>

                <Card className="border-spiritual-gold/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">✨</div>
                    <h4 className="font-semibold text-sm">Jejum Espiritual</h4>
                    <p className="text-xs text-muted-foreground mt-2">Nível avançado</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;