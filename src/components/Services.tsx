import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    num: "01",
    title: "Google Ads",
    desc: "Search, Performance Max e Shopping integrados com estratégia de funil. Otimizamos por receita, não por CPC.",
  },
  {
    num: "02",
    title: "LinkedIn Ads",
    desc: "Lead generation e brand awareness B2B com segmentações por cargo, setor e tamanho de empresa. Pipeline qualificado.",
  },
  {
    num: "03",
    title: "Meta Ads",
    desc: "Conversão e remarketing no Facebook e Instagram com criativo orientado por dados e testes A/B contínuos.",
  },
  {
    num: "04",
    title: "Estratégia & Analytics",
    desc: "Estruturação de contas, modelos de atribuição, dashboards em tempo real e reports executivos para tomada de decisão.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="servicos" data-theme="dark" className="bg-dark py-28">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="reveal text-[clamp(32px,4vw,56px)] font-extrabold text-text-dark-bg">
          O que fazemos
        </h2>

        <div className="mt-16">
          {services.map((s, i) => (
            <div key={i} className="reveal border-b border-navy/40">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center gap-6 py-7 text-left transition-colors"
              >
                <span className="text-sm font-semibold text-orange">{s.num}</span>
                <span className="flex-1 text-xl font-semibold text-text-dark-bg">{s.title}</span>
                <ChevronRight
                  size={20}
                  className={`text-text-dark-bg/50 transition-transform duration-300 ${
                    open === i ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-[450ms] ease-in-out"
                style={{ maxHeight: open === i ? 120 : 0, opacity: open === i ? 1 : 0 }}
              >
                <p className="pb-7 pl-12 text-base leading-relaxed text-text-dark-bg/60">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
