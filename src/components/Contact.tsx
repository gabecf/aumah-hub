import { useState, useEffect } from "react";
import { FileText, MessageCircle, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactOptions = [
  {
    label: "Diagnóstico gratuito",
    desc: "Preencha e entraremos em contato",
    icon: <FileText size={18} />,
    action: "form" as const,
  },
  {
    label: "WhatsApp",
    desc: "Resposta rápida e direta",
    icon: <MessageCircle size={18} />,
    href: "https://wa.me/5519982391369",
    external: true,
  },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3.5 text-sm text-text-dark-bg placeholder:text-text-dark-bg/30 focus:border-purple focus:outline-none transition-colors";

export default function Contact() {
  const ref = useScrollReveal<HTMLElement>();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", budget: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fechar com Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowForm(false);
    };
    if (showForm) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [showForm]);

  // Bloquear scroll do body
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showForm]);

  const sharedItemClass =
    "flex w-full items-center justify-between border-b border-white/[0.08] px-0 py-5 transition-colors hover:bg-white/[0.03]";

  return (
    <section ref={ref} id="contato" data-theme="dark" className="bg-dark py-28">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <h2 className="reveal text-center text-[clamp(32px,5vw,56px)] font-extrabold text-text-dark-bg">
          Vamos trabalhar juntos?
        </h2>
        <p className="reveal mt-3 text-center text-base text-text-dark-bg/50">
          Escolha como prefere começar.
        </p>

        <address className="reveal mt-10 not-italic">
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="w-full flex items-center justify-between py-5 border-b border-white/[0.08] hover:bg-white/[0.03] transition-colors text-left"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-text-dark-bg">
                Diagnóstico gratuito
              </span>
              <span className="text-sm text-text-dark-bg/40">
                Análise gratuita da sua operação atual
              </span>
            </div>
            <div className="flex-shrink-0 pr-2 text-text-dark-bg/30">
              <FileText size={18} />
            </div>
          </button>

          <a
            href="https://wa.me/5519982391369"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between py-5 border-b border-white/[0.08] hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-text-dark-bg">
                WhatsApp
              </span>
              <span className="text-sm text-text-dark-bg/40">
                Resposta rápida e direta
              </span>
            </div>
            <div className="flex-shrink-0 pr-2 text-text-dark-bg/30">
              <MessageCircle size={18} />
            </div>
          </a>
        </address>
      </div>

      {/* Modal overlay */}
      {showForm && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Formulário de diagnóstico"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          />

          {/* Card */}
          <div className="relative z-10 mx-4 w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0f] p-5 shadow-2xl sm:mx-0 sm:p-8">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-text-dark-bg/40">
                Qual é o seu desafio?
              </span>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Fechar formulário"
                className="p-1 text-text-dark-bg/40 transition-colors hover:text-text-dark-bg"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
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
              <input
                name="whatsapp"
                type="tel"
                placeholder="WhatsApp (com DDD)"
                value={form.whatsapp}
                onChange={handleChange}
                className={inputClass}
              />
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" disabled>
                  Qual serviço você precisa?
                </option>
                <option value="midia-paga">Mídia Paga (Google, Meta, LinkedIn)</option>
                <option value="sites">Criação de Site ou Landing Page</option>
                <option value="automacao">Automação e CRM</option>
                <option value="consultoria">Consultoria Estratégica</option>
                <option value="nao-sei">Ainda não sei — quero conversar</option>
              </select>
              <button
                type="submit"
                className="mt-2 rounded-lg bg-orange px-8 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Solicitar diagnóstico
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
