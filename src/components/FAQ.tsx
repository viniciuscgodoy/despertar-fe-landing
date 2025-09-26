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
      question: "Preciso ter experiência prévia em vida espiritual para usar este método?",
      answer: "Não! O método foi desenvolvido especialmente para pessoas que estão começando ou que querem aprofundar sua vida espiritual. Todas as técnicas são explicadas passo a passo, desde o nível mais básico."
    },
    {
      question: "Quanto tempo tenho acesso ao conteúdo?",
      answer: "Você tem acesso vitalício ao material. Uma vez adquirido, pode consultar quantas vezes quiser, no seu ritmo e quando desejar."
    },
    {
      question: "O que inclui exatamente a compra?",
      answer: "Você recebe o livro digital completo 'Despertar da Fé', todos os vídeos explicativos dos 4 métodos, os 4 bônus (Rosário e Terço, Jejum Espiritual, 100 Versículos, Plano de Leitura) e o certificado de conclusão."
    },
    {
      question: "Como receberei o material após comprar?",
      answer: "Imediatamente após a confirmação do pagamento, você receberá um email com todos os links de acesso. Pode baixar e usar em qualquer dispositivo: celular, tablet ou computador."
    },
    {
      question: "Posso acessar de qualquer país?",
      answer: "Sim! O material é digital e pode ser acessado de qualquer lugar do mundo. O pagamento é processado automaticamente na moeda do seu país."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro sem fazer perguntas."
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