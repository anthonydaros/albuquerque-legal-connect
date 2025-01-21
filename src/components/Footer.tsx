import { Link } from "react-router-dom";
import { Scale, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="w-8 h-8" />
              <span className="text-xl font-bold">Albuquerque</span>
            </div>
            <p className="text-sm text-gray-300">
              Especialistas em direito previdenciário, comprometidos com a excelência e resultados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre-nos" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Consultoria Previdenciária</li>
              <li className="text-gray-300">Planejamento Previdenciário</li>
              <li className="text-gray-300">Cálculos Previdenciários</li>
              <li className="text-gray-300">Revisão de Benefícios</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Av. Paulista, 1765, São Paulo</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>(11) 3456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>contato@albuquerque.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Albuquerque Gestão Jurídica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};