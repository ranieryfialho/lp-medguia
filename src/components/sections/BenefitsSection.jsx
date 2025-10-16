import { motion } from "framer-motion";
import { Users, TrendingUp, Brain, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

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

const BenefitCard = ({ title, description, icon, className }) => {
  return (
    <motion.div variants={itemVariants} className={cn("group relative", className)}>
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 blur-lg transition duration-300 group-hover:opacity-75" />

      <div className="relative h-full w-full rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-6 backdrop-blur-xl">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-[#a0a0a0]">{description}</p>
      </div>
    </motion.div>
  );
};


const BenefitsSection = () => {
  return (
    <section id="beneficios" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Resultados Reais para sua Rotina
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Menos burocracia, mais cuidado. Veja como o MedGuia otimiza seu tempo e
          aumenta seus resultados financeiros.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
      >

        <BenefitCard
          className="md:col-span-2"
          title="Mais Tempo para Atendimento"
          description="Automatize tarefas administrativas, reduza o tempo gasto com burocracia e dedique-se totalmente ao cuidado dos seus pacientes."
          icon={<HeartHandshake className="h-8 w-8 text-[#2575fc]" />}
        />

        <BenefitCard
          className="md:col-span-1"
          title="Aumento da Fidelização"
          description="Com follow-ups automáticos e um relacionamento proativo, seus pacientes se mantêm engajados e retornam com mais frequência."
          icon={<Users className="h-8 w-8 text-[#2575fc]" />}
        />

        <BenefitCard
          className="md:col-span-1"
          title="Crescimento da Receita"
          description="O CRM integrado identifica oportunidades de novos procedimentos e maximiza as conversões de pacientes particulares."
          icon={<TrendingUp className="h-8 w-8 text-[#2575fc]" />}
        />

        <BenefitCard
          className="md:col-span-2"
          title="Decisões Baseadas em Dados"
          description="Indicadores estratégicos revelam o real desempenho da sua clínica, permitindo decisões mais inteligentes e seguras."
          icon={<Brain className="h-8 w-8 text-[#2575fc]" />}
        />
      </motion.div>

    </section>
  );
};

export default BenefitsSection;