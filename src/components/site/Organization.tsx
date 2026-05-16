import { Crown, Briefcase, Package, HardHat, Network } from "lucide-react";

const roles = [
  { icon: Crown, title: "Director", level: 0 },
  { icon: Briefcase, title: "Operation Manager", level: 1 },
  { icon: Package, title: "Material Admin", level: 2 },
  { icon: HardHat, title: "ME / Civil", level: 2 },
  { icon: Network, title: "IT & Telecom", level: 2 },
];

const Organization = () => {
  const top = roles[0];
  const mid = roles[1];
  const bottom = roles.slice(2);

  const Card = ({ icon: Icon, title }: { icon: typeof Crown; title: string }) => (
    <div className="bg-card border border-border rounded-2xl px-6 py-5 shadow-soft hover:shadow-card hover:border-primary/40 transition-smooth flex items-center gap-3 min-w-[180px]">
      <div className="w-10 h-10 rounded-lg bg-primary-soft flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="text-sm font-semibold text-foreground">{title}</div>
    </div>
  );

  return (
    <section className="section-py bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Our Team
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Organization Structure
          </h2>
          <p className="mt-4 text-muted-foreground">
            A streamlined structure built for accountability and rapid execution.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-10">
          <Card icon={top.icon} title={top.title} />
          <div className="w-px h-8 bg-border" />
          <Card icon={mid.icon} title={mid.title} />
          <div className="w-px h-8 bg-border" />
          <div className="w-full max-w-3xl border-t border-border relative">
            <div className="absolute left-1/2 -top-4 w-px h-4 bg-border" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl -mt-6">
            {bottom.map((r) => (
              <div key={r.title} className="flex flex-col items-center">
                <div className="w-px h-6 bg-border" />
                <Card icon={r.icon} title={r.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
