import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    id: "ecommerce-moda",
    type: "performance",
    tag: "Google Ads",
    client: "E-commerce Moda",
    result: "+287%",
    metric: "ROAS",
    description:
      "Reestruturação completa de Google Shopping e campanhas de Search. Custo por conversão reduzido em 43% em 90 dias.",
    gradient: "from-[#6400df] to-[#1b1464]",
  },
  {
    id: "saas-b2b",
    type: "performance",
    tag: "LinkedIn Ads",
    client: "SaaS B2B",
    result: "-60%",
    metric: "CPL",
    description:
      "Segmentação por cargo e setor com criativos personalizados por ICP. Pipeline qualificado aumentou 3x em 60 dias.",
    gradient: "from-[#1b1464] to-[#0a0a0f]",
  },
  {
    id: "clinica-estetica",
    type: "site",
    tag: "Site Institucional",
    client: "Clínica Estética",
    result: "+180%",
    metric: "Leads",
    description:
      "Landing page focada em conversão com integração de agendamento online. Taxa de conversão de 8,4%.",
    gradient: "from-[#f15a24] to-[#6400df]",
  },
  {
    id: "industria-pro",
    type: "performance",
    tag: "Meta Ads",
    client: "Indústria B2C",
    result: "4.2x",
    metric: "ROAS",
    description:
      "Funil completo de Meta Ads com topo awareness e fundo conversão. Receita atribuída de R$380k em Q1.",
    gradient: "from-[#6400df] to-[#f15a24]",
  },
  {
    id: "startup-tech",
    type: "site",
    tag: "Landing Page",
    client: "Startup Tech",
    result: "12%",
    metric: "Conversão",
    description:
      "Landing page para captação de leads com A/B test de headline. Benchmark do setor era 3,2%.",
    gradient: "from-[#1b1464] to-[#6400df]",
  },
];

export default function Cases() {
  const ref = useScrollReveal<HTMLElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState(0);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="cases" data-theme="light" className="bg-[#f5f4f2] py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="reveal text-[clamp(28px,3.5vw,48px)] font-bold tracking-tight text-navy text-balance">
              Resultados que falam por si
            </h2>
            <p className="reveal mt-3 text-base text-navy/50 max-w-sm">
              Resultados reais de empresas que escolheram dados antes de opinião.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy/40 transition-all hover:border-navy/40 hover:text-navy"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy/40 transition-all hover:border-navy/40 hover:text-navy"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / 380);
            setActiveCase(Math.min(idx, cases.length - 1));
          }}
        >
          {cases.map((c) => (
            <article
              key={c.id}
              className="flex-shrink-0 w-[340px] md:w-[380px] rounded-2xl overflow-hidden group cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Visual area */}
              <div
                className={`relative h-52 bg-gradient-to-br ${c.gradient} flex items-center justify-center p-8`}
              >
                <div className="text-center">
                  <p className="text-[56px] font-extrabold leading-none text-white tracking-tight">
                    {c.result}
                  </p>
                  <p className="text-sm font-medium text-white/60 mt-1 uppercase tracking-widest">
                    {c.metric}
                  </p>
                </div>
                <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-wide">
                  {c.client}
                </span>
              </div>

              {/* Card body */}
              <div className="bg-white p-6 border border-t-0 border-navy/[0.08] rounded-b-2xl">
                <p className="text-xs font-semibold uppercase tracking-widest text-navy/30 mb-2">
                  {c.client}
                </p>
                <p className="text-sm leading-relaxed text-navy/60">{c.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Dots mobile */}
        <div className="flex justify-center gap-2 mt-5 md:hidden">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollRef.current?.scrollTo({ left: i * 380, behavior: "smooth" });
                setActiveCase(i);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === activeCase ? "w-5 h-1.5 bg-navy" : "w-1.5 h-1.5 bg-navy/25"
              }`}
              aria-label={`Ver case ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
