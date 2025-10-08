const DateBanner = () => {
  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-spiritual-gold text-spiritual-deep py-2 px-4 text-center font-bold text-sm md:text-base sticky top-0 z-50 shadow-lg">
      ⚡ DESCONTO VÁLIDO APENAS PARA HOJE - {today} ⚡
    </div>
  );
};

export default DateBanner;
