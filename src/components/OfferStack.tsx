import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, BookOpen, Headphones, CheckSquare, MessageCircle } from "lucide-react";
import productImage from "@/assets/product-mockup.jpg";

const OfferStack = () => {
  const scrollToPricing = () => {
    document.getElementById('preco')?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      icon: <Book className="w-8 h-8 text-spiritual-gold" />,
      title: "📘 Ebook \"Despertar da Fé\"",
      description: "Guia completo para restaurar sua conexão espiritual"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-spiritual-gold" />,
      title: "📓 Diário da Fé",
      description: "Para registrar suas orações e reflexões diárias"
    },
    {
      icon: <Headphones className="w-8 h-8 text-spiritual-gold" />,
      title: "🎧 Bônus 1: Áudio \"Oração da Manhã\"",
      description: "Meditação guiada para começar o dia com Deus"
    },
    {
      icon: <CheckSquare className="w-8 h-8 text-spiritual-gold" />,
      title: "📝 Bônus 2: Checklist da Fé",
      description: "Práticas diárias para fortalecer sua vida espiritual"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-spiritual-gold" />,
      title: "💬 Bônus 3: Grupo VIP no WhatsApp",
      description: "Comunidade de apoio e crescimento espiritual"
    }
  ];

  return (
    <section className="py-20 bg-background" id="oferta">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Você Vai Receber
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground">
            Tudo o que você precisa para restaurar sua fé e transformar sua vida espiritual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <img 
              src={productImage} 
              alt="Despertar da Fé - Produto Digital" 
              className="rounded-lg shadow-spiritual w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-4">
            {products.map((product, index) => (
              <Card key={index} className="border-spiritual-gold/30 hover:border-spiritual-gold transition-all duration-300 hover:shadow-warm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-spiritual-gold/10 rounded-full">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-base sm:text-lg text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-muted-foreground">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="pt-6">
              <Button 
                variant="cta-large" 
                onClick={scrollToPricing}
                className="w-full"
              >
                🔥 Quero Restaurar Minha Fé Hoje
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferStack;