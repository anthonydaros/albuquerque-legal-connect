import { Shield, Calculator, FileText, Users, Scale, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Consultoria Jurídica",
    description: "Orientação especializada em direito previdenciário",
  },
  {
    icon: Calculator,
    title: "Cálculos e Revisões",
    description: "Análise detalhada de benefícios e contribuições",
  },
  {
    icon: FileText,
    title: "Requerimentos INSS",
    description: "Auxílio completo em processos administrativos",
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
            <div key={index} className="service-card">
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