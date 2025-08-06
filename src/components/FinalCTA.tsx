import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Heart, Sparkles } from "lucide-react";
import handsImage from "@/assets/hands-prayer-golden.jpg";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Cada dia que passa sem fortalecer sua fé, 
              <span className="text-spiritual-gold block">
                mais distante você fica de viver a presença de Deus.
              </span>
            </h2>
            
            <Card className="bg-white/10 backdrop-blur-sm border-spiritual-gold/30 mb-8">
              <CardContent className="p-6">
                <p className="font-body text-xl leading-relaxed">
                  Comece hoje e sinta novamente o amor, a paz e a esperança 
                  que Ele tem para você.
                </p>
                
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-6 h-6 text-spiritual-gold" />
                    <span className="font-body">Paz interior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-spiritual-gold" />
                    <span className="font-body">Esperança renovada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-spiritual-gold" />
                    <span className="font-body">Transformação imediata</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <Button 
                variant="cta-large" 
                className="w-full text-xl py-6 animate-pulse hover:animate-none"
                onClick={() => window.open('#', '_blank')}
              >
                ✨ Sim, Quero Começar Agora
              </Button>
              
              <p className="font-body text-center text-gray-200 text-sm">
                🔒 Compra segura e protegida • Acesso imediato • Garantia de 7 dias
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={handsImage} 
              alt="Mãos unidas em oração" 
              className="rounded-lg shadow-spiritual w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-spiritual opacity-30 rounded-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-spiritual"></div>
    </section>
  );
};

export default FinalCTA;