import { motion } from "framer-motion";
import { CalendarClock, FileText, LayoutDashboard, Target, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: <CalendarClock className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Agendamento Inteligente",
    description: "Sistema rápido e intuitivo com bloqueio de horários e lembretes automáticos para reduzir faltas.",
  },
  {
    icon: <FileText className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Prontuário Eletrônico Completo",
    description: "Registro seguro de consultas, exames e prescrições com textos padrão e busca por palavras-chave.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Dashboard Estratégico",
    description: "Gráficos e indicadores de performance em tempo real para decisões baseadas em dados concretos.",
  },
  {
    icon: <Target className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Scrumboard para Follow-ups",
    description: "Cards inteligentes que lembram a equipe sobre retornos e momentos ideais para contato com pacientes.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#a0a0a0]" />,
    title: "CRM de Vendas Integrado",
    description: "Acompanhe oportunidades, histórico de interações e controle todo o funil de conversão de pacientes.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-[#a0a0a0]" />,
    title: "Personalização Total",
    description: "Configure locais, horários, serviços e adapte a plataforma 100% à realidade da sua clínica.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants} className="group relative">
            
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 blur-lg transition duration-300 group-hover:opacity-75" />

            <div className="relative h-full w-full rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-6 backdrop-blur-xl">

              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-[#a0a0a0]">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesSection;