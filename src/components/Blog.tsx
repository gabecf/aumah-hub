import { useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const author = {
  name: "Gabriel Castro",
  role: "Head de Performance",
  avatar: "/gabriel-aumah.png",
};

const posts = [
  {
    tag: "Google Ads",
    title: "Performance Max em 2025: quando usar e quando evitar",
    date: "12 Mar 2025",
    author,
  },
  {
    tag: "Estratégia",
    title: "ROAS vs. MER: qual métrica realmente importa para o seu e-commerce",
    date: "28 Fev 2025",
    author,
  },
  {
    tag: "LinkedIn Ads",
    title: "Como reduzir CPL em LinkedIn sem sacrificar qualidade de lead",
    date: "15 Fev 2025",
    author,
  },
];

function PostCard({ p }: { p: (typeof posts)[0] }) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl border border-navy/15 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-purple h-full">
      <div className="p-7">
        <span className="inline-block rounded-full bg-purple/[0.15] px-3 py-1 text-xs font-semibold text-purple">
          {p.tag}
        </span>
        <h3 className="mt-4 text-lg font-bold leading-snug text-navy">{p.title}</h3>
        <p className="mt-3 text-xs text-navy/50">{p.date}</p>
        <span className="mt-5 inline-block text-sm font-semibold text-orange">Ler →</span>

        <div className="mt-6 border-t border-navy/10 pt-5">
          <div className="flex items-center gap-3">
            <img
              src={p.author.avatar}
              alt={p.author.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-navy">{p.author.name}</p>
              <p className="text-xs text-navy/50">{p.author.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeBlog, setActiveBlog] = useState(0);
  const blogScrollRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} id="blog" data-theme="light" className="bg-light py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="reveal text-[clamp(32px,4vw,56px)] font-extrabold text-navy">Conteúdo</h2>
        <p className="reveal mt-4 max-w-2xl text-lg text-navy/60">
          Para quem quer entender o que está por trás dos resultados.
        </p>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16">
          {posts.map((p, i) => (
            <article key={i} className="reveal">
              <PostCard p={p} />
            </article>
          ))}
        </div>

        {/* Mobile: carrossel */}
        <div
          ref={blogScrollRef}
          className="flex md:hidden gap-4 overflow-x-auto scroll-smooth scrollbar-hide pb-4 mt-10"
          style={{ scrollSnapType: "x mandatory" }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const idx = Math.round(el.scrollLeft / (el.offsetWidth * 0.85));
            setActiveBlog(Math.min(idx, posts.length - 1));
          }}
        >
          {posts.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw]"
              style={{ scrollSnapAlign: "start" }}
            >
              <PostCard p={p} />
            </div>
          ))}
        </div>

        {/* Dots mobile */}
        <div className="flex justify-center gap-2 mt-5 md:hidden">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = blogScrollRef.current;
                if (el) {
                  el.scrollTo({ left: i * el.offsetWidth * 0.85, behavior: "smooth" });
                  setActiveBlog(i);
                }
              }}
              className={`rounded-full transition-all duration-300 ${
                i === activeBlog ? "w-5 h-1.5 bg-navy" : "w-1.5 h-1.5 bg-navy/25"
              }`}
              aria-label={`Ver post ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="#"
          className="reveal mt-12 mx-auto flex w-fit rounded-full border-[0.5px] border-[#1b1464]/40 px-7 py-3.5 text-sm font-semibold text-[#1b1464] transition-colors hover:border-[#6400df] hover:text-[#6400df]"
        >
          Ver todos os conteúdos →
        </a>
      </div>
    </section>
  );
}
