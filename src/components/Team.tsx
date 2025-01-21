import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Ricardo Albuquerque",
    role: "Sócio Fundador",
    description: "Especialista em Direito Previdenciário com mais de 15 anos de experiência.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  },
  {
    name: "Dra. Carolina Santos",
    role: "Advogada Sênior",
    description: "Especialista em Benefícios Previdenciários e Aposentadorias.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Dr. André Oliveira",
    role: "Consultor Jurídico",
    description: "Especialista em Cálculos Previdenciários e Revisões.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296"
  }
];

export const Team = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-accent hover:transform hover:-translate-y-2 transition-all duration-300 fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-secondary mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};