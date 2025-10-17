import Layout from "@/components/layout/Layout";
import HeroSection from "./components/sections/HeroSection";
import ProblemSolutionSection from "./components/sections/ProblemSolutionSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import DifferentiatorsSection from "./components/sections/DifferentiatorsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
// import PricingSection from "./components/sections/PricingSection";
import FreeAccessSection from "./components/sections/FreeAccessSection";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";
import AiSection from "./components/sections/AiSection";
import ProductTourSection from "./components/sections/ProductTourSection";

function App() {
  return (
    <Layout>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ProductTourSection />
      <AiSection />
      <BenefitsSection />
      <DifferentiatorsSection />
      <TestimonialsSection />
      {/* <PricingSection /> */}
      <FreeAccessSection />
      <FaqSection />
      <CtaSection />
    </Layout>
  )
}

export default App