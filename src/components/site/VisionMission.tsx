import { Eye, Target, Trophy } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Vision",
    text: "To support customers and fulfill their needs effectively.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "To be competitive, trusted, and responsive.",
  },
  {
    icon: Trophy,
    title: "Goal",
    text: "Deliver projects on time and ensure customer satisfaction.",
  },
];

const VisionMission = () => {
  return (
    <section className="section-py bg-secondary/40">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Foundation
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Vision, Mission & Goals
          </h2>
          <p className="mt-4 text-muted-foreground">
            The principles that guide every project we undertake.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              >
                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-card">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="pt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{it.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{it.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
