import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import avatarDrErnane from "@/assets/dr-ernane.jpg";
import avatarDrHeitor from "@/assets/dr-heitor-dourado.jpg";
import avatarSecCarla from "@/assets/secretaria-carla.jpg";
import avatarDrCalosFitas from "@/assets/dr-carlos-fitas.png";
import avatarDrRainier from "@/assets/dr-rainier.jpg";

const testimonials = [
  {
    avatar: avatarDrErnane,
    quote:
      "Estou gostando muito da experiência com o MedGuia. Além das inúmeras informações que o sistema nos traz (atendimentos, procedimentos realizados, gráficos mensais...), é simples de usar. Outra ferramenta que é bastante útil é transcrição, facilitando muito e agilizando o registro das consultas.",
    name: "Dr. Ernane",
    title: "Ortopedista",
  },
  {
    avatar: avatarDrHeitor,
    quote:
      "Já havia usado vários outros: doctoralia, amigo. Mas realmente o medguia tem uma solucao bem diferente do consultoio. Alem de prontuario ele te ajuda em todas as métricas do consultorio, conhecer seu público, te ajudar na recorrencia dos procedimentos. Isso ajuda muito na organizacao do consultorio e inclusive permite saber examente em que e como melhorar para faturar mais.",
    name: "Dr. Heitor Dourado",
    title: "Ortopedia e Traumatologia",
  },
  {
    avatar: avatarSecCarla,
    quote:
      "O MedGuia é de fácil acesso, com uma interface intuitiva que ajuda muito no dia a dia. É um sistema completo para agendamentos e prontuários, mas o grande diferencial é a gravação da consulta por IA. Essa ferramenta otimiza o tempo e enriquece a anamnese, registrando detalhes importantes que poderiam passar despercebidos. Recomendo fortemente!",
    name: "Carla",
    title: "Secretária Médica",
  },
  {
    avatar: avatarDrCalosFitas,
    quote:
      "O MedGuia é uma nova plataforma com inúmeras novidades. A principal delas é a transcrição da consulta por inteligência artificial, que dinamiza e personaliza o atendimento sem que eu precise ficar escrevendo. Além disso, a plataforma oferece ferramentas que viabilizam a vida financeira do consultório e o suporte é excepcional, tirando todas as dúvidas de imediato.",
    name: "Dr. Carlos Alberto Fitas",
    title: "Ortopedia e Traumatologia",
  },
  {
    avatar: avatarDrRainier,
    quote:
      "Tenho utilizado o MedGuia há aproximadamente um mes e tem auxiliado muito no consultorio e gestão da agenda. É muito completo e intuitivo. Ajuda tanto na parte pratica, do proprio atendimento, quanto na gestão financeira. Não pretendo mais trocá-lo. Excelente aquisição para o consultorio!",
    name: "Dr. Rainier",
    title: "Ortopedia e Traumatologia",
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
                      <img
                        src={testimonial.avatar}
                        alt={`Foto de ${testimonial.name}`}
                        className="flex-shrink-0 h-12 w-12 rounded-full object-center border-2 border-white/10"
                      />
                      
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