import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Star, Gift } from "lucide-react";

const BackRedirect = () => {
  useEffect(() => {
    // Script para detectar saída da página
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        // Redireciona apenas uma vez
        if (!sessionStorage.getItem('redirected')) {
          sessionStorage.setItem('redirected', 'true');
          window.location.href = "https://pay.cakto.com.br/3fd4jcm";
        }
      }
    };

    const handleBeforeUnload = () => {
      if (!sessionStorage.getItem('redirected')) {
        sessionStorage.setItem('redirected', 'true');
        window.location.href = "https://pay.cakto.com.br/3fd4jcm";
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline impactante */}
          <div className="mb-8">
            <div className="inline-block bg-spiritual-gold text-black px-6 py-3 rounded-full font-bold text-lg mb-4 animate-pulse">
              🚨 OFERTA ESPECIAL ATIVADA! 🚨
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-spiritual-gold">ESPERE!</span>
              A cada 100 pessoas, apenas 1 é selecionada para esta
              <span className="block text-spiritual-gold">OFERTA ESPECIAL!</span>
            </h1>
            
            <h2 className="font-body text-xl md:text-2xl lg:text-3xl mb-8 text-red-400 font-bold">
              Você foi ESCOLHIDO(A) para receber o maior desconto já oferecido!
            </h2>
          </div>

          {/* Urgência */}
          <Card className="bg-red-600 border-red-400 mb-8 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-white animate-pulse" />
                <span className="font-bold text-white text-lg">ATENÇÃO: Esta oferta expira em:</span>
              </div>
              <div className="text-3xl font-bold text-yellow-300">05:00 MINUTOS</div>
              <p className="text-white mt-2">Não perca esta oportunidade única!</p>
            </CardContent>
          </Card>

          {/* Proposta de valor */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/10 backdrop-blur-sm border-spiritual-gold/30">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-spiritual-gold mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Transformação Imediata</h3>
                <p className="text-sm">Sinta a diferença já nas primeiras 24 horas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-spiritual-gold/30">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-spiritual-gold mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Método Exclusivo</h3>
                <p className="text-sm">Técnicas que apenas 1% das pessoas conhecem</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-spiritual-gold/30">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-spiritual-gold mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Bônus Exclusivos</h3>
                <p className="text-sm">Conteúdo que vale mais que o curso inteiro</p>
              </CardContent>
            </Card>
          </div>

          {/* Oferta especial */}
          <Card className="bg-gradient-spiritual border-spiritual-gold mb-8 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm font-bold text-black bg-spiritual-gold px-4 py-2 rounded-full inline-block mb-4">
                  ⚡ OFERTA RELÂMPAGO ⚡
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                  DESPERTAR DA FÉ - EDIÇÃO ESPECIAL
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-lg line-through text-gray-300 mb-2">
                    De: R$ 219,50
                  </div>
                  <div className="text-lg line-through text-red-300 mb-2">
                    Por: R$ 29,90
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-spiritual-gold mb-2">
                    APENAS R$ 19,90
                  </div>
                  <div className="text-red-400 font-bold text-lg">
                    💥 DESCONTO DE 91% 💥
                  </div>
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg mb-6">
                  <p className="text-yellow-300 font-bold text-lg mb-2">
                    🎯 ESTA É A ÚLTIMA CHANCE!
                  </p>
                  <p className="text-white">
                    Se você sair desta página, esta oferta especial será perdida para sempre. 
                    Milhares de pessoas já transformaram suas vidas. Não seja mais uma que deixou passar.
                  </p>
                </div>
              </div>
              
              <Button 
                variant="cta-large" 
                className="w-full text-xl py-6 animate-pulse hover:animate-none bg-spiritual-gold text-black hover:bg-spiritual-gold/90"
                onClick={() => window.open('https://pay.cakto.com.br/3fd4jcm', '_blank')}
              >
                🔥 SIM! QUERO ESTA OFERTA AGORA
              </Button>
              
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-200">
                  🔒 Compra 100% segura • Acesso imediato • Garantia total de 7 dias
                </p>
                <p className="text-xs text-red-300 mt-2 font-bold">
                  ⚠️ Oferta válida apenas para os próximos visitantes selecionados
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Prova social urgente */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
            <h4 className="font-bold text-lg mb-4 text-spiritual-gold">
              🔥 OUTRAS PESSOAS ESTÃO APROVEITANDO AGORA:
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-green-600/20 p-3 rounded">
                <p className="font-bold">Maria S. - há 2 min</p>
                <p>"Comprei agora! Não podia perder esta chance!"</p>
              </div>
              <div className="bg-green-600/20 p-3 rounded">
                <p className="font-bold">João P. - há 5 min</p>
                <p>"Incrível! Já baixei tudo. Valeu muito a pena!"</p>
              </div>
            </div>
          </div>

          {/* Última chamada */}
          <div className="text-center">
            <p className="text-red-400 font-bold text-lg mb-4">
              ⏰ NÃO DEIXE PARA DEPOIS!
            </p>
            <p className="text-white text-lg">
              Esta é uma oportunidade que aparece apenas uma vez na vida. 
              <br />
              <span className="text-spiritual-gold font-bold">Sua fé não pode esperar mais.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackRedirect;