import { motion } from "framer-motion";
import { Clock, Users, BarChart3, Link2, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: <Clock size={28} className="text-[#2575fc]" />,
    title: "Perda de tempo com tarefas administrativas",
    description: "Processos manuais e repetitivos que consomem horas preciosas do seu dia.",
  },
  {
    icon: <Users size={28} className="text-[#2575fc]" />,
    title: "Dificuldade em acompanhar pacientes",
    description: "A falta de follow-ups estruturados resulta em perda de engajamento e fidelização.",
  },
  {
    icon: <BarChart3 size={28} className="text-[#2575fc]" />,
    title: "Falta de visão estratégica do negócio",
    description: "Decisões baseadas em intuição, sem dados concretos para guiar o crescimento.",
  },
  {
    icon: <Link2 size={28} className="text-[#2575fc]" />,
    title: "Sistemas desconectados e complexos",
    description: "Múltiplas ferramentas que não se comunicam, gerando retrabalho e ineficiência.",
  },
  {
    icon: <TrendingDown size={28} className="text-[#2575fc]" />,
    title: "Baixo retorno de pacientes",
    description: "Pacientes não retornam por falta de um relacionamento proativo e contínuo.",
  },
];

const ProblemSolutionSection = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Os Desafios da Gestão Clínica Moderna
        </h2>
        <p className="mt-4 text-[#a0a0a0]">
          Você reconhece esses problemas na sua rotina?
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{problem.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{problem.title}</h3>
                <p className="mt-1 text-[#a0a0a0]">{problem.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group relative"
        >
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-0 blur-lg transition duration-300 group-hover:opacity-75" />

          <div className="relative h-full w-full rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 backdrop-blur-xl">
            <div className="h-60 w-full rounded-md border border-white/10 bg-white/5 flex items-center justify-center">
              <p className="text-xl font-bold text-white/50">Visual do Dashboard MedGuia</p>
            </div>
            <h3 className="mt-6 text-2xl font-bold">MedGuia: A Solução Integrada</h3>
            <p className="mt-4 text-[#a0a0a0]">
              O MedGuia foi desenvolvido especificamente para resolver esses desafios, permitindo que você foque no que realmente importa: o cuidado com seus pacientes. Ele centraliza a gestão clínica e o relacionamento comercial em uma única plataforma inteligente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;