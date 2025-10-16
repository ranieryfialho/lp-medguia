import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "O MedGuia transformou minha rotina. A integração do prontuário com o CRM de vendas é algo que eu não encontrei em nenhuma outra plataforma. Finalmente tenho controle total do meu funil de pacientes.",
    name: "Dr. Ricardo Almeida",
    title: "Ortopedista - Clínica Movimenta",
  },
  {
    quote:
      "Eu perdia horas com tarefas administrativas. O MedGuia automatizou meus agendamentos e, o mais importante, os follow-ups. Minha taxa de retorno de pacientes aumentou 30% em 6 meses.",
    name: "Dra. Juliana Vasconcelos",
    title: "Dermatologista - Pele Clinic",
  },
  {
    quote:
      "Como gestor, o dashboard estratégico é minha ferramenta favorita. Consigo ver em tempo real o desempenho da clínica, quais procedimentos são mais rentáveis e onde precisamos melhorar. Essencial!",
    name: "Marcos Oliveira",
    title: "Gestor - Centro Médico Integrado",
  },
  {
    quote:
      "A personalização é fantástica. Conseguimos adaptar a plataforma inteira para o nosso fluxo de trabalho, desde os horários de atendimento em diferentes unidades até os nossos serviços específicos. Recomendo.",
    name: "Dra. Beatriz Costa",
    title: "Cirurgiã Plástica",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Quem Usa, Confia e Recomenda
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Veja o que médicos e gestores de clínicas estão dizendo sobre o
          MedGuia.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (

              <CarouselItem
                key={index}
                className="pl-4 basis-5/6 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full">
                  <div className="flex h-full w-full flex-col justify-between rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-6 backdrop-blur-xl text-center md:text-left">
                    <blockquote className="text-lg text-white">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:items-center">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] border-2 border-white/10" />
                      
                      <div className="flex flex-col items-center md:items-start">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-[#a0a0a0]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

            ))}
          </CarouselContent>
          
          <CarouselPrevious 
            className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" 
          />
          <CarouselNext 
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white" 
          />
        </Carousel>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;