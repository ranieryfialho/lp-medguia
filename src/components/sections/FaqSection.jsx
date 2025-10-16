import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O acesso é realmente gratuito?",
    answer:
      "Sim! Para celebrar nosso lançamento, estamos oferecendo acesso completo e gratuito a todos os recursos do plano Profissional até o final de 2025. Nenhuma cobrança será feita antes de 2026 e não é necessário cartão de crédito para começar.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não. O MedGuia é 100% online e acessível diretamente pelo seu navegador em qualquer dispositivo: notebook, tablet ou celular.",
  },
  {
    question: "Meus dados e dos meus pacientes estão seguros?",
    answer:
      "Absolutamente. A segurança é nossa prioridade máxima. Todos os dados são criptografados e armazenados com segurança, seguindo as normas de proteção de informações médicas, como a LGPD.",
  },
  {
    question: "O MedGuia funciona para a minha especialidade?",
    answer:
      "Sim. A plataforma foi projetada para ser totalmente personalizável. Você pode configurar seus próprios serviços, procedimentos, horários e locais de atendimento, adaptando o MedGuia perfeitamente à realidade da sua clínica, independentemente da especialidade.",
  },
  {
    question: "O que torna o CRM do MedGuia diferente?",
    answer:
      "Nossa principal diferença é a integração verdadeira. O CRM não é um sistema separado, ele funciona em conjunto com o prontuário eletrônico. Isso permite automações inteligentes, como lembretes de follow-up baseados no último atendimento, e fornece uma visão completa do paciente, tanto clínica quanto comercial.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Ainda tem dúvidas? Aqui estão algumas das perguntas mais comuns que
          recebemos.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-white/10 bg-[#1a0a2e]/60 backdrop-blur-xl mb-4 px-6"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#a0a0a0]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default FaqSection;