import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const comparisonFeatures = [
  {
    feature: "Integração Verdadeira (Prontuário + CRM)",
    medguia: true,
    others: false,
  },
  {
    feature: "CRM de Vendas com Funil de Conversão",
    medguia: true,
    others: false,
  },
  {
    feature: "Automação Inteligente de Follow-ups",
    medguia: true,
    others: false,
  },
  {
    feature: "Personalização Total da Plataforma",
    medguia: true,
    others: true,
  },
  {
    feature: "Dashboard com Visão Estratégica do Negócio",
    medguia: true,
    others: false,
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Feito para ir Além do Básico
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-[#a0a0a0]">
          Veja por que o MedGuia não é apenas mais um prontuário eletrônico, mas
          uma plataforma de crescimento para sua clínica.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="group relative mt-16 max-w-4xl mx-auto"
      >
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#6a11cb] to-[#2575fc] opacity-30 blur-lg" />
        
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#1a0a2e]/60 p-6 backdrop-blur-xl">

          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 text-left text-lg font-semibold">Funcionalidade Chave</th>
                  <th className="py-4 px-4 text-center text-lg font-semibold text-[#2575fc]">MedGuia</th>
                  <th className="py-4 px-4 text-center text-lg font-semibold text-[#a0a0a0]">Outras Plataformas</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-5 px-4 text-white">{item.feature}</td>
                    <td className="py-5 px-4">{item.medguia ? <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}</td>
                    <td className="py-5 px-4">{item.others ? <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="block lg:hidden space-y-4">
            {comparisonFeatures.map((item, index) => (
              <div key={index} className="rounded-md border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white mb-3 text-center">{item.feature}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#2575fc] mb-1">MedGuia</p>
                    {item.medguia ? <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#a0a0a0] mb-1">Outras Plataformas</p>
                    {item.others ? <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" /> : <XCircle className="h-6 w-6 text-red-500 mx-auto" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default DifferentiatorsSection;