const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-px max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
            <img 
              src="/logo2.png" 
              alt="Logo" 
              className="h-10 w-auto object-contain"    
            />
              <div>
                <div className="font-bold">PT. ARIF MANDIRI</div>
                <div className="text-xs text-background/60 uppercase tracking-widest">
                  GENERAL CONTRACTOR
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-background/70 leading-relaxed max-w-xs">
              Trusted general contractor for fiber optic, network, and IT infrastructure across Batam. Delivering reliable solutions with precision and consistency.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background">
              Quick Links
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-background/70 hover:text-primary transition-smooth"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background">
              Connect
            </h4>
            <p className="mt-5 text-sm text-background/70">
              Batam Center Mall (BCM), Blok A2/12A, Batam, Kepulauan Riau, Indonesia
            </p>
            <p className="mt-1 text-sm text-background/70">pt.arifmandiri@gmail.com</p>
            <p className="mt-1 text-sm text-background/70">+62 812 6841 8987</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} PT. ARIF MANDIRI. All rights reserved.
          </p>
          <p className="text-xs text-background/60">
            Designed for reliability, built for performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
