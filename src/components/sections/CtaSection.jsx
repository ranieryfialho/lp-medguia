// src/components/sections/CtaSection.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useIMask } from "react-imask";
import mascotForm from "@/assets/medguia-mascot-form.png";

const CtaSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const targetPhoneNumber = "5585999435040";

  const { ref: phoneRef, value: phoneValue } = useIMask({
    mask: '(00) 00000-0000',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `Olá! Tenho interesse no acesso gratuito ao MedGuia.\n\n*Nome:* ${name}\n*Email:* ${email}\n*Telefone:* ${phoneValue}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${targetPhoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="formulario" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative max-w-5xl mx-auto"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-75 blur-lg" />

        <div className="relative rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 md:p-12 backdrop-blur-xl">
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Pronto para Transformar Sua Clínica?
              </h2>
              <p className="mt-4 text-[#a0a0a0]">
                Preencha o formulário abaixo para garantir seu acesso gratuito.
                Nossa equipe entrará em contato para liberar sua conta.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 w-full space-y-6 text-left">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    type="text" id="name" placeholder="Seu nome"
                    className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]"
                    value={name} onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email Profissional</Label>
                  <Input
                    type="email" id="email" placeholder="Seu email"
                    className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    placeholder="Seu contato"
                    className="bg-white/5 border-white/10 focus-visible:ring-offset-[#6a11cb]"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#2575fc] text-base hover:bg-[#2575fc]/90 py-6">
                  Quero Meu Acesso Gratuito
                </Button>
              </form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <motion.img
                src={mascotForm}
                alt="MedGuia te ajuda no processo"
                className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-sm drop-shadow-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;