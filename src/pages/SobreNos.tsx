import { Header } from "@/components/Header";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-12 text-center">Sobre Nós</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20"
                alt="Escritório"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 fade-in">
              <h2 className="text-3xl font-bold text-white">Nossa História</h2>
              <p className="text-gray-300">
                Fundado com a missão de assegurar direitos previdenciários com excelência, o escritório Albuquerque Gestão Jurídica tem anos de experiência ajudando clientes em São Paulo a resolver seus desafios legais com confiança e sucesso.
              </p>
              <p className="text-gray-300">
                Nossa equipe é formada por profissionais altamente qualificados e especializados em direito previdenciário, comprometidos em oferecer soluções personalizadas para cada cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white">Nossa Missão</h2>
              <p className="text-gray-300">
                Nosso compromisso é proporcionar atendimento jurídico de excelência na área previdenciária, garantindo que nossos clientes recebam orientação especializada e resultados efetivos.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Excelência no atendimento
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Compromisso com resultados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Ética e transparência
                </li>
              </ul>
            </div>
            <div className="fade-in order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Equipe"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNos;