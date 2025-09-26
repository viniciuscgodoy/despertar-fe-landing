import bookCover from "@/assets/book-cover-despertar-fe.jpg";

const SolutionIntro = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-spiritual-gold text-black px-6 py-3 rounded-full font-bold text-lg mb-6">
              ✨ A Solução Definitiva
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Despertar da Fé
              </h2>
              
              <h3 className="font-body text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Seu guia definitivo para dominar os 4 métodos mais poderosos de conexão espiritual desde o zero e com total confiança.
              </h3>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-spiritual-gold rounded-full"></div>
                  <span className="text-foreground font-semibold">Sem conhecimentos teológicos complexos</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-spiritual-gold rounded-full"></div>
                  <span className="text-foreground font-semibold">Resultados garantidos</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-spiritual-gold rounded-full"></div>
                  <span className="text-foreground font-semibold">Métodos passo a passo</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img 
                src={bookCover} 
                alt="Livro Digital Despertar da Fé" 
                className="w-full max-w-md rounded-lg shadow-spiritual"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionIntro;