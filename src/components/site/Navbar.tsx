import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

// Mengubah label menjadi key agar dinamis sesuai bahasa aktif
const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "clients", href: "#clients" },
  { key: "contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { t, i18n } = useTranslation();

  // Fungsi untuk mendeteksi dan mengubah bahasa aktif
  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "id" : "en";
    i18n.changeLanguage(newLang);
  };

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
        "fixed top-0 left-0 right-0 z-50 transition-smooth bg-background shadow-soft border-b border-border/60",
        scrolled && "shadow-md bg-background/95 backdrop-blur-sm"
      )}
    >
      <nav className="container-px max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20">
        {/* LOGO & BRAND */}
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="PT Arif Mandiri Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-foreground">PT. ARIF MANDIRI</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              {t("navbar.generalContractor", "GENERAL CONTRACTOR")}
            </div>
          </div>
        </a>

        {/* NAVIGATION ITEMS (DESKTOP) */}
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
                {t(`navbar.${n.key}`)}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT ACTIONS AREA (DESKTOP & MOBILE FRIENDLY) */}
        <div className="flex items-center gap-2 md:gap-3">
          
          {/* TOMBOL SWITCH BAHASA (GLOBE ICON) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/80 hover:bg-primary-soft/40 hover:text-primary transition-smooth text-foreground/80"
            title={i18n.language.startsWith("en") ? "Ubah ke Bahasa Indonesia" : "Switch to English"}
          >
            <Globe size={16} className="text-foreground/60" />
            <span className="text-xs font-bold tracking-wider uppercase">
              {i18n.language.startsWith("en") ? "EN" : "ID"}
            </span>
          </button>

          {/* TOMBOL GET IN TOUCH (DESKTOP ONLY) */}
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-smooth shadow-sm"
          >
            {t("navbar.getInTouch", "Get in Touch")}
          </a>

          {/* HAMBURGER MENU BUTTON (MOBILE ONLY) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-primary-soft/50 transition-smooth"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
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
                  {t(`navbar.${n.key}`)}
                </a>
              </li>
            ))}
            {/* Opsi Tambahan Tombol Contact di Mobile Menu agar fungsional */}
            <li className="mt-2 px-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex justify-center w-full py-2.5 rounded-full bg-primary text-white text-sm font-medium text-center"
              >
                {t("navbar.getInTouch", "Get in Touch")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;