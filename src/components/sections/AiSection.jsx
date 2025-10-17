import { motion } from "framer-motion";
import { Mic, FileText, Zap, Sparkles } from "lucide-react";

const aiBenefits = [
  {
    icon: <Mic className="h-6 w-6 text-[#2575fc]" />,
    title: "Foco Total no Paciente",
    description: "Converse naturalmente sem se preocupar em digitar. A IA captura tudo.",
  },
  {
    icon: <FileText className="h-6 w-6 text-[#2575fc]" />,
    title: "Registros Mais Ricos e Detalhados",
    description: "Detalhes e nuances da conversa que poderiam ser perdidos são registrados automaticamente.",
  },
  {
    icon: <Zap className="h-6 w-6 text-[#2575fc]" />,
    title: "Otimização do Tempo Pós-Consulta",
    description: "Reduza drasticamente o tempo gasto organizando anotações e preenchendo o prontuário.",
  },
];

const AiSection = () => {
  return (
    <section id="ia" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-50 blur-lg" />
        
        <div className="relative grid grid-cols-1 items-center gap-8 rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 backdrop-blur-xl md:grid-cols-2 md:gap-12">

          <div>
            <div className="mb-4 inline-block rounded-lg bg-white/10 p-3 border border-white/10">
              <Sparkles className="h-8 w-8 text-[#2575fc]" />
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Sua Consulta, Transcrita em Tempo Real com IA
            </h2>
            <p className="mt-4 text-[#a0a0a0]">
              Fale. Nós cuidamos do resto. Nossa inteligência artificial
              escuta, entende e transcreve sua consulta, permitindo que você
              mantenha 100% do foco no que realmente importa: seu paciente.
            </p>
            <ul className="mt-8 space-y-6">
              {aiBenefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-[#a0a0a0]">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex h-full min-h-[350px] flex-col rounded-lg border border-white/10 bg-black/20">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
              <p className="text-sm font-semibold text-white/80">Gravando e Transcrevendo...</p>
            </div>

            <div className="p-4 space-y-3 text-sm text-white/70">
              <p><span className="font-bold text-white/90">Médico:</span> "Bom dia, Sra. Silva. Como tem se sentido desde a nossa última conversa?"</p>
              <p><span className="font-bold text-white/90">Paciente:</span> "Olá, doutor. A dor no ombro melhorou bastante com a fisioterapia, mas ainda sinto um incômodo ao levantar o braço."</p>
              <p><span className="font-bold text-white/90">Médico:</span> "Entendo. Em uma escala de 0 a 10, qual seria a intensidade dessa dor hoje?"</p>
              <p><span className="font-bold text-white/90">Paciente:</span> "Hoje eu diria que está em um 3. Bem melhor do que antes, que era um 7."</p>
              <p><span className="font-bold text-white/90">Médico:</span> "Ótimo, é um bom progresso. Vamos reavaliar a amplitude do movimento então..."</p>
              <div className="h-4 w-5/6 rounded-full bg-white/10 animate-pulse pt-2" />
              <div className="h-4 w-full rounded-full bg-white/10 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AiSection;