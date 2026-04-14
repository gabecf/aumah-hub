import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "A Aumah transformou a forma como olhamos para mídia paga. Pela primeira vez, consigo apresentar ROI real para o board com confiança.",
    name: "Mariana Costa",
    role: "Diretora de Marketing",
    company: "TechStore",
    avatar: "/gabriel-aumah.png",
  },
  {
    quote: "Em 3 meses, nosso custo por lead caiu 60% e a qualidade dos leads aumentou. A diferença de trabalhar com quem entende dados é brutal.",
    name: "Rafael Mendes",
    role: "CEO",
    company: "SaaS Cloud",
    avatar: "/gabriel-aumah.png",
  },
  {
    quote: "Contratamos a Aumah com ceticismo de quem já passou por 3 agências. Hoje, eles são parte estratégica do nosso crescimento.",
    name: "Juliana Ferreira",
    role: "Head de Growth",
    company: "FashionBR",
    avatar: "/gabriel-aumah.png",
  },
];

function CardFooter({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <footer className="mt-4 border-t border-white/[0.08] pt-4">
      <div className="flex items-center gap-2">
        <Avatar className="size-8 shrink-0">
          <AvatarImage src={t.avatar} alt={`Foto de ${t.name}`} />
          <AvatarFallback className="bg-purple/20 text-xs text-text-dark-bg">
            {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <cite className="not-italic">
          <span className="text-sm font-semibold text-text-dark-bg">{t.name}</span>
        </cite>
      </div>
      <p className="mt-1 pl-10 text-xs text-text-dark-bg/40">
        {t.role} — {t.company}
      </p>
    </footer>
  );
}

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} data-theme="dark" className="bg-dark py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-[clamp(28px,3vw,44px)] font-extrabold text-text-dark-bg">
          O que nossos clientes dizem
        </h2>

        {/* Mobile: carrossel animado */}
        <div className="mt-12 -mx-6 overflow-hidden px-6 md:hidden">
          <div className="testimonials-track flex gap-4">
            {[...testimonials, ...testimonials].map((t, i) => (
              <blockquote
                key={i}
                aria-hidden={i >= testimonials.length ? "true" : undefined}
                className="shrink-0 rounded-2xl border border-white/[0.08] bg-[#0f0f1a] p-5 transition-colors duration-300 hover:border-purple/30"
                style={{ minWidth: "80vw", maxWidth: "80vw" }}
              >
                <p className="text-base leading-relaxed text-text-dark-bg/80">"{t.quote}"</p>
                <CardFooter t={t} />
              </blockquote>
            ))}
          </div>
        </div>

        {/* Desktop: grid estático 3 colunas */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="reveal group rounded-2xl border border-white/[0.08] bg-[#0f0f1a] px-5 py-5 transition-colors duration-300 hover:border-purple/30"
            >
              <p className="text-base leading-relaxed text-text-dark-bg/80">"{t.quote}"</p>
              <CardFooter t={t} />
            </blockquote>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .testimonials-track {
          animation: slide 18s linear infinite;
        }
        .testimonials-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
