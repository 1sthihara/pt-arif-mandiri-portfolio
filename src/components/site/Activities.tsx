import { Cable, HardHat, Zap } from "lucide-react";

const steps = [
  {
    icon: Cable,
    title: "Cable Pulling",
    desc: "Precision pulling of fiber optic and copper cables through ducts, trenches, and conduits.",
  },
  {
    icon: HardHat,
    title: "HDPE Installation",
    desc: "Civil work and underground HDPE duct installation that forms the foundation of the network.",
  },
  {
    icon: Zap,
    title: "Fiber Optic Splicing",
    desc: "Expert fusion splicing and termination ensuring low-loss, long-lasting connections.",
  },
];

const Activities = () => {
  return (
    <section className="section-py bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            How We Work
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Activity Showcase
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three core field activities that anchor every successful deployment.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative text-center">
                  <div className="relative mx-auto w-20 h-20 rounded-full bg-hero-gradient flex items-center justify-center shadow-elevated">
                    <Icon className="w-9 h-9 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary text-primary text-sm font-bold flex items-center justify-center shadow-soft">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
