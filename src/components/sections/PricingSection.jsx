// src/components/sections/PricingSection.jsx

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Dados dos planos
const plans = [
  {
    name: "Essencial",
    price: "R$ 199",
    billing: "/mês",
    description: "Para médicos solo e consultórios em início de operação.",
    features: [
      "Prontuário Eletrônico",
      "Agendamento Inteligente",
      "Receitas e Atestados",
      "Suporte Básico",
    ],
    isRecommended: false,
  },
  {
    name: "Profissional",
    price: "R$ 349",
    billing: "/mês",
    description: "O mais popular. Para clínicas que buscam crescimento.",
    features: [
      "Tudo do Essencial",
      "CRM de Vendas Completo",
      "Scrumboard de Follow-ups",
      "Dashboard Estratégico",
      "Suporte Prioritário",
    ],
    isRecommended: true,
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    billing: "",
    description: "Para grandes clínicas com múltiplas unidades e necessidades.",
    features: [
      "Tudo do Profissional",
      "Personalização Avançada",
      "Múltiplos Locais de Atendimento",
      "Gestor de Conta Dedicado",
      "Integrações via API",
    ],
    isRecommended: false,
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Planos Feitos para Cada Etapa da Sua Clínica
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Escolha o plano que se adapta perfeitamente à sua realidade, sem
          surpresas.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "group relative rounded-lg",
              plan.isRecommended ? "scale-105" : "scale-100" // Destaca o card
            )}
          >
            {/* Efeito de brilho (glow) - sempre ativo no recomendado */}
            <div
              className={cn(
                "absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] blur-lg transition duration-300",
                plan.isRecommended
                  ? "opacity-75" // Brilho sempre ativo
                  : "opacity-0 group-hover:opacity-75" // Brilho só no hover
              )}
            />

            {/* Card de Preço */}
            <div className="relative flex h-full w-full flex-col justify-between rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-8 backdrop-blur-xl">
              <div>
                {/* Badge de Recomendado */}
                {plan.isRecommended && (
                  <div className="absolute top-0 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] px-4 py-1 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-[#a0a0a0]">{plan.description}</p>

                {/* Preço */}
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-xl text-[#a0a0a0]">
                    {plan.billing}
                  </span>
                </div>

                {/* Lista de Features */}
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-[#a0a0a0]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão CTA */}
              <Button
                size="lg"
                className={cn(
                  "mt-10 w-full text-base",
                  plan.isRecommended
                    ? "bg-[#2575fc] hover:bg-[#2575fc]/90"
                    : "border-white/20 bg-transparent hover:bg-white/10 hover:text-white"
                )}
                variant={plan.isRecommended ? "default" : "outline"}
              >
                {plan.price === "Sob Consulta"
                  ? "Entrar em Contato"
                  : "Começar Agora"}
              </Button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingSection;