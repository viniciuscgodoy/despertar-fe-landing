import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import mariaImg from "@/assets/testimonial-maria.jpg";
import joaoImg from "@/assets/testimonial-joao.jpg";
import anaImg from "@/assets/testimonial-ana.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria S.",
      age: "58 anos",
      text: "Me senti mais próxima de Deus e recuperei minha paz interior em apenas alguns dias.",
      rating: 5,
      image: mariaImg
    },
    {
      name: "João P.",
      age: "62 anos", 
      text: "Eu estava perdido espiritualmente, mas encontrei um novo propósito.",
      rating: 5,
      image: joaoImg
    },
    {
      name: "Ana L.",
      age: "49 anos",
      text: "Hoje oro com mais confiança e sinto Deus agindo na minha vida.",
      rating: 5,
      image: anaImg
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Veja o que nossos alunos estão dizendo
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Histórias reais de transformação espiritual
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-spiritual-gold/30 hover:border-spiritual-gold transition-all duration-300 hover:shadow-spiritual transform hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Foto de ${testimonial.name}`}
                    className="w-24 h-24 rounded-full object-cover border-4 border-spiritual-gold/30"
                  />
                </div>
                
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-spiritual-gold text-spiritual-gold" />
                  ))}
                </div>
                
                <blockquote className="font-body text-lg text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-spiritual-gold/20 pt-4">
                  <p className="font-body font-semibold text-spiritual-brown">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.age}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;