import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative container mx-auto flex h-[calc(100vh-80px)] min-h-[600px] flex-col items-center justify-center px-4 md:px-6">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [10, 5],
          [13, 3],
        ]}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]",
          "absolute inset-0 h-full w-full skew-y-12"
        )}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#1a0a2e] via-[#1a0a2e]/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-20 blur-3xl" />

      <div className="relative z-20 max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl"
        >
          A Gestão Inteligente que{" "}
          <span className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">
            Transforma
          </span>{" "}
          sua Clínica Médica
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-lg text-[#a0a0a0] lg:text-xl"
        >
          A plataforma completa que une prontuário eletrônico e CRM de vendas
          para revolucionar a gestão de clínicas e consultórios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#formulario">
            <Button
              size="lg"
              className="w-full bg-[#2575fc] text-base hover:bg-[#2575fc]/90 sm:w-auto"
            >
              Solicitar Demonstração Gratuita
            </Button>
          </a>
          <a href="#">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-transparent text-base hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Fale Conosco
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
