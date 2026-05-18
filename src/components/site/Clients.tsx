import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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

// Konfigurasi Animasi Efisien & Ringan
const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Render berurutan mikro (sangat cepat & responsif di HP)
    },
  },
};

const Clients = () => {
  const { t } = useTranslation();

  return (
    <section id="clients" className="section-py bg-secondary/40 overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.span 
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block"
            variants={fadeInUp}
          >
            {t("clients.badge")}
          </motion.span>
          <motion.h2 
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            variants={fadeInUp}
          >
            {t("clients.title")}
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground"
            variants={fadeInUp}
          >
            {t("clients.subtitle")}
          </motion.p>
        </motion.div>

        {/* LOGO GRID */}
        <motion.div 
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {clients.map((c) => (
            <motion.div
              key={c.name}
              variants={fadeInUp}
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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Clients;