import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Star, Gift } from "lucide-react";

const BackRedirect = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos = 300 segundos

  useEffect(() => {
    // Contagem regressiva
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Detecta tentativa de saída
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0) {
        if (!sessionStorage.getItem("redirected")) {
          sessionStorage.setItem("redirected", "true");
          window.location.href = "https://pay.cakto.com.br/3fd4jcm";
        }
      }
    };

    const handleBeforeUnload = () => {
      if (!sessionStorage.getItem("redirected")) {
        sessionStorage.setItem("redirected", "true");
        window.location.href = "https://pay.cakto.com.br/3fd4jcm";
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Formata o tempo como MM:SS
  const formatTime = (seconds: number) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline impactante */}
          <div className="mb-8">
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg mb-4 animate-pulse shadow-lg">
              🚨 OFERTA ESPECIAL ATIVADA! 🚨
            </div>

            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-yellow-300 drop-shadow-lg">ESPERE!</span>
              A cada 100 pessoas, apenas 1 é selecionada para esta
              <span className="block text-yellow-300 drop-shadow-lg">OFERTA ESPECIAL!</span>
            </h1>

            <h2 className="font-body text-xl md:text-2xl lg:text-3xl mb-8 text-red-300 font-bold drop-shadow-md">
              Você foi ESCOLHIDO(A) para receber o maior desconto já oferecido!
            </h2>
          </div>

          {/* Urgência */}
          <Card className="bg-red-700 border-red-500 border-2 mb-8 max-w-2xl mx-auto shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-6 h-6 text-white animate-pulse" />
                <span className="font-bold text-white text-lg">
                  ATENÇÃO: Esta oferta expira em:
                </span>
              </div>
              <div className="text-3xl font-bold text-yellow-200 drop-shadow-md">
                {formatTime(timeLeft)}
              </div>
              <p className="text-white mt-2 font-medium">Não perca esta oportunidade única!</p>
            </CardContent>
          </Card>

          {/* Proposta de valor */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white/20 backdrop-blur-sm border-yellow-400/50 border-2 shadow-xl">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-4 drop-shadow-md" />
                <h3 className="font-bold text-lg mb-2 text-white">Transformação Imediata</h3>
                <p className="text-gray-100 font-medium">Sinta a diferença já nas primeiras 24 horas</p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-yellow-400/50 border-2 shadow-xl">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-yellow-300 mx-auto mb-4 drop-shadow-md" />
                <h3 className="font-bold text-lg mb-2 text-white">Método Exclusivo</h3>
                <p className="text-gray-100 font-medium">Técnicas que apenas 1% das pessoas conhecem</p>
              </CardContent>
            </Card>

            <Card className="bg-white/20 backdrop-blur-sm border-yellow-400/50 border-2 shadow-xl">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-yellow-300 mx-auto mb-4 drop-shadow-md" />
                <h3 className="font-bold text-lg mb-2 text-white">Bônus Exclusivos</h3>
                <p className="text-gray-100 font-medium">Conteúdo que vale mais que o curso inteiro</p>
              </CardContent>
            </Card>
          </div>

          {/* Oferta especial */}
          <Card className="bg-gradient-to-br from-purple-800 to-purple-900 border-yellow-400 border-2 mb-8 max-w-3xl mx-auto shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm font-bold text-black bg-yellow-400 px-4 py-2 rounded-full inline-block mb-4 shadow-lg">
                  ⚡ OFERTA RELÂMPAGO ⚡
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">
                  DESPERTAR DA FÉ - EDIÇÃO ESPECIAL
                </h3>

                <div className="text-center mb-6">
                  <div className="text-lg line-through text-gray-200 mb-2 font-medium">
                    De: R$ 219,50
                  </div>
                  <div className="text-lg line-through text-red-200 mb-2 font-medium">
                    Por: R$ 29,90
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2 drop-shadow-lg">
                    APENAS R$ 19,90
                  </div>
                  <div className="text-red-300 font-bold text-lg">
                    💥 DESCONTO DE 91% 💥
                  </div>
                </div>

                <div className="bg-black/50 p-4 rounded-lg mb-6 border border-yellow-400/30">
                  <p className="text-yellow-200 font-bold text-lg mb-2">
                    🎯 ESTA É A ÚLTIMA CHANCE!
                  </p>
                  <p className="text-gray-100 font-medium">
                    Se você sair desta página, esta oferta especial será perdida para sempre. 
                    Milhares de pessoas já transformaram suas vidas. Não seja mais uma que deixou passar.
                  </p>
                </div>
              </div>

              {/* Botão Mantido */}
              <Button
                variant="cta-large"
                className="w-full text-xl py-6 animate-pulse hover:animate-none bg-yellow-400 text-black hover:bg-yellow-300 font-bold shadow-xl border-2 border-yellow-300"
                onClick={() => window.open("https://pay.cakto.com.br/3fd4jcm", "_blank")}
              >
                🔥 SIM! QUERO ESTA OFERTA AGORA
              </Button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-100 font-medium">
                  🔒 Compra 100% segura • Acesso imediato • Garantia total de 7 dias
                </p>
                <p className="text-xs text-red-200 mt-2 font-bold">
                  ⚠️ Oferta válida apenas para os próximos visitantes selecionados
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BackRedirect;