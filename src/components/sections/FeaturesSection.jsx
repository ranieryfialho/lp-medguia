import { motion } from "framer-motion";
import { CalendarClock, FileText, Users, DollarSign } from "lucide-react";

import dashboardImage from "@/assets/dashboard-medguia.png";
import scrumboardImage from "@/assets/scrumboard-medguia.png"; 

const mainFeatures = [
  {
    image: dashboardImage,
    title: "Dashboard Estratégico: Seus Dados, Descomplicados",
    description:
      "Visualize os indicadores mais importantes da sua clínica em tempo real. Acompanhe o desempenho financeiro, perfil de pacientes e procedimentos mais rentáveis com gráficos claros e intuitivos. Tome decisões baseadas em fatos, não em suposições, sem precisar de planilhas complexas.",
  },
  {
    image: scrumboardImage,
    title: "Scrumboard de Follow-up: Nunca Perca um Paciente de Vista",
    description:
      "Um quadro inteligente que organiza seus pacientes por status e avisa automaticamente o momento ideal para o contato. Aumente a taxa de retorno e a fidelização garantindo a continuidade do cuidado de forma proativa e organizada.",
  },
];

const otherFeatures = [
  {
    icon: <CalendarClock className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Agendamento Inteligente",
    description: "Organize sua agenda com lembretes automáticos para reduzir faltas.",
  },
  {
    icon: <FileText className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Prontuário Eletrônico Completo",
    description: "Registro seguro com busca rápida por palavras-chave.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#a0a0a0]" />,
    title: "CRM de Vendas Integrado",
    description: "Acompanhe oportunidades e controle o funil de conversão.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Personalização Total",
    description: "Adapte a plataforma 100% à realidade da sua clínica.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Recursos que Transformam Sua Rotina
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          O MedGuia centraliza atendimento, comunicação e resultados em uma única
          plataforma inteligente.
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {mainFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-30 blur-lg" />
            <div className="relative grid grid-cols-1 items-center gap-8 rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 backdrop-blur-xl md:grid-cols-2">

              <div className="rounded-md overflow-hidden border border-white/10">
                <img
                  src={feature.image}
                  alt={`Imagem da funcionalidade: ${feature.title}`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className={index % 2 !== 0 ? "md:order-first" : ""}>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="mt-4 text-[#a0a0a0]">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {otherFeatures.map((feature) => (
          <div key={feature.title} className="rounded-lg border border-white/10 bg-white/5 p-6 text-center">
            <div className="inline-block rounded-lg bg-white/10 p-3">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
            <p className="mt-2 text-sm text-[#a0a0a0]">{feature.description}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;