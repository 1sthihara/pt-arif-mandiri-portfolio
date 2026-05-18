import { Cable, Wrench, Camera, PhoneCall, Network, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cable,
    key: "fo_install",
  },
  {
    icon: Wrench,
    key: "fo_maintenance",
  },
  {
    icon: Camera,
    key: "cctv",
  },
  {
    icon: PhoneCall,
    key: "pabx",
  },
  {
    icon: Network,
    key: "lan",
  },
  {
    icon: Server,
    key: "it_telecom",
  },
];

// Konfigurasi Animasi Bersih, Ringan, dan Presisi
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Jeda mikro antar kartu (sangat mulus di mata)
    },
  },
};

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-py bg-background overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        {/* Header Section */}
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
            {t("services.badge")}
          </motion.span>
          <motion.h2 
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            variants={fadeInUp}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground"
            variants={fadeInUp}
          >
            {t("services.subtitle")}
          </motion.p>
        </motion.div>

        {/* Grid Cards Section */}
        <motion.div 
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                variants={fadeInUp}
                className="group bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-card hover:border-primary/30 hover:-translate-y-1 transition-smooth"
              >
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-xl bg-primary-soft flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                
                {/* Dynamic Translation Content */}
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {t(`services.items.${s.key}.title`)}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {t(`services.items.${s.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;