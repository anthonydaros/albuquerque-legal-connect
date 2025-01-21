import { Check, Shield, Calculator, FileText, Users, Scale, BookOpen } from "lucide-react";

export const ServicesDetail = () => {
  return (
    <section className="elegant-section bg-muted" id="services-detail">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Como Funcionam Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
              alt="Consultoria Jurídica" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Consultoria Jurídica Previdenciária Especializada
            </h3>
            <p className="content-text">
              A Albuquerque Gestão Jurídica é uma empresa especializada em consultoria jurídica previdenciária, 
              atuando de forma personalizada e estratégica para auxiliar seus clientes a compreender e 
              assegurar seus direitos no âmbito da previdência social.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Atendimento personalizado",
                "Equipe especializada",
                "Análise detalhada",
                "Soluções estratégicas"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-primary" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Shield className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-serif font-bold text-primary mb-2">Missão</h4>
            <p className="text-secondary">
              Promover segurança jurídica e tranquilidade para os clientes, assegurando o acesso aos seus 
              direitos previdenciários e contribuindo para uma sociedade mais justa e informada.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Scale className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-serif font-bold text-primary mb-2">Visão</h4>
            <p className="text-secondary">
              Ser reconhecida como referência em consultoria jurídica previdenciária no Brasil, 
              destacando-se pela excelência no atendimento e pela resolução eficaz dos casos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Users className="w-12 h-12 text-primary mb-4" />
            <h4 className="text-xl font-serif font-bold text-primary mb-2">Valores</h4>
            <ul className="text-secondary space-y-2">
              <li>• Ética e Transparência</li>
              <li>• Compromisso com o Cliente</li>
              <li>• Excelência Técnica</li>
              <li>• Agilidade e Eficiência</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};