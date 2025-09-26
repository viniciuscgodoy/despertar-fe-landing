import { Card, CardContent } from "@/components/ui/card";

const BonusesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Além disso, HOJE você leva estes BÔNUS…
            </h2>
            <h3 className="font-heading text-2xl font-bold text-spiritual-gold mb-8">
              TOTALMENTE GRÁTIS!
            </h3>
            <p className="text-lg text-muted-foreground">
              Porque não quero te dar apenas um Ebook, quero te dar todo um sistema completo de transformação espiritual. 
              Leve GRÁTIS estes 4 bônus avaliados em mais de R$ 400:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <Card className="border-spiritual-gold border-2 shadow-warm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-spiritual-gold text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                    🎥 GUIAS EM VÍDEO
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Bônus N° 1</h3>
                  <h4 className="text-lg font-semibold text-spiritual-gold mb-4">
                    📿 Rosário e Terço - Guia Completo
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Guia completo em vídeo de como rezar o rosário e terço corretamente. 
                  Aprenderá os mistérios, as orações corretas e como transformar essa prática em um momento de profunda conexão espiritual.
                </p>
                
                <div className="text-center border-t border-spiritual-gold/30 pt-4">
                  <div className="text-sm text-muted-foreground">Valor: R$ 97,00</div>
                  <div className="font-bold text-spiritual-gold">Solo por HOY: GRÁTIS</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold border-2 shadow-warm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-spiritual-gold text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                    🎥 GUIAS EM VÍDEO
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Bônus N° 2</h3>
                  <h4 className="text-lg font-semibold text-spiritual-gold mb-4">
                    🏆 Jejum Espiritual - Do Iniciante ao Avançado
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Curso completo sobre jejum espiritual. Descubra como fazer jejum de forma segura e espiritualmente poderosa, 
                  desde jejuns simples até práticas mais avançadas para breakthrough espiritual.
                </p>
                
                <div className="text-center border-t border-spiritual-gold/30 pt-4">
                  <div className="text-sm text-muted-foreground">Valor: R$ 127,00</div>
                  <div className="font-bold text-spiritual-gold">Solo por HOY: GRÁTIS</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold border-2 shadow-warm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-spiritual-gold text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                    📖 MATERIAL EXCLUSIVO
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Bônus N° 3</h3>
                  <h4 className="text-lg font-semibold text-spiritual-gold mb-4">
                    💎 100 Versículos para Memorizar
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Coleção exclusiva de 100 versículos organizados por tema para memorização. 
                  Inclui técnicas de memorização e plano de estudo para fortalecer sua mente com a Palavra de Deus.
                </p>
                
                <div className="text-center border-t border-spiritual-gold/30 pt-4">
                  <div className="text-sm text-muted-foreground">Valor: R$ 87,00</div>
                  <div className="font-bold text-spiritual-gold">Solo por HOY: GRÁTIS</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-spiritual-gold border-2 shadow-warm">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-spiritual-gold text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
                    🎯 FERRAMENTA PRÁTICA
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Bônus N° 4</h3>
                  <h4 className="text-lg font-semibold text-spiritual-gold mb-4">
                    🗓️ Plano de Leitura Bíblica Anual
                  </h4>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Plano estruturado para ler toda a Bíblia em um ano, com reflexões diárias, 
                  perguntas para meditação e sistema de acompanhamento para não perder o ritmo.
                </p>
                
                <div className="text-center border-t border-spiritual-gold/30 pt-4">
                  <div className="text-sm text-muted-foreground">Valor: R$ 97,00</div>
                  <div className="font-bold text-spiritual-gold">Solo por HOY: GRÁTIS</div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg border border-spiritual-gold/50">
            <h3 className="font-heading text-2xl font-bold text-spiritual-gold mb-4">
              📜 E além disso receberá:
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Certificado de conclusão personalizado com seu nome 7 dias após adquirir o programa.
            </p>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Valor: R$ 47,00</div>
              <div className="font-bold text-spiritual-gold">Solo por HOY: GRÁTIS</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BonusesSection;