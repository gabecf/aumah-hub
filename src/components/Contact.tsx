import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-lg border border-navy/40 bg-navy/20 px-4 py-3 text-sm text-text-dark-bg placeholder:text-text-dark-bg/40 focus:border-purple focus:outline-none transition-colors";

  return (
    <section ref={ref} id="contato" data-theme="dark" className="bg-dark py-28">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="reveal text-center text-[clamp(28px,4vw,48px)] font-extrabold text-text-dark-bg">
          Pronto para parar de desperdiçar budget?
        </h2>
        <p className="reveal mt-4 text-center text-lg text-text-dark-bg/60">
          Diagnóstico gratuito. Sem compromisso.
        </p>

        <form className="reveal mt-14 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <select
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Budget mensal de mídia</option>
            <option value="3-10k">R$ 3k – R$ 10k</option>
            <option value="10-25k">R$ 10k – R$ 25k</option>
            <option value="25-50k">R$ 25k – R$ 50k</option>
            <option value="50k+">Acima de R$ 50k</option>
          </select>
          <textarea
            name="message"
            placeholder="Conte sobre seu desafio atual"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={inputClass}
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-orange px-8 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Solicitar diagnóstico
          </button>
        </form>
      </div>
    </section>
  );
}
