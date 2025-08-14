import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Star, Gift } from "lucide-react";

const BackRedirect = () => {
  const handlePurchase = () => {
    window.open("https://pay.cakto.com.br/3fd4jcm", "_blank");
  };

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
    <div className="min-h-screen bg-black text-white">
      {/* Header de Alerta */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-white text-center font-semibold text-lg md:text-xl">
            CUIDADO! Não feche esta página ainda...
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline Principal */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-yellow-400">OK! ENTENDI. VOCÊ PENSOU QUE </span>
            <span className="text-red-500">R$29,90 </span>
            <span className="text-yellow-400">ESTAVA UM POUCO CARO DEMAIS, CERTO?</span>
          </h1>
        </div>

        {/* Texto de Persuasão */}
        <div className="text-center space-y-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          <p className="text-white font-semibold">
            Bem, com a sua permissão, eu gostaria de te oferecer algo de ainda mais valor agora, 
            porque eu realmente quero que você alcance a transformação espiritual que você merece!
          </p>

          <p className="text-white">
            É por isso que eu quero fazer desta{" "}
            <span className="text-yellow-400 font-bold">a decisão mais fácil que você já tomou</span>
            ... a ponto de você se sentir idiota em deixar passar!
          </p>

          <div className="text-white space-y-4">
            <p>
              Eu não quero que o dinheiro seja um problema quando se trata de você conquistar 
              sua conexão espiritual...
            </p>
            <p className="font-bold">
              Por isso, a cada 50 pessoas que chegam na nossa página, 1 é selecionada para 
              receber uma oferta especial!
            </p>
            <p>E parece que desta vez foi você!</p>
          </div>

          <p className="text-white">
            Por esse motivo, agora você terá a chance de adquirir o Kit Transformação Espiritual 
            com um{" "}
            <span className="text-yellow-400 font-bold">desconto de mais R$10,00!</span>
          </p>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg my-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Por que estou fazendo isto?
            </h3>
            <p className="text-white text-lg">
              Porque eu não quero que algo como o preço seja a razão pela qual você deixe de 
              aproveitar a oportunidade da sua vida de ter uma transformação espiritual completa 
              e conquiste a paz interior que tanto busca.
            </p>
          </div>

          <div className="bg-yellow-400 text-black p-4 rounded-lg font-bold text-xl md:text-2xl">
            Não perca essa oportunidade, somente nessa página você terá acesso a esse DESCONTO!
          </div>
        </div>

        {/* Preço e CTA */}
        <div className="text-center mt-12">
          <div className="mb-6">
            <div className="text-gray-400 text-xl line-through mb-2">De: R$29,90</div>
            <div className="text-red-500 text-4xl md:text-6xl font-bold mb-4">
              POR APENAS R$19,90
            </div>
            <div className="text-green-400 text-lg font-semibold">
              ✅ Pagamento único - Sem mensalidades
            </div>
          </div>

          <button
            onClick={handlePurchase}
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl md:text-2xl px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8"
          >
            QUERO APROVEITAR O DESCONTO E TRANSFORMAR MINHA VIDA!
          </button>

          {/* Urgência */}
          <div className="bg-red-600 text-white p-4 rounded-lg">
            <p className="font-bold text-lg">
              ⚠️ ATENÇÃO: Esta oferta é válida apenas nesta página e pode sair do ar a qualquer momento!
            </p>
          </div>

          {/* Contador de Urgência */}
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg">
            <p className="text-yellow-400 text-lg font-bold mb-2">
              🔥 OFERTA LIMITADA - Restam apenas algumas vagas!
            </p>
            <div className="text-white text-sm">
              Esta página será removida em breve. Não perca esta oportunidade única!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackRedirect;