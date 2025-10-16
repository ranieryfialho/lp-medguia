import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CtaSection = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative max-w-2xl mx-auto"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-75 blur-lg" />

        <div className="relative flex flex-col items-center text-center rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 md:p-12 backdrop-blur-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pronto para Transformar Sua Clínica?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[#a0a0a0]">
            Preencha o formulário abaixo para garantir seu acesso gratuito.
            Nossa equipe entrará em contato para liberar sua conta.
          </p>

          <form className="mt-8 w-full max-w-md space-y-6 text-left">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="name">Nome Completo</Label>
              <Input type="text" id="name" placeholder="Seu nome" className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email Profissional</Label>
              <Input type="email" id="email" placeholder="nome@suaclinica.com" className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input type="tel" id="phone" placeholder="(99) 99999-9999" className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]" />
            </div>
            <Button size="lg" className="w-full bg-[#2575fc] text-base hover:bg-[#2575fc]/90 py-6">
              Quero Meu Acesso Gratuito
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;