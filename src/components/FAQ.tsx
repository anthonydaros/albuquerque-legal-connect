import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a consultoria previdenciária?",
    answer: "Nossa consultoria previdenciária oferece atendimento personalizado com profissionais experientes que analisam sua situação específica, identificam oportunidades e desenvolvem estratégias para maximizar seus benefícios previdenciários."
  },
  {
    question: "Quanto tempo leva para obter um benefício do INSS?",
    answer: "O prazo pode variar dependendo do tipo de benefício e da complexidade do caso. Normalmente, o INSS tem um prazo legal de 45 dias para analisar os requerimentos, mas nosso trabalho visa agilizar esse processo ao máximo."
  },
  {
    question: "Como posso agendar uma consulta?",
    answer: "Você pode agendar uma consulta através do nosso formulário de contato, por telefone ou WhatsApp. Nossa equipe retornará o contato em até 24 horas úteis para confirmar seu agendamento."
  },
  {
    question: "Vocês atendem em outras cidades?",
    answer: "Sim, além do nosso escritório principal na Av. Paulista em São Paulo, realizamos atendimento remoto para todo o Brasil através de videoconferência."
  },
  {
    question: "Quais documentos preciso levar na primeira consulta?",
    answer: "Recomendamos trazer documentos pessoais (RG, CPF), carteira de trabalho, extratos do INSS e quaisquer documentos relacionados à sua situação previdenciária."
  }
];

export const FAQ = () => {
  return (
    <section className="elegant-section" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item">
                <AccordionTrigger className="text-lg font-serif text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="content-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};