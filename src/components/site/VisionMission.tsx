import { Eye, Target, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const items = [
  {
    icon: Eye,
    key: "vision", // merujuk ke foundation.vision di JSON
  },
  {
    icon: Target,
    key: "mission", // merujuk ke foundation.mission di JSON
  },
  {
    icon: Trophy,
    key: "goal", // merujuk ke foundation.goal di JSON
  },
];

// Konfigurasi Standar Profesional: Ringan, Halus, Cepat
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
      staggerChildren: 0.1, // Memberikan jeda beruntun 0.1 detik antar kartu
    },
  },
};

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section className="section-py bg-secondary/40 overflow-hidden">
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
            {t("foundation.badge")}
          </motion.span>
          <motion.h2 
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            variants={fadeInUp}
          >
            {t("foundation.title")}
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground"
            variants={fadeInUp}
          >
            {t("foundation.subtitle")}
          </motion.p>
        </motion.div>

        {/* Grid Cards Section */}
        <motion.div 
          className="mt-14 grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.key}
                variants={fadeInUp}
                className="group relative bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-smooth"
              >
                {/* Floating Icon Box (Dibiarkan murni menggunakan CSS statis agar tidak tabrakan dengan translasi framer-motion) */}
                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center shadow-card">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                {/* Card Content */}
                <div className="pt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    {t(`foundation.${it.key}.title`)}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {t(`foundation.${it.key}.desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;