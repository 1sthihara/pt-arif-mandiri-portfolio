import { ArrowRight, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

// Mengubah struktur data stat agar dinamis sesuai bahasa aktif
const statItems = [
  { v: "5+", key: "experience" },
  { v: "50+", key: "projects" },
  { v: "20+", key: "clients" },
];

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >

      <img
        src="/main.webp"
        alt=""
        role="presentation"
        fetchpriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-15 mix-blend-overlay pointer-events-none"
      />

      {/* Abstract tech grid background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-dark/30 rounded-full blur-3xl pointer-events-none" />

      {/* Network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1200 800" fill="none">
        <line x1="100" y1="200" x2="400" y2="350" stroke="white" strokeWidth="1" />
        <line x1="400" y1="350" x2="700" y2="200" stroke="white" strokeWidth="1" />
        <line x1="700" y1="200" x2="1000" y2="400" stroke="white" strokeWidth="1" />
        <line x1="400" y1="350" x2="600" y2="600" stroke="white" strokeWidth="1" />
        <line x1="600" y1="600" x2="900" y2="650" stroke="white" strokeWidth="1" />
        <circle cx="100" cy="200" r="4" fill="white" />
        <circle cx="400" cy="350" r="6" fill="white" />
        <circle cx="700" cy="200" r="4" fill="white" />
        <circle cx="1000" cy="400" r="5" fill="white" />
        <circle cx="600" cy="600" r="6" fill="white" />
        <circle cx="900" cy="650" r="4" fill="white" />
      </svg>

      <div className="container-px max-w-7xl mx-auto relative z-10 pt-28 pb-20 md:pt-24 md:pb-16">
        <div className="max-w-3xl animate-fade-in-up">

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] md:leading-[1.05] tracking-tight">
            {t("hero.title")}
          </h1>

          <p className="mt-6 text-base md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-background text-primary font-semibold shadow-elevated hover:shadow-card hover:scale-[1.02] transition-smooth text-center"
            >
              {t("hero.getInTouch", "Get in Touch")}
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-foreground font-semibold border border-white/30 hover:bg-white/20 transition-smooth text-center"
            >
              <Briefcase size={18} />
              {t("hero.viewProjects")}
            </a>
          </div>

          {/* DATA STATISTIK (Koreksi Skala Grid Agar Teks Label Tidak Terhimpit Sempit) */}
          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 max-w-xl">
            {statItems.map((s) => (
              <div key={s.key} className="flex flex-col">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground tracking-tight">
                  {s.v}
                </div>
                <div className="mt-1.5 text-[10px] sm:text-xs md:text-sm text-primary-foreground/70 uppercase tracking-wider font-medium leading-tight">
                  {t(`hero.stats.${s.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
};

export default Hero;