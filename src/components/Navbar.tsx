import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Sobre", href: "#numeros" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDark(entry.target.getAttribute("data-theme") === "dark");
          }
        });
      },
      { rootMargin: "-48% 0px -48% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const bg = isDark
    ? "bg-[rgba(10,10,15,0.92)] backdrop-blur-[12px]"
    : "bg-[rgba(245,244,242,0.96)] backdrop-blur-[12px]";
  const textColor = isDark ? "text-text-dark-bg" : "text-navy";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${bg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="Aumah Hub">
          <img
            src="/logo-horizontal.png"
            alt="Aumah Hub logo"
            className="h-8"
            style={isDark ? { filter: "brightness(0) invert(1)" } : {}}
          />
        </a>

        {/* Desktop */}
        <div className={`hidden items-center gap-8 lg:flex ${textColor}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-sm font-semibold tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="hidden rounded-lg bg-orange px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-block"
        >
          Diagnóstico gratuito
        </a>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`flex flex-col gap-4 px-6 pb-6 lg:hidden ${textColor}`}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-block rounded-lg bg-orange px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Diagnóstico gratuito
          </a>
        </div>
      )}
    </nav>
  );
}
