import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "📖 O que é o 'Despertar da Fé'?",
      answer: "É um guia digital completo com métodos práticos de oração e conexão espiritual, exercícios, reflexões bíblicas e vídeos para você reacender sua fé e sentir a presença de Deus novamente."
    },
    {
      question: "⏰ Preciso ter muito tempo para aplicar?",
      answer: "Não! Apenas 10 minutos por dia são suficientes para transformar sua rotina espiritual e começar a sentir resultados reais."
    },
    {
      question: "🙏 Preciso ter conhecimento teológico?",
      answer: "Absolutamente não! O método foi criado para ser simples e acessível para qualquer pessoa, independente do nível de conhecimento religioso."
    },
    {
      question: "💳 Como recebo o material após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com acesso instantâneo a todo o conteúdo digital. Pode acessar de qualquer dispositivo!"
    },
    {
      question: "🔄 Tem garantia mesmo?",
      answer: "Sim! Garantia incondicional de 7 dias. Se você sentir que o conteúdo não te aproximou de Deus, devolvemos 100% do seu dinheiro, sem perguntas."
    },
    {
      question: "✝️ Funciona para qualquer religião cristã?",
      answer: "Sim! Os métodos são baseados em princípios cristãos universais e funcionam para católicos, evangélicos e qualquer pessoa que busca uma conexão mais profunda com Deus."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-muted px-6 py-3 rounded-full font-bold text-lg mb-6">
              ❓ DÚVIDAS RESOLVIDAS ❓
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              PERGUNTAS FREQUENTES
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Estas são as perguntas mais comuns que recebemos. Se tiver alguma dúvida adicional, estamos aqui para ajudar!
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-spiritual-gold/30">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/30 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-spiritual-gold flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-spiritual-gold/10 border-spiritual-gold border-2">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Não se preocupe! Aproveite a garantia de 7 dias e teste o conteúdo sem risco.
              </p>
              
              <button
                onClick={() => window.open("https://pay.cakto.com.br/3fd4jcm", "_blank")}
                className="bg-spiritual-gold text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-spiritual-gold/90 transition-colors"
              >
                🚀 QUERO COMEÇAR AGORA - R$ 19,90
              </button>
              
              <div className="mt-4 text-sm text-muted-foreground space-y-1">
                <div>✅ Garantia 7 dias • 🔒 Pagamento Seguro • ⚡ Acesso Imediato</div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default FAQ;