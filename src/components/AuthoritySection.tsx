import { Card, CardContent } from "@/components/ui/card";
import padreEduardoImg from "@/assets/padre-eduardo.jpg";

const AuthoritySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem é o criador do Método?
            </h2>
          </div>

          <Card className="border-spiritual-gold/50 shadow-warm">
            <CardContent className="p-8">
              
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                
                <div className="flex-shrink-0">
                  <img 
                    src={padreEduardoImg} 
                    alt="Pe. Eduardo Santana"
                    className="w-48 h-48 rounded-full object-cover border-4 border-spiritual-gold/50 shadow-warm"
                  />
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-heading text-2xl font-bold text-spiritual-gold mb-2">
                    Pe. Eduardo Santana
                  </h3>
                  <h4 className="text-lg font-semibold text-muted-foreground mb-6">
                    Especialista em Espiritualidade Cristã
                  </h4>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Pe. Eduardo Santana é sacerdote católico com mais de 15 anos de experiência no acompanhamento espiritual e na formação de fiéis que desejam aprofundar sua relação com Deus.
                    </p>
                    
                    <p>
                      Desde o início de sua vocação, uniu sua paixão pela espiritualidade com o ensino, compartilhando seus conhecimentos com milhares de pessoas que desejavam crescer espiritualmente e encontrar paz interior.
                    </p>
                    
                    <p>
                      Com o tempo, Pe. Eduardo aperfeiçoou os métodos mais reconhecidos da tradição cristã de oração e contemplação, adaptando-os a um sistema prático, claro e fácil de seguir, mesmo para quem não tem experiência espiritual prévia.
                    </p>
                    
                    <p>
                      Seu propósito com este método digital é oferecer um caminho claro e sem complicações, para que você aprenda passo a passo, pratique com confiança e comece a experimentar uma transformação espiritual que refletirá em todas as áreas da sua vida.
                    </p>
                  </div>
                </div>

              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;