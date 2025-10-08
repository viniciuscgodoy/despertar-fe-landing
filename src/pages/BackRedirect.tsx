import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Sparkles } from "lucide-react";

const BackRedirect = () => {
  const [countdown, setCountdown] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold text-sm md:text-base sticky top-0 z-50">
        🔥 OFERTA ESPECIAL VÁLIDA APENAS HOJE - {today} 🔥
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-8">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-red-700 mb-4">
              ⚠️ ESPERE!
              <span className="block text-spiritual-deep mt-2">
                Oferta Exclusiva Para Você
              </span>
            </h1>
          </div>

          <Card className="border-red-500 border-4 shadow-glow mb-8 bg-white">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
              <div className="text-5xl md:text-7xl font-bold text-red-600 mb-4">
                {formatTime(countdown)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-spiritual-gold border-3 shadow-2xl mb-8 bg-gradient-premium">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="space-y-2 mb-6">
                <div className="text-2xl font-bold text-muted-foreground line-through">
                  De R$ 674,90
                </div>
                <div className="text-xl font-bold text-muted-foreground line-through">
                  Por R$ 19,90
                </div>
              </div>

              <div className="bg-red-600 text-white p-6 rounded-xl mb-6">
                <p className="text-xl font-semibold mb-2">
                  APENAS HOJE você paga:
                </p>
                <div className="text-6xl md:text-7xl font-bold mb-2">
                  R$ 9,90
                </div>
                <p className="text-lg">
                  💥 Economize 98%! 💥
                </p>
              </div>

              <Button
                onClick={() => window.open('https://pay.cakto.com.br/3fd4jcm', '_blank')}
                className="w-full bg-gradient-cta text-white font-bold text-xl py-8 mb-4 shadow-glow"
              >
                🚀 QUERO POR APENAS R$ 9,90
              </Button>

              <p className="text-sm text-muted-foreground">
                🔒 Pagamento Seguro • ✅ Acesso Imediato • 💯 Garantia 7 Dias
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default BackRedirect;
