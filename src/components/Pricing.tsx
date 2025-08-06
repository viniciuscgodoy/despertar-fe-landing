import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Gift } from "lucide-react";

const Pricing = () => {
  const valueItems = [
    { item: "Ebook \"Despertar da Fé\"", price: "R$ 79,90" },
    { item: "Diário da Fé", price: "R$ 39,90" },
    { item: "Áudio \"Oração da Manhã\"", price: "R$ 29,90" },
    { item: "Checklist da Fé", price: "R$ 19,90" },
    { item: "Grupo VIP", price: "R$ 49,90" }
  ];

  const totalValue = "R$ 219,50";
  const finalPrice = "R$ 39,90";

  return (
    <section className="py-20 bg-background" id="preco">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Oferta Especial por Tempo Limitado
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Tudo o que você precisa para restaurar sua fé
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Value Stack */}
            <Card className="border-spiritual-gold/30">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-center text-foreground">
                  Valor Individual dos Produtos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {valueItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-spiritual-gold/20">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-spiritual-gold" />
                      <span className="font-body text-foreground">{item.item}</span>
                    </div>
                    <span className="font-body font-semibold text-muted-foreground line-through">
                      {item.price}
                    </span>
                  </div>
                ))}
                
                <div className="pt-4 border-t-2 border-spiritual-gold">
                  <div className="flex justify-between items-center">
                    <span className="font-body font-bold text-lg text-foreground">Total:</span>
                    <span className="font-body font-bold text-xl text-muted-foreground line-through">
                      {totalValue}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <Card className="border-spiritual-gold border-2 shadow-spiritual relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-cta text-white px-4 py-2 text-sm font-bold">
                <Gift className="w-4 h-4 inline mr-1" />
                OFERTA ESPECIAL
              </div>
              
              <CardHeader className="text-center pt-12">
                <CardTitle className="font-heading text-3xl text-foreground mb-4">
                  Sua Transformação Espiritual
                </CardTitle>
                <div className="space-y-2">
                  <p className="font-body text-muted-foreground line-through text-xl">
                    De {totalValue}
                  </p>
                  <p className="font-heading text-5xl font-bold text-spiritual-gold">
                    {finalPrice}
                  </p>
                  <p className="font-body text-lg text-foreground">
                    à vista ou em até 4x no cartão
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="font-body text-lg text-foreground mb-4">
                    <span className="font-bold">Mais de 80% de desconto!</span><br />
                    Apenas hoje por tempo limitado
                  </p>
                </div>
                
                <Button 
                  variant="cta-large" 
                  className="w-full text-xl py-6"
                  onClick={() => window.open('#', '_blank')}
                >
                  🔥 Quero Restaurar Minha Fé Hoje
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Acesso imediato após a compra</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;