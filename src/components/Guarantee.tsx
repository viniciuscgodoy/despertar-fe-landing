import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, RefreshCw } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="py-20 bg-spiritual-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-spiritual-gold/10 rounded-full">
              <Shield className="w-16 h-16 text-spiritual-gold" />
            </div>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Garantia Incondicional de 
            <span className="text-spiritual-gold block">
              7 Dias
            </span>
          </h2>
          
          <Card className="border-spiritual-gold border-2 shadow-spiritual max-w-3xl mx-auto">
            <CardContent className="p-8">
              <p className="font-body text-xl text-foreground leading-relaxed mb-6">
                Se você não sentir mais paz, esperança e proximidade com Deus, 
                <span className="font-bold text-spiritual-gold"> devolvemos 100% do seu dinheiro.</span>
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Clock className="w-10 h-10 text-spiritual-gold" />
                  </div>
                  <h3 className="font-body font-semibold text-lg text-foreground mb-2">
                    7 Dias Completos
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Tempo suficiente para testar tudo
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <RefreshCw className="w-10 h-10 text-spiritual-gold" />
                  </div>
                  <h3 className="font-body font-semibold text-lg text-foreground mb-2">
                    100% Garantido
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Sem perguntas ou burocracias
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Shield className="w-10 h-10 text-spiritual-gold" />
                  </div>
                  <h3 className="font-body font-semibold text-lg text-foreground mb-2">
                    Risco Zero
                  </h3>
                  <p className="font-body text-muted-foreground">
                    Sua confiança é nossa prioridade
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;