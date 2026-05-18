import { Cable, HardHat, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Cable,
    key: "a1", // Merujuk ke activities.items.a1 di JSON
  },
  {
    icon: HardHat,
    key: "a2", // Merujuk ke activities.items.a2 di JSON
  },
  {
    icon: Zap,
    key: "a3", // Merujuk ke activities.items.a3 di JSON
  },
];

// Konfigurasi Animasi Halus & Ringan Berbasis Perangkat
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
      staggerChildren: 0.12, // Memberikan efek runtutan sekuensial langkah demi langkah
    },
  },
};

const lineAnimation = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } 
  }
};

const Activities = () => {
  const { t } = useTranslation();

  return (
    <section className="section-py bg-background overflow-hidden">
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
            {t("activities.badge")}
          </motion.span>
          <motion.h2 
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            variants={fadeInUp}
          >
            {t("activities.title")}
          </motion.h2>
          <motion.p 
            className="mt-4 text-muted-foreground"
            variants={fadeInUp}
          >
            {t("activities.subtitle")}
          </motion.p>
        </motion.div>

        {/* TIMELINE / ACTIVITIES GRID */}
        <div className="mt-14 relative">
          
          {/* Connector line (Menggunakan motion untuk efek menggambar garis yang presisi) */}
          <motion.div 
            className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={lineAnimation}
          />

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div 
                  key={s.key} 
                  variants={fadeInUp}
                  className="relative text-center"
                >
                  
                  {/* Icon Circle Box */}
                  <div className="relative mx-auto w-20 h-20 rounded-full bg-hero-gradient flex items-center justify-center shadow-elevated">
                    <Icon className="w-9 h-9 text-primary-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary text-primary text-sm font-bold flex items-center justify-center shadow-soft">
                      {i + 1}
                    </span>
                  </div>

                  {/* Dynamic Translated Content */}
                  <h3 className="mt-6 text-xl font-bold text-foreground">
                    {t(`activities.items.${s.key}.title`)}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {t(`activities.items.${s.key}.desc`)}
                  </p>

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Activities;