import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react"; // Mengimpor icon Mail agar seragam dengan Contact.tsx

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t("navbar.home"), href: "#home" },
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.services"), href: "#services" },
    { label: t("navbar.projects"), href: "#projects" },
    { label: t("navbar.clients"), href: "#clients" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-px max-w-7xl mx-auto py-16">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* LOGO & DESKRIPSI */}
          <div>
            <div className="flex items-center gap-2">   
              <img 
                src="/logo2.png" // CATATAN: Pastikan nama file ini sama persis dengan file logo yang sukses tampil di Navbar kamu
                alt="Logo PT. Arif Mandiri" 
                width="40"
                height="40"
                className="h-10 w-auto object-contain"    
                loading="lazy"
              />
              <div>
                <div className="font-bold">PT. ARIF MANDIRI</div>
                <div className="text-xs text-background/60 uppercase tracking-widest">
                  {t("navbar.generalContractor")}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm text-background/70 leading-relaxed max-w-xs">
              {t("footer.desc")}
            </p>
          </div>

          {/* TAUTAN CEPAT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              {t("footer.links")}
            </h3>
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

          {/* KONTAK & ALAMAT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background">
              {t("footer.connect")}
            </h3>
            <p className="mt-5 text-sm text-background/70 leading-relaxed mb-5">
              Batam Center Mall (BCM), Blok A2/12A, Batam, Kepulauan Riau, Indonesia
            </p>
            
            {/* Daftar Kontak Berupa Ikon dan Teks */}
            <div className="flex flex-col gap-3">
              {/* WhatsApp & Nomor Telepon */}
              <a 
                href="https://wa.me/6281268418987" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-smooth group"
                title="Chat on WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                  className="w-[18px] h-[18px] shrink-0"
                >    
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <span className="font-medium">+62 812 6841 8987</span>
              </a>

              {/* Email & Alamat Email menggunakan Lucide Mail */}
              <a 
                href="mailto:pt.arifmandiri@gmail.com" 
                className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-smooth group"
                title="Email Us"
              >
                <Mail className="w-[18px] h-[18px] shrink-0" />
                <span className="font-medium">pt.arifmandiri@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* HAK CIPTA & TAGLINE */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/60">
            © {new Date().getFullYear()} PT. ARIF MANDIRI. {t("footer.rights")}
          </p>
          <p className="text-xs text-background/60">
            {t("footer.tagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;