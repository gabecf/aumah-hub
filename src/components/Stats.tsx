import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="reveal text-center">
      <p className="text-[56px] font-extrabold leading-none text-purple">
        {value === 12 ? `R$ ${count}M` : count}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold text-navy/70">{label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} id="numeros" data-theme="light" className="bg-light py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="reveal text-center text-[clamp(32px,4vw,56px)] font-extrabold leading-tight text-navy">
          Dados. Estratégia. Resultado.
        </h2>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          <StatCard value={12} suffix="+" label="em verba gerenciada" />
          <StatCard value={340} suffix="%" label="ROAS médio dos clientes" />
          <StatCard value={23} suffix="" label="clientes ativos" />
        </div>

        <p className="reveal mx-auto mt-16 max-w-2xl text-center text-lg leading-relaxed text-navy/70">
          Acreditamos que marketing sem dados é achismo. Cada real investido precisa ser rastreável, mensurável e justificável perante o board.
        </p>
      </div>
    </section>
  );
}
