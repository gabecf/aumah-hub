import { Linkedin, Instagram, Youtube } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases",    href: "#cases" },
  { label: "Sobre",    href: "#numeros" },
  { label: "Blog",     href: "#blog" },
  { label: "Contato",  href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-[#05050d] px-4 pt-20 pb-12 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <img
            src="/logo-horizontal-dark.png"
            alt="Aumah Hub logo"
            className="h-8"
          />
        </div>

        {/* Links de navegação */}
        <nav
          aria-label="Links do rodapé"
          className="mb-14 flex flex-wrap justify-center gap-8"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-dark-bg/50 transition-colors hover:text-text-dark-bg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Linha divisória — efeito lápis roxo */}
        <svg width="100%" height="1" className="mb-10">
          <defs>
            <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#6400df" stopOpacity="0" />
              <stop offset="25%"  stopColor="#6400df" stopOpacity="0.3" />
              <stop offset="50%"  stopColor="#6400df" stopOpacity="0.7" />
              <stop offset="75%"  stopColor="#6400df" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6400df" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="1" fill="url(#divider-grad)" />
        </svg>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-text-dark-bg/60">
              © 2025 Aumah Hub. Todos os direitos reservados.
            </p>
            <p className="text-xs text-text-dark-bg/40">
              CNPJ 61.111.283/0001-33 · Americana, SP — Brasil
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 md:justify-end">
            <a
              href="https://linkedin.com/company/aumah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aumah no LinkedIn"
              className="text-text-dark-bg/30 transition-colors hover:text-text-dark-bg"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://youtube.com/@aumah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal da Aumah Hub no YouTube"
              className="text-text-dark-bg/30 transition-colors hover:text-text-dark-bg"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://instagram.com/aumah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aumah no Instagram"
              className="text-text-dark-bg/30 transition-colors hover:text-text-dark-bg"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
