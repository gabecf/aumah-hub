const links = ["Serviços", "Cases", "Sobre", "Blog", "Contato"];

export default function Footer() {
  return (
    <footer className="border-t border-navy/40 bg-dark px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <img
          src="/logo-horizontal.png"
          alt="Aumah Hub logo"
          className="h-7"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-text-dark-bg/60 transition-colors hover:text-text-dark-bg"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-xs text-text-dark-bg/40">Aumah Hub © 2025</p>
      </div>
    </footer>
  );
}
