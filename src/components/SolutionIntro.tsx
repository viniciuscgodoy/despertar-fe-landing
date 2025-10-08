import bookCover from "@/assets/book-cover-despertar-fe.jpg";

const SolutionIntro = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block bg-spiritual-gold text-spiritual-deep px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-sm md:text-lg mb-4 md:mb-6">
              ✨ Apresentando o Despertar da Fé
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-2">
                Um Guia Prático Para Reacender Sua Conexão com Deus
              </h2>
              
              <p className="font-body text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-2">
                Métodos simples, passo a passo, que qualquer pessoa pode aplicar — mesmo com apenas 10 minutos por dia.
              </p>

              <div className="space-y-3 md:space-y-4 text-sm sm:text-base md:text-lg">
                <div className="flex items-start gap-3 px-2">
                  <span className="text-spiritual-gold text-lg">✔️</span>
                  <span className="text-foreground">Reacenda sua fé e sinta a presença de Deus</span>
                </div>
                
                <div className="flex items-start gap-3 px-2">
                  <span className="text-spiritual-gold text-lg">✔️</span>
                  <span className="text-foreground">Encontre paz mesmo nos dias difíceis</span>
                </div>
                
                <div className="flex items-start gap-3 px-2">
                  <span className="text-spiritual-gold text-lg">✔️</span>
                  <span className="text-foreground">Tenha momentos reais de conexão e oração</span>
                </div>
                
                <div className="flex items-start gap-3 px-2">
                  <span className="text-spiritual-gold text-lg">✔️</span>
                  <span className="text-foreground">Transforme sua rotina espiritual em apenas 10 minutos</span>
                </div>
                
                <div className="flex items-start gap-3 px-2">
                  <span className="text-spiritual-gold text-lg">✔️</span>
                  <span className="text-foreground">Receba orientações práticas baseadas na Palavra</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2">
              <img 
                src={bookCover} 
                alt="Livro Digital Despertar da Fé" 
                className="w-full max-w-sm md:max-w-md rounded-lg shadow-spiritual"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;