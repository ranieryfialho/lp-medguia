// src/components/layout/Header.jsx

import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.png"; 

const Header = () => {
  const navItems = [
    { name: "Início", href: "#" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Inteligência Artificial", href: "#ia" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Acesso Gratuito", href: "#acesso-gratuito" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1a0a2e]/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">

        {/* ==================================================================== */}
        {/* INÍCIO DA MUDANÇA: Combinando imagem e texto no logo */}
        {/* ==================================================================== */}
        <a href="#" className="flex items-center gap-1"> {/* Usar 'gap-1' ou 'gap-0' para ajustar o espaço */}
          <img 
            src={logoImg} 
            alt="MedGuia Logo Icon" 
            className="h-8 w-auto" // Ajuste a altura conforme necessário
          /> 
          <span className="text-2xl font-bold text-white">
            Med<span className="text-[#2575fc]">Guia</span>
          </span>
        </a>
        {/* ==================================================================== */}
        {/* FIM DA MUDANÇA */}
        {/* ==================================================================== */}

        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[#a0a0a0] transition-colors hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#formulario">
          <Button className="hidden md:block bg-[#2575fc] hover:bg-[#2575fc]/90">
            Solicitar Demonstração
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;