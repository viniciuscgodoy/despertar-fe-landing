import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Sun, Target, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8 text-spiritual-gold" />,
      text: "Sentir novamente a presença de Deus diariamente"
    },
    {
      icon: <Heart className="w-8 h-8 text-spiritual-gold" />,
      text: "Recuperar paz e esperança mesmo nos dias difíceis"
    },
    {
      icon: <Sun className="w-8 h-8 text-spiritual-gold" />,
      text: "Ter mais ânimo e propósito para viver"
    },
    {
      icon: <Heart className="w-8 h-8 text-spiritual-gold" />,
      text: "Orar com profundidade e clareza"
    },
    {
      icon: <Target className="w-8 h-8 text-spiritual-gold" />,
      text: "Libertar-se da sensação de vazio espiritual"
    }
  ];

  return (
    <section className="py-20 bg-spiritual-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Método Que Vai Restaurar Sua Fé e 
            <span className="text-spiritual-gold block">
              Transformar Sua Vida Espiritual
            </span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-warm hover:shadow-spiritual transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-spiritual-gold/10 rounded-full">
                    {benefit.icon}
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-6 h-6 text-spiritual-gold flex-shrink-0" />
                    <p className="font-body text-lg text-foreground font-medium">
                      {benefit.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;