import { Card } from "@/components/ui/card";

const PainPoints = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-8 px-2">
            Você já se sentiu assim?
          </h2>

          <Card className="p-4 md:p-6 border-l-4 border-spiritual-gold bg-white/80">
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              💔 Suas orações parecem não ser ouvidas...
            </p>
          </Card>

          <Card className="p-4 md:p-6 border-l-4 border-spiritual-gold bg-white/80">
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              😰 Sente que não é "digno o suficiente" de uma vida espiritual plena...
            </p>
          </Card>

          <Card className="p-4 md:p-6 border-l-4 border-spiritual-gold bg-white/80">
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              ⏰ Perde tempo com pregações confusas que não trazem resultados práticos...
            </p>
          </Card>

          <Card className="p-4 md:p-6 border-l-4 border-spiritual-gold bg-white/80">
            <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              🤔 Tentou se reconectar, mas acabou mais confuso e distante...
            </p>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;