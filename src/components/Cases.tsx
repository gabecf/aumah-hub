import { useScrollReveal } from "@/hooks/useScrollReveal";

const cases = [
  {
    tag: "E-commerce Moda",
    result: "+287% ROAS",
    context: "Reestruturação completa de Google Shopping e Performance Max. De R$ 18k/mês para R$ 52k em receita atribuída em 90 dias.",
  },
  {
    tag: "SaaS B2B",
    result: "R$ 42 por lead",
    context: "LinkedIn Ads com segmentação por cargo e setor. Redução de 64% no CPL com leads qualificados para reunião comercial.",
  },
  {
    tag: "Clínica Odontológica",
    result: "+156% agendamentos",
    context: "Meta Ads com funil de remarketing e criativos dinâmicos. Ticket médio por paciente subiu 38% nos primeiros 60 dias.",
  },
  {
    tag: "Indústria",
    result: "340% ROAS",
    context: "Google Search + estratégia de atribuição multi-touch. Budget de R$ 25k/mês gerando R$ 85k em pedidos rastreáveis.",
  },
];

export default function Cases() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="cases" data-theme="light" className="bg-light py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="reveal text-[clamp(32px,4vw,56px)] font-extrabold text-navy">Cases</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <div
              key={i}
              className="reveal group cursor-pointer rounded-xl border border-navy/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple"
            >
              <span className="inline-block rounded-full bg-purple/[0.15] px-3 py-1 text-xs font-semibold text-purple">
                {c.tag}
              </span>
              <p className="mt-4 text-3xl font-extrabold text-purple">{c.result}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{c.context}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-orange">
                Ver case →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
