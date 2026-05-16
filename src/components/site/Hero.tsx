import { ArrowRight, Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
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
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-primary-dark/30 rounded-full blur-3xl" />

      {/* Network lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" fill="none">
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

      <div className="container-px max-w-7xl mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-3xl animate-fade-in-up">

          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05]">
            Reliable Telecommunication Infrastructure Partner
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            Delivering high-quality fiber optic and network infrastructure solutions across Batam, with a strong commitment to precision, reliability, and engineering excellence. We strive to build long-term partnerships by ensuring every project is executed with accuracy, efficiency, and the highest industry standards.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-background text-primary font-semibold shadow-elevated hover:shadow-card hover:scale-[1.02] transition-smooth"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-sm text-primary-foreground font-semibold border border-white/30 hover:bg-white/20 transition-smooth"
            >
              <Briefcase size={18} />
              View Our Projects
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-xl">
            {[
              { v: "5+", l: "Years Experience" },
              { v: "50+", l: "Projects Delivered" },
              { v: "20+", l: "Trusted Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">{s.v}</div>
                <div className="mt-1 text-xs md:text-sm text-primary-foreground/70 uppercase tracking-wider">
                  {s.l}
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
