import { useScrollReveal } from "@/hooks/useScrollReveal";

const posts = [
  {
    tag: "Google Ads",
    title: "Performance Max em 2025: quando usar e quando evitar",
    date: "12 Mar 2025",
  },
  {
    tag: "Estratégia",
    title: "ROAS vs. MER: qual métrica realmente importa para o seu e-commerce",
    date: "28 Fev 2025",
  },
  {
    tag: "LinkedIn Ads",
    title: "Como reduzir CPL em LinkedIn sem sacrificar qualidade de lead",
    date: "15 Fev 2025",
  },
];

export default function Blog() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="blog" data-theme="light" className="bg-light py-28">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="reveal text-[clamp(32px,4vw,56px)] font-extrabold text-navy">Conteúdo</h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <article
              key={i}
              className="reveal group cursor-pointer overflow-hidden rounded-xl border border-navy/15 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-purple"
            >
              <div className="p-7">
                <span className="inline-block rounded-full bg-purple/[0.15] px-3 py-1 text-xs font-semibold text-purple">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{p.title}</h3>
                <p className="mt-3 text-xs text-navy/50">{p.date}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-orange">Ler →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
