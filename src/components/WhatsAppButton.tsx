import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/5519982391369?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Gabriel no WhatsApp"
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Foto com indicador online */}
      <div className="relative">
        <img
          src="/gabriel-aumah.png"
          alt="Gabriel Castro"
          className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-white/20 shadow-lg"
        />
        <span className="absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white" />
      </div>
    </a>
  );
}
