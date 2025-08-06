import { Card, CardContent } from "@/components/ui/card";
import bibleImage from "@/assets/bible-golden-light.jpg";

const QuizConnection = () => {
  console.log("QuizConnection rendering...");
  
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Pelas suas respostas no quiz, percebemos que sua vida espiritual 
              pode estar distante do que você deseja...
            </h2>
            
            <Card className="border-spiritual-gold border-2 shadow-warm">
              <CardContent className="p-8">
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  <span className="text-spiritual-gold font-semibold">Mas existe um método simples</span> para 
                  reacender sua fé e sentir novamente a presença viva de Deus todos os dias.
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed mt-4">
                  Você não precisa se sentir perdido ou distante do Criador. 
                  Há esperança e um caminho claro para restaurar sua conexão espiritual.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src={bibleImage} 
              alt="Bíblia aberta com luz dourada" 
              className="rounded-lg shadow-spiritual w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-spiritual opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizConnection;