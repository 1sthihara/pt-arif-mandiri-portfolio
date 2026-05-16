const clients = [
  { name: "PGASCOM", logo: "/logos/pgascom.png" },
  { name: "BP BATAM", logo: "/logos/bpbatam.png" },
  { name: "BPJS", logo: "/logos/bpjs.png" },
  { name: "GASNET", logo: "/logos/gasnet.png" },
  { name: "INTEK", logo: "/logos/intek.png" },
  { name: "POLRESBARELANG", logo: "/logos/polresbarelang.png" },
  { name: "BATAMINDO", logo: "/logos/batamindo.png" },
  { name: "BCIFT", logo: "/logos/bcift.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="section-py bg-secondary/40">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trusted By
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Valued Clients
          </h2>
          <p className="mt-4 text-muted-foreground">
            Partnering with industry leaders across telecom, energy, and government sectors.
          </p>
        </div>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {clients.map((c) => (
          <div
            key={c.name}
            className="group bg-white rounded-xl border border-border shadow-soft px-6 py-12 flex items-center justify-center hover:shadow-md transition"
          >
            <img
              src={c.logo}
              alt={c.name}
            className={`
              object-contain grayscale group-hover:grayscale-0 transition duration-300
              ${c.name === "POLRESBARELANG"
                ? "h-14 max-w-[140px] md:h-20 md:max-w-[200px]"
                : "h-12 max-w-[120px] md:h-14 md:max-w-[160px]"
              }
            `}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
