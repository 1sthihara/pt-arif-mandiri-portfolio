import { Cable, Wrench, Camera, PhoneCall, Network, Server } from "lucide-react";

const services = [
  {
    icon: Cable,
    title: "Fiber Optic Installation",
    desc: "Professional deployment of fiber optic cabling for high-speed, long-distance network backbones.",
  },
  {
    icon: Wrench,
    title: "Fiber Optic Maintenance",
    desc: "Ongoing inspection, splicing, and repair services to keep your network running flawlessly.",
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    desc: "Design and installation of integrated CCTV surveillance for offices, sites, and facilities.",
  },
  {
    icon: PhoneCall,
    title: "PABX Installation",
    desc: "Reliable PABX phone systems tailored for businesses of every scale and complexity.",
  },
  {
    icon: Network,
    title: "LAN Networking",
    desc: "Structured LAN cabling and configuration for stable, secure office connectivity.",
  },
  {
    icon: Server,
    title: "IT & Telecom Infrastructure",
    desc: "End-to-end IT and telecommunication infrastructure consulting, deployment, and support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-py bg-background">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete range of telecommunication and network infrastructure services tailored for enterprise reliability.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-card hover:border-primary/30 hover:-translate-y-1 transition-smooth"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-soft flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
