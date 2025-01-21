import { Shield, Calculator, FileText, Users, Scale, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Consultoria Jurídica",
    description: "Orientação especializada em direito previdenciário",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    icon: Calculator,
    title: "Cálculos e Revisões",
    description: "Análise detalhada de benefícios e contribuições",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    icon: FileText,
    title: "Requerimentos INSS",
    description: "Auxílio completo em processos administrativos",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    icon: Users,
    title: "Planejamento Previdenciário",
    description: "Estratégias para aposentadoria e benefícios",
  },
  {
    icon: Scale,
    title: "Processos Judiciais",
    description: "Representação legal especializada",
  },
  {
    icon: BookOpen,
    title: "Regularização de INSS",
    description: "Normalização de situações irregulares",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card relative overflow-hidden group"
              style={{ 
                backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.9), rgba(26, 31, 44, 0.95)), url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
