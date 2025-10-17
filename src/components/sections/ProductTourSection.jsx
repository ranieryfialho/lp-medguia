import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dashboardImage from "@/assets/dashboard-geral.png";
import agendamentoImage from "@/assets/agendamento.png";
import planosSaudeImage from "@/assets/planosSaude.png";

const ProductTourSection = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Conheça a Ferramenta por Dentro
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Navegue pelas principais telas e veja como o MedGuia é intuitivo e
          poderoso.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative mt-16 max-w-6xl mx-auto"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-30 blur-lg" />
        
        <div className="relative rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-4 md:p-8 backdrop-blur-xl">

          <div className="hidden md:block">
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-white/5 mb-6">
                <TabsTrigger value="dashboard" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Dashboard</TabsTrigger>
                <TabsTrigger value="agendamento" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Agendamento</TabsTrigger>
                <TabsTrigger value="gestao-planos" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Gestão de Planos</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard"><img src={dashboardImage} alt="Tela do Dashboard Geral do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
              <TabsContent value="agendamento"><img src={agendamentoImage} alt="Tela de Agendamento do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
              <TabsContent value="gestao-planos"><img src={planosSaudeImage} alt="Tela de gestão de planos de saúde do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
            </Tabs>
          </div>

          <div className="block md:hidden">
            <Tabs defaultValue="dashboard" orientation="vertical" className="flex gap-4">
              <TabsList className="flex flex-col h-auto justify-start bg-transparent border-r border-white/10 p-0 w-1/3 flex-shrink-0">
                <TabsTrigger value="dashboard" className="justify-start w-full rounded-none px-4 py-3 data-[state=active]:bg-white/10 data-[state=active]:shadow-none text-[#a0a0a0] data-[state=active]:text-white">Dashboard</TabsTrigger>
                <TabsTrigger value="agendamento" className="justify-start w-full rounded-none px-4 py-3 data-[state=active]:bg-white/10 data-[state=active]:shadow-none text-[#a0a0a0] data-[state=active]:text-white">Agendamento</TabsTrigger>
                <TabsTrigger value="gestao-planos" className="justify-start w-full rounded-none px-4 py-3 data-[state=active]:bg-white/10 data-[state=active]:shadow-none text-[#a0a0a0] data-[state=active]:text-white">Planos</TabsTrigger>
              </TabsList>
              
              <div className="flex-1">
                <TabsContent value="dashboard" className="mt-0"><img src={dashboardImage} alt="Tela do Dashboard Geral do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
                <TabsContent value="agendamento" className="mt-0"><img src={agendamentoImage} alt="Tela de Agendamento do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
                <TabsContent value="gestao-planos" className="mt-0"><img src={planosSaudeImage} alt="Tela de gestão de planos de saúde do MedGuia" className="rounded-md border border-white/10" /></TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductTourSection;