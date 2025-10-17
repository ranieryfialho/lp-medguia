import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import dashboardImage from "@/assets/dashboard-geral.png";
import agendamentoImage from "@/assets/agendamento.png";
import planosSaudeImage from "@/assets/planosSaude.png";

const tabContentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const ProductTourSection = () => {
  return (
    <section className="hidden md:block container mx-auto py-20 md:py-28 px-4 md:px-6">
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

          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 mb-6">
              <TabsTrigger value="dashboard" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Dashboard</TabsTrigger>
              <TabsTrigger value="agendamento" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Agendamento</TabsTrigger>
              <TabsTrigger value="gestao-planos" className="text-[#a0a0a0] data-[state=active]:text-white data-[state=active]:bg-white/10">Gestão de Planos</TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              <TabsContent key="dashboard" value="dashboard">
                <motion.div
                  variants={tabContentVariants} initial="initial" animate="animate" exit="exit" >
                  <img src={dashboardImage} alt="Tela do Dashboard Geral do MedGuia" className="rounded-md border border-white/10" />
                </motion.div>
              </TabsContent>

              <TabsContent key="agendamento" value="agendamento">
                <motion.div
                  variants={tabContentVariants} initial="initial" animate="animate" exit="exit" >
                  <img src={agendamentoImage} alt="Tela de Agendamento do MedGuia" className="rounded-md border border-white/10" />
                </motion.div>
              </TabsContent>

              <TabsContent key="gestao-planos" value="gestao-planos">
                <motion.div
                  variants={tabContentVariants} initial="initial" animate="animate" exit="exit" >
                  <img src={planosSaudeImage} alt="Tela de gestão de planos de saúde do MedGuia" className="rounded-md border border-white/10" />
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
      </motion.div>
    </section>
  );
};

export default ProductTourSection;