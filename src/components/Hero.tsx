import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="sticky top-0 z-0 flex min-h-screen flex-col justify-center overflow-hidden bg-dark"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 80% 20%, hsla(268,100%,44%,0.18), transparent), radial-gradient(ellipse 50% 40% at 20% 80%, hsla(14,88%,54%,0.10), transparent), hsl(240 30% 4%)",
      }}
    >
      {/* Decorative icon */}
      <img
        src="/icon-a.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="pointer-events-none absolute z-0 right-[5%] top-1/2 -translate-y-1/2 -rotate-[8deg] opacity-[0.08]"
        style={{ width: 480, height: 480 }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-28 lg:pb-32">
        <h1 className="reveal max-w-5xl tracking-tight text-[clamp(36px,5.5vw,72px)] font-bold leading-[1.05] text-text-dark-bg">
          <span className="block">Uma operação completa de performance.</span>
          <span className="block">Com profundidade real no seu negócio.</span>
        </h1>

        <div className="reveal mt-8 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">

          {/* Coluna esquerda: subtítulo + botão */}
          <div>
            <p className="max-w-sm text-base font-medium leading-relaxed text-text-dark-bg/75">
              Mídia paga, sites e automação integrados em uma operação única — gerenciada por quem vai conhecer o seu negócio de verdade.
            </p>
            <a
              href="#contato"
              className="group mt-8 inline-flex w-fit items-center gap-3 text-sm font-medium text-text-dark-bg/80 transition-all duration-300 hover:text-text-dark-bg"
            >
              <span className="relative overflow-hidden rounded-full border border-orange/60 px-5 py-2.5 transition-all duration-300 group-hover:border-orange group-hover:bg-orange/10">
                Conte seu desafio
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:translate-x-1 group-hover:border-orange group-hover:bg-orange/10">
                <ArrowRight size={14} className="text-white/50 transition-colors group-hover:text-orange" />
              </span>
            </a>
          </div>

          {/* Coluna direita: serviços clicáveis — oculto no mobile */}
          <div className="hidden lg:flex items-end justify-end relative z-10">
            <div className="flex flex-row items-start gap-8">
              <a
                href="/midia-paga"
                aria-label="Serviço de Mídia Paga"
                className="group/pillar flex flex-col gap-0.5 transition-opacity hover:opacity-70"
              >
                <p className="flex items-center gap-1.5 text-sm font-semibold text-text-dark-bg">
                  Mídia Paga
                  <ArrowUpRight size={12} className="translate-x-0 -translate-y-0.5 opacity-0 transition-all group-hover/pillar:translate-y-0 group-hover/pillar:opacity-60" />
                </p>
                <p className="text-xs text-text-dark-bg/40">Google, Meta & LinkedIn Ads</p>
              </a>
              <div className="hidden lg:block w-px h-8 bg-white/10 self-center" />
              <a
                href="/sites"
                aria-label="Serviço de criação de Sites"
                className="group/pillar flex flex-col gap-0.5 transition-opacity hover:opacity-70"
              >
                <p className="flex items-center gap-1.5 text-sm font-semibold text-text-dark-bg">
                  Sites
                  <ArrowUpRight size={12} className="translate-x-0 -translate-y-0.5 opacity-0 transition-all group-hover/pillar:translate-y-0 group-hover/pillar:opacity-60" />
                </p>
                <p className="text-xs text-text-dark-bg/40">Landing pages & institucionais</p>
              </a>
              <div className="hidden lg:block w-px h-8 bg-white/10 self-center" />
              <a
                href="/automacao"
                aria-label="Serviço de Automação"
                className="group/pillar flex flex-col gap-0.5 transition-opacity hover:opacity-70"
              >
                <p className="flex items-center gap-1.5 text-sm font-semibold text-text-dark-bg">
                  Automação
                  <ArrowUpRight size={12} className="translate-x-0 -translate-y-0.5 opacity-0 transition-all group-hover/pillar:translate-y-0 group-hover/pillar:opacity-60" />
                </p>
                <p className="text-xs text-text-dark-bg/40">CRM, fluxos & integrações</p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
