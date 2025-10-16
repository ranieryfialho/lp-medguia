import { Facebook, Instagram, Code2 } from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Benefícios", href: "#beneficios" },
    { name: "Acesso Gratuito", href: "#acesso-gratuito" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-white">
              Med<span className="text-[#2575fc]">Guia</span>
            </a>

            <p className="mt-2 text-sm text-[#a0a0a0] flex items-center justify-center md:justify-start gap-2">
              <Code2 size={18} />
              Desenvolvido por{" "}
              <a
                href="https://rafiweb.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#2575fc] hover:underline"
              >
                RafiWeb
              </a>
            </p>
          </div>

          {/* Lado Direito: Navegação e Redes Sociais */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-12">
            <nav>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
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

            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-[#a0a0a0] hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#a0a0a0] hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;