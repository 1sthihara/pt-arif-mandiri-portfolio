import { useState, useEffect } from "react";
import { CheckCircle2, FileText, Eye, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface PreviewDocState {
  path: string;
  type: "image" | "pdf";
  title: string;
}

// Konfigurasi Animasi Premium & Profesional
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }, // Berhenti dengan presisi (Cubic-Bezier)
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Memberikan jeda antar elemen anak agar muncul bergantian
    },
  },
};

const About = () => {
  const { t } = useTranslation();
  const [previewDoc, setPreviewDoc] = useState<PreviewDocState | null>(null);

  // Memetakan array penanda poin fitur secara dinamis dari file i18n
  const points = [1, 2, 3, 4];

  // Data dokumen legalitas sesuai aset folder public/documents/
  const legalDocs = [
    { key: "nib", path: "/documents/NIB.pdf", type: "pdf" },
    { key: "akte", path: "/documents/AKTE LEGALITAS.jpeg", type: "image" },
    { key: "kemenhum", path: "/documents/KEMENHUM.jpeg", type: "image" },
  ];

  // Efek samping untuk mendeteksi penekanan tombol ESC saat modal terbuka
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewDoc(null);
      }
    };

    if (previewDoc) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewDoc]);

  return (
    <section id="about" className="section-py bg-background relative overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          loop={true}
          className="pb-16 overflow-hidden px-2"
        >
          {/* SLIDE 1: ABOUT US */}
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Sisi Kiri: Teks Informasi */}
              <motion.div 
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.span 
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block"
                  variants={fadeInUp}
                >
                  {t("about.badge")}
                </motion.span>
                <motion.h2 
                  className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
                  variants={fadeInUp}
                >
                  {t("about.title")}
                </motion.h2>
                <motion.p 
                  className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed"
                  variants={fadeInUp}
                >
                  <strong className="text-foreground">PT. ARIF MANDIRI</strong>{" "}
                  {(t("about.description") || "")
                    .replace("PT. ARIF MANDIRI is", "")
                    .replace("PT. ARIF MANDIRI adalah", "")}
                </motion.p>

                <motion.ul className="mt-8 space-y-3" variants={staggerContainer}>
                  {points.map((num) => (
                    <motion.li key={num} className="flex items-start gap-3" variants={fadeInUp}>
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm md:text-base">
                        {t(`about.features.f${num}`)}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Sisi Kanan: Grid Statistik */}
              <motion.div 
                className="w-full pt-2 lg:pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <div className="relative grid grid-cols-2 gap-4">
                  <motion.div 
                    className="bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border hover:-translate-y-1 transition-all duration-300"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient">2019</div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                      {t("about.stats.founded")}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-primary rounded-2xl p-5 md:p-6 shadow-card text-primary-foreground mt-6 md:mt-8 hover:-translate-y-1 transition-all duration-300"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl md:text-4xl font-bold">100%</div>
                    <div className="mt-2 text-xs md:text-sm opacity-90">
                      {t("about.stats.commitment")}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-secondary rounded-2xl p-5 md:p-6 shadow-soft hover:-translate-y-1 transition-all duration-300"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-foreground">24/7</div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                      {t("about.stats.support")}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border mt-6 md:mt-8 hover:-translate-y-1 transition-all duration-300"
                    variants={fadeInUp}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient">B2B</div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground">
                      {t("about.stats.focused")}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2: DIRECTOR MESSAGE */}
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Sisi Kiri: Pesan Direktur */}
              <motion.div 
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block" variants={fadeInUp}>
                  {t("director.badge")}
                </motion.span>
                <motion.h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" variants={fadeInUp}>
                  {t("director.title")}
                </motion.h2>
                <motion.p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed" variants={fadeInUp}>
                  {t("director.p1")}
                </motion.p>
                <motion.div className="mt-6 italic text-foreground/80 relative" variants={fadeInUp}>
                  <span className="absolute -left-3 top-0 text-4xl text-primary select-none">“</span>
                  <p className="pl-4 text-sm md:text-base">{t("director.quote")}</p>
                </motion.div>
              </motion.div>

              {/* Sisi Kanan: Foto Direktur */}
              <motion.div 
                className="w-full flex flex-col items-center pt-2 lg:pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
              >
                <div className="relative w-full max-w-sm lg:max-w-md flex flex-col items-center">
                  <img
                    src="/director.webp"
                    alt={t("director.name")}
                    className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px] h-auto object-contain"
                  />
                  <div className="absolute bottom-8 left-0 w-full h-1 bg-gradient-to-t from-white/90 via-white/50 to-transparent pointer-events-none" />
                  <p className="mt-4 text-center text-sm md:text-base">
                    <span className="font-semibold text-foreground">{t("director.name")}</span>
                    <span className="text-muted-foreground">
                      , {t("director.role")}
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          {/* SLIDE 3: LEGALITY DOCUMENTS */}
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Sisi Kiri: Teks Dokumen */}
              <motion.div 
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block" variants={fadeInUp}>
                  {t("legal.badge")}
                </motion.span>
                <motion.h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" variants={fadeInUp}>
                  {t("legal.title")}
                </motion.h2>
                <motion.p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed" variants={fadeInUp}>
                  {t("legal.subtitle")}
                </motion.p>
              </motion.div>

              {/* Sisi Kanan: Daftar Card Dokumen Terstagger */}
              <motion.div 
                className="w-full space-y-4 max-w-xl mx-auto lg:mx-0 pt-2 lg:pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                {legalDocs.map((doc) => (
                  <motion.div
                    key={doc.key}
                    variants={fadeInUp}
                    className="group flex items-center justify-between p-3.5 md:p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 md:gap-4 min-w-0">
                      <div className="p-2.5 md:p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                        <FileText className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-foreground text-xs md:text-base truncate">
                          {t(`legal.items.${doc.key}`)}
                        </h4>
                        <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider font-medium mt-0.5">
                          {doc.type} Document
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setPreviewDoc({
                          path: doc.path,
                          type: doc.type as "image" | "pdf",
                          title: t(`legal.items.${doc.key}`),
                        })
                      }
                      className="flex items-center gap-1.5 px-3 py-2 md:px-3.5 text-[11px] md:text-xs font-semibold text-primary bg-primary/5 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm shrink-0 ml-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t("legal.viewBtn")}</span>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* SECURE VIEW-ONLY PREVIEW MODAL LIGHTBOX */}
      {previewDoc && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative bg-background rounded-2xl w-full max-w-4xl h-[80vh] md:h-[85vh] flex flex-col shadow-2xl border border-border overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card select-none">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground text-base md:text-lg truncate max-w-[180px] sm:max-w-md md:max-w-xl">
                  {previewDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 w-full h-full bg-muted/10 relative overflow-hidden">
              {previewDoc.type === "image" ? (
                <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
                  <img
                    src={previewDoc.path}
                    alt={previewDoc.title}
                    className="max-w-full max-h-full object-contain rounded-md shadow-sm pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-white">
                  <iframe
                    src={`${previewDoc.path}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title={previewDoc.title}
                    className="w-full h-full border-none block"
                  />
                </div>
              )}
            </div>

            <div className="px-6 py-2.5 bg-card border-t border-border text-center select-none">
              <p className="text-[11px] text-muted-foreground tracking-wide font-medium">
                 Mode Aman Terproteksi -    Dokumen ini hanya bersifat Pratinjau Terbatas (View-Only)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;