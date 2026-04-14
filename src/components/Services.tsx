import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  { name: "Google Ads",   icon: "/tools-icons/google-ads.svg" },
  { name: "Meta Ads",     icon: "/tools-icons/meta.svg" },
  { name: "LinkedIn Ads", icon: "/tools-icons/linkedin.svg" },
  { name: "Analytics",    icon: "/tools-icons/google-analytics.svg" },
  { name: "Zapier",       icon: "/tools-icons/zapier.svg" },
  { name: "n8n",          icon: "/tools-icons/n8n.svg" },
  { name: "WordPress",    icon: "/tools-icons/wordpress.svg" },
  { name: "HubSpot",      icon: "/tools-icons/hubspot.svg" },
  { name: "Tag Manager",  icon: "/tools-icons/gtm.svg" },
  { name: "TikTok Ads",   icon: "/tools-icons/tiktok.svg" },
  { name: "Pinterest Ads", icon: "/tools-icons/pinterest.svg" },
  { name: "ManyChat",     icon: "/tools-icons/manychat.svg" },
];

export default function Services() {
  const ref = useScrollReveal<HTMLElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const prev = () => setActive((a) => (a - 1 + tools.length) % tools.length);
  const next = () => setActive((a) => (a + 1) % tools.length);

  const getPos = (i: number) => {
    let diff = i - active;
    if (diff > tools.length / 2) diff -= tools.length;
    if (diff < -tools.length / 2) diff += tools.length;
    return diff;
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % tools.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 640;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: isMobileDevice ? 0.2 : 0.6,
        rootMargin: isMobileDevice ? "0px 0px -40px 0px" : "0px 0px -160px 0px",
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        sectionRef.current = el;
      }}
      id="servicos"
      data-theme="dark"
      className="overflow-hidden bg-dark py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="reveal">
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-semibold tracking-tight text-text-dark-bg">
            O que fazemos
          </h2>
          <p className="mt-4 max-w-lg text-base text-text-dark-bg/50">
            Três frentes. Um especialista. Sem terceirizar o que importa.
          </p>
        </div>

        {/* Cards de serviço */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: "Mídia Paga",
              desc: "Para quem quer crescer com consistência e acelerar resultados.",
              href: "/midia-paga",
            },
            {
              title: "Sites",
              desc: "Para quem quer ser encontrado e converter visitante em cliente.",
              href: "/sites",
            },
            {
              title: "Automação",
              desc: "Para quem valoriza tempo e quer escalar o atendimento sem perder qualidade.",
              href: "/automacao",
            },
          ].map((s, index) => (
            <a
              key={s.href}
              href={s.href}
              className="reveal group flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.08] p-6 transition-all duration-300 hover:border-white/40 hover:bg-white/[0.12] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              style={{ transitionDelay: `${index * 100 + 150}ms` }}
            >
              <div>
                <h3 className="text-base font-semibold text-text-dark-bg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-dark-bg/50">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-white/60 transition-colors group-hover:text-white">
                Saiba mais
                <ArrowUpRight size={12} />
              </div>
            </a>
          ))}
        </div>

        {/* Separador + carrossel */}
        <div className="mt-16 border-t border-white/[0.08] pt-12">
          <p className="text-xs font-semibold tracking-widest text-text-dark-bg/25 uppercase mb-10">
            Ferramentas que dominamos
          </p>

        {/* Carrossel */}
        <div
          className="relative flex w-full items-center justify-center gap-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Seta esquerda */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-dark-bg/40 transition-all hover:border-white/30 hover:text-text-dark-bg"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Ícones — container com altura fixa */}
          <div
            className="relative flex flex-1 items-center justify-center"
            style={{ height: "120px", isolation: "isolate" }}
          >
            {tools.map((tool, i) => {
              const pos = getPos(i);
              if (Math.abs(pos) > 2) return null;
              if (isMobile && Math.abs(pos) > 1) return null;

              const isCenter   = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;
              const isEdge     = Math.abs(pos) === 2;

              const xOffset = pos * (isMobile ? 63 : 95);

              return (
                <div
                  key={tool.name + "-wrapper"}
                  className="absolute"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 500ms ease ${Math.abs(pos) * 120}ms, transform 500ms ease ${Math.abs(pos) * 120}ms`,
                  }}
                >
                  <button
                    onClick={() => setActive(i)}
                    aria-label={`Ver ${tool.name}`}
                    className="flex flex-col items-center gap-4 focus:outline-none"
                    style={{
                      transform: `translateX(${xOffset}px)`,
                      opacity: isEdge ? 0.6 : 1,
                      filter: isEdge ? "blur(1px)" : "none",
                      transition: "transform 600ms cubic-bezier(0.4,0,0.2,1), opacity 600ms cubic-bezier(0.4,0,0.2,1), filter 600ms cubic-bezier(0.4,0,0.2,1)",
                      zIndex: isCenter ? (isMobile ? 5 : 10) : isAdjacent ? (isMobile ? 3 : 5) : 1,
                      pointerEvents: Math.abs(pos) > 1 ? "none" : "auto",
                    }}
                  >
                    <div className={`flex items-center justify-center rounded-full transition-all duration-[600ms] ${
                      isCenter
                        ? "h-16 w-16 bg-white/[0.07] ring-1 ring-white/[0.12] shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
                        : isAdjacent
                        ? "h-12 w-12 bg-white/[0.06] ring-1 ring-white/10"
                        : "h-8 w-8 bg-white/[0.03] ring-1 ring-white/[0.06]"
                    }`}>
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className={`invert transition-all duration-[600ms] ${
                          isCenter ? "h-7 w-7 opacity-75"
                          : isAdjacent ? "h-5 w-5 opacity-[0.42]"
                          : "h-3.5 w-3.5 opacity-[0.18]"
                        }`}
                      />
                    </div>
                    <span className={`text-sm font-medium whitespace-nowrap ${isCenter ? "text-text-dark-bg" : "opacity-0"}`}>
                      {tool.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Seta direita */}
          <button
            onClick={next}
            aria-label="Próximo"
            className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-text-dark-bg/40 transition-all hover:border-white/30 hover:text-text-dark-bg"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        </div>{/* fim separador */}
      </div>
    </section>
  );
}
