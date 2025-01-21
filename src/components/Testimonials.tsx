import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aposentada",
    content: "O escritório Albuquerque me ajudou a conquistar minha aposentadoria de forma tranquila e segura. Profissionais extremamente competentes!",
  },
  {
    name: "João Santos",
    role: "Empresário",
    content: "Excelente atendimento e profissionalismo. Resolveram minha situação previdenciária com muita eficiência.",
  },
  {
    name: "Ana Oliveira",
    role: "Professora",
    content: "Graças à orientação precisa da equipe, consegui regularizar minha situação junto ao INSS. Recomendo fortemente!",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent p-6 rounded-lg relative fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-10 h-10 text-secondary absolute -top-5 left-6" />
              <p className="text-gray-300 mb-4 mt-4">{testimonial.content}</p>
              <div className="mt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-secondary text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};