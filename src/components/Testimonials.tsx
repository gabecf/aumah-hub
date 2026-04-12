import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "A Aumah transformou a forma como olhamos para mídia paga. Pela primeira vez, consigo apresentar ROI real para o board com confiança.",
    name: "Mariana Costa",
    role: "Diretora de Marketing",
    company: "TechStore",
  },
  {
    quote: "Em 3 meses, nosso custo por lead caiu 60% e a qualidade dos leads aumentou. A diferença de trabalhar com quem entende dados é brutal.",
    name: "Rafael Mendes",
    role: "CEO",
    company: "SaaS Cloud",
  },
  {
    quote: "Contratamos a Aumah com ceticismo de quem já passou por 3 agências. Hoje, eles são parte estratégica do nosso crescimento.",
    name: "Juliana Ferreira",
    role: "Head de Growth",
    company: "FashionBR",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal<HTMLElement>();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section ref={ref} data-theme="dark" className="bg-dark py-28">
      <div className="reveal mx-auto max-w-3xl px-6 text-center">
        <span className="mb-8 inline-block text-6xl leading-none text-purple">"</span>
        <p
          key={current}
          className="text-xl font-normal leading-relaxed text-text-dark-bg"
          style={{ animation: "fadeSlide 0.35s ease" }}
        >
          {t.quote}
        </p>
        <div className="mt-8">
          <p className="font-semibold text-text-dark-bg">{t.name}</p>
          <p className="text-sm text-text-dark-bg/50">
            {t.role}, {t.company}
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="rounded-full border border-orange/40 p-2.5 text-orange transition-colors hover:bg-orange/10"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="rounded-full border border-orange/40 p-2.5 text-orange transition-colors hover:bg-orange/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
