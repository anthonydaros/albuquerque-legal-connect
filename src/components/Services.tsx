import { Shield, Calculator, FileText, Users, Scale, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Consultoria Jurídica Previdenciária",
    description: "Atendimento personalizado com profissionais experientes para solucionar problemas previdenciários.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
  },
  {
    icon: Calculator,
    title: "Planejamento Previdenciário",
    description: "Análise detalhada do histórico e estratégias para maximizar benefícios.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  },
  {
    icon: FileText,
    title: "Cálculos Previdenciários",
    description: "Cálculos precisos e identificação de possíveis erros no INSS.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490"
  },
  {
    icon: Users,
    title: "Regularização de Contribuições",
    description: "Assessoria completa para regularização de períodos em atraso.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    icon: Scale,
    title: "Ações Judiciais",
    description: "Representação legal especializada em disputas com o INSS.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
  },
  {
    icon: BookOpen,
    title: "Revisão de Benefícios",
    description: "Análise e revisão de benefícios já concedidos.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600">
            A Albuquerque Gestão Jurídica é especializada em consultoria jurídica previdenciária, 
            atuando de forma personalizada e estratégica para auxiliar seus clientes a compreender 
            e assegurar seus direitos no âmbito da previdência social.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};