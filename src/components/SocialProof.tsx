import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              O que dizem nossos estudantes?
            </h2>
            <p className="text-lg text-muted-foreground">
              Milhares de pessoas já transformaram suas vidas espirituais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            
            <Card className="border-spiritual-gold/30 shadow-warm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-spiritual-gold text-spiritual-gold" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "Incrível método! Em apenas 2 meses já sinto uma conexão muito mais profunda com Deus. 
                  Os métodos são super bem explicados e realmente funcionam. 
                  Recuperei minha paz interior e agora tenho propósito na vida."
                </blockquote>
                
                <div className="border-t border-spiritual-gold/30 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center font-bold text-spiritual-gold">
                      MG
                    </div>
                    <div>
                      <h4 className="font-semibold">Maria Gonçalves</h4>
                      <p className="text-sm text-muted-foreground">São Paulo, SP</p>
                      <p className="text-xs text-muted-foreground">2 meses usando o método</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold/30 shadow-warm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-spiritual-gold text-spiritual-gold" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "Sempre quis ter uma vida espiritual mais profunda mas não sabia como. 
                  Este método me deu todas as bases e agora tenho uma rotina de oração que transformou minha vida. 
                  Os materiais são excelentes. 100% recomendado."
                </blockquote>
                
                <div className="border-t border-spiritual-gold/30 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center font-bold text-spiritual-gold">
                      AS
                    </div>
                    <div>
                      <h4 className="font-semibold">Ana Silva</h4>
                      <p className="text-sm text-muted-foreground">Rio de Janeiro, RJ</p>
                      <p className="text-xs text-muted-foreground">4 meses usando o método</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold/30 shadow-warm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-spiritual-gold text-spiritual-gold" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "O que mais gostei é que posso aprender no meu ritmo desde casa. 
                  Trabalho em tempo integral mas nos meus momentos livres pratico. 
                  Já sinto muito mais paz e minha família nota a diferença!"
                </blockquote>
                
                <div className="border-t border-spiritual-gold/30 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-spiritual-gold/20 rounded-full flex items-center justify-center font-bold text-spiritual-gold">
                      CL
                    </div>
                    <div>
                      <h4 className="font-semibold">Carlos Lima</h4>
                      <p className="text-sm text-muted-foreground">Belo Horizonte, MG</p>
                      <p className="text-xs text-muted-foreground">3 meses usando o método</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-spiritual-gold/10 px-6 py-3 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9/5 estrelas em média</span>
            </div>
            <p className="text-muted-foreground mt-2">
              +3.500 estudantes verificados
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;