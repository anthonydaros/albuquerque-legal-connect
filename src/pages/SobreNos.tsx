import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SobreNos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center fade-in">
            Sobre Nós
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20">
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1593115057322-e94b77572f20"
                alt="Escritório"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 w-full"
              />
            </div>
            <div className="space-y-6 fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Nossa História</h2>
              <p className="text-gray-600 leading-relaxed">
                Fundado com a missão de assegurar direitos previdenciários com excelência, 
                o escritório Albuquerque Gestão Jurídica tem anos de experiência ajudando 
                clientes em São Paulo a resolver seus desafios legais com confiança e sucesso.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe é formada por profissionais altamente qualificados e 
                especializados em direito previdenciário, comprometidos em oferecer 
                soluções personalizadas para cada cliente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 fade-in order-2 lg:order-1" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Nossa Missão</h2>
              <p className="text-gray-600 leading-relaxed">
                Nosso compromisso é proporcionar atendimento jurídico de excelência 
                na área previdenciária, garantindo que nossos clientes recebam orientação 
                especializada e resultados efetivos.
              </p>
              <ul className="space-y-4 text-gray-600">
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
            <div className="fade-in order-1 lg:order-2" style={{ animationDelay: '0.8s' }}>
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Equipe"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNos;