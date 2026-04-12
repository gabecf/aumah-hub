import { useScrollReveal } from "@/hooks/useScrollReveal";

const clients = [
  "TechStore", "MedGroup", "FashionBR", "SaaS Cloud", "IndústriaPro",
  "ClínicaVida", "EduTech", "LogísticaMax",
];

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-dark"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 80% 20%, hsla(268,100%,44%,0.18), transparent), radial-gradient(ellipse 50% 40% at 20% 80%, hsla(14,88%,54%,0.10), transparent), hsl(240 30% 4%)",
      }}
    >
      {/* Decorative icon */}
      <img
        src="/icon-a.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 -rotate-[8deg] opacity-[0.07]"
        style={{ width: 420, height: "auto" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        {/* Eyebrow */}
        <span className="reveal mb-6 inline-block rounded-full bg-purple/[0.15] px-4 py-1.5 text-[13px] font-semibold tracking-wide text-purple">
          Agência de Performance Digital
        </span>

        <h1 className="reveal max-w-3xl text-[clamp(36px,5vw,76px)] font-extrabold leading-[1.05] text-text-dark-bg">
          Seu budget de mídia trabalhando no limite.
        </h1>

        <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-text-dark-bg/65">
          Gerenciamos Google Ads, LinkedIn e Meta para empresas que medem resultado em receita — não em cliques.
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a
            href="#servicos"
            className="rounded-lg bg-orange px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver como funciona →
          </a>
          <a
            href="#contato"
            className="rounded-lg border border-purple px-7 py-3.5 text-sm font-semibold text-purple transition-colors hover:bg-purple/10"
          >
            Falar com especialista
          </a>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 border-t border-navy/30 pt-8 pb-8 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="mx-10 text-sm font-semibold uppercase tracking-widest text-text-dark-bg/30"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
