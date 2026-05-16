import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((n) => n.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth bg-background shadow-soft border-b border-border/60"
      )}
    >
      <nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
        <img 
          src="/logo.png" 
          alt="PT Arif Mandiri Logo" 
          className="h-10 w-auto object-contain"
        />
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground">PT. ARIF MANDIRI</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              GENERAL CONTRACTOR
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-smooth",
                  active === n.href.slice(1)
                    ? "text-primary bg-primary-soft"
                    : "text-foreground/70 hover:text-primary hover:bg-primary-soft/50"
                )}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">

          <div id="google_translate_element" className="scale-90"></div>

          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white"
          >
            Get in Touch
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container-px max-w-7xl mx-auto py-4 flex flex-col gap-1">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary transition-smooth"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
