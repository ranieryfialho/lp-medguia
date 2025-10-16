import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const FreeAccessSection = () => {
  return (
    <section id="acesso-gratuito" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative max-w-4xl mx-auto"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-75 blur-lg" />

        <div className="relative flex flex-col items-center text-center rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 md:p-12 backdrop-blur-xl">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#2575fc]/50 bg-[#2575fc]/10">
            <Gift className="h-8 w-8 text-[#2575fc]" />
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Acesso Gratuito por Tempo Limitado
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[#a0a0a0]">
            Seja um dos primeiros a transformar sua clínica com o MedGuia.
            Estamos oferecendo acesso completo e gratuito a todos os recursos
            até o final de 2025. A cobrança iniciará apenas em 2026.
          </p>
          <Button size="lg" className="mt-8 bg-[#2575fc] text-base hover:bg-[#2575fc]/90 px-8 py-6">
            Solicitar Meu Acesso Gratuito
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default FreeAccessSection;