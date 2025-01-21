import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a consultoria previdenciária?",
    answer: "Nossa consultoria é personalizada e estratégica, focada em auxiliar clientes a compreender e assegurar seus direitos previdenciários. Realizamos uma análise detalhada do seu caso e apresentamos as melhores estratégias baseadas na legislação vigente."
  },
  {
    question: "Quando devo começar meu planejamento previdenciário?",
    answer: "O ideal é começar o quanto antes. Realizamos uma análise detalhada do seu histórico de contribuições ao INSS e identificamos o melhor momento para solicitar a aposentadoria, considerando as regras atuais e de transição."
  },
  {
    question: "Como regularizar contribuições em atraso?",
    answer: "Oferecemos assessoria completa para regularização de períodos não declarados ou em atraso, evitando problemas futuros com a previdência. Nossa equipe auxiliará em todo o processo."
  },
  {
    question: "Quais tipos de benefícios vocês podem ajudar a requerer?",
    answer: "Auxiliamos com diversos benefícios, incluindo aposentadoria, pensão por morte, auxílio-doença, entre outros. Também realizamos revisões de benefícios já concedidos para identificar possíveis correções."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};