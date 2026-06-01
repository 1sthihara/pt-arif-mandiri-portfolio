import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { m, AnimatePresence } from "framer-motion";

// Import Swiper React components dan modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: "p1",
    tag: "Backbone Network",
    images: [
      "/projects/pgascom/1.webp",
      "/projects/pgascom/2.webp",
      "/projects/pgascom/3.webp",
      "/projects/pgascom/4.webp",
      "/projects/pgascom/5.webp",
      "/projects/pgascom/6.webp",
      "/projects/pgascom/7.webp",
      "/projects/pgascom/8.webp",
      "/projects/pgascom/9.webp",
    ],
  },
  {
    id: "p2",
    tag: "Deployment",
    images: [
      "/projects/bpbatam/1.webp",
      "/projects/bpbatam/2.webp",
      "/projects/bpbatam/3.webp",
      "/projects/bpbatam/4.webp",
      "/projects/bpbatam/5.webp",
      "/projects/bpbatam/6.webp",
      "/projects/bpbatam/7.webp",
      "/projects/bpbatam/8.webp",
      "/projects/bpbatam/9.webp",
    ],
  },
  {
    id: "p3",
    tag: "Field Operation",
    images: [
      "/projects/pulling/1.webp",
      "/projects/pulling/2.webp",
      "/projects/pulling/3.webp",
      "/projects/pulling/4.webp",
      "/projects/pulling/5.webp",
      "/projects/pulling/6.webp",
    ],
  },
  {
    id: "p4",
    tag: "Civil Works",
    images: [
      "/projects/penggalian/1.webp",
      "/projects/penggalian/2.webp",
      "/projects/penggalian/3.webp",
      "/projects/penggalian/4.webp",
      "/projects/penggalian/5.webp",
      "/projects/penggalian/6.webp",
      "/projects/penggalian/7.webp",
      "/projects/penggalian/8.webp",
      "/projects/penggalian/9.webp",
      "/projects/penggalian/10.webp",
      "/projects/penggalian/11.webp",
      "/projects/penggalian/12.webp",
      "/projects/penggalian/13.webp",
      "/projects/penggalian/14.webp",
      "/projects/penggalian/15.webp",
    ],
  },
  {
    id: "p5",
    tag: "Splicing",
    images: [
      "/projects/splicing/1.webp",
      "/projects/splicing/2.webp",
      "/projects/splicing/3.webp",
      "/projects/splicing/4.webp",
    ],
  },
  {
    id: "p6",
    tag: "Maintenance",
    images: [
      "/projects/cctv/1.webp",
      "/projects/cctv/2.webp",
      "/projects/cctv/3.webp",
      "/projects/cctv/4.webp",
      "/projects/cctv/5.webp",
      "/projects/cctv/6.webp",
      "/projects/cctv/7.webp",
      "/projects/cctv/8.webp",
    ],
  },
  {
    id: "p7",
    tag: "Civil Works",
    images: [
      "/projects/polda/1.webp",
      "/projects/polda/2.webp",
      "/projects/polda/3.webp",
      "/projects/polda/4.webp",
      "/projects/polda/5.webp",
      "/projects/polda/6.webp",
      "/projects/polda/7.webp",
      "/projects/polda/8.webp",
      "/projects/polda/9.webp",
      "/projects/polda/10.webp",
      "/projects/polda/11.webp",
      "/projects/polda/12.webp",
      "/projects/polda/13.webp",
      "/projects/polda/14.webp",
      "/projects/polda/15.webp",
      "/projects/polda/16.webp",
      "/projects/polda/17.webp",
      "/projects/polda/18.webp",
      "/projects/polda/19.webp",
      "/projects/polda/20.webp",
      "/projects/polda/21.webp",
      "/projects/polda/22.webp",
      "/projects/polda/23.webp",
      "/projects/polda/24.webp",
      "/projects/polda/25.webp",
      "/projects/polda/26.webp",
      "/projects/polda/27.webp",
      "/projects/polda/28.webp",
      "/projects/polda/29.webp",
      "/projects/polda/30.webp",
      "/projects/polda/31.webp",
      "/projects/polda/32.webp",
      "/projects/polda/33.webp",
      "/projects/polda/34.webp",
      "/projects/polda/35.webp",
      "/projects/polda/36.webp",
      "/projects/polda/37.webp",
      "/projects/polda/38.webp",
      "/projects/polda/39.webp",
    ],
  },
  {
    id: "p8",
    tag: "Infrastructure",
    images: [
      "/projects/southlink/1.webp",
      "/projects/southlink/2.webp",
      "/projects/southlink/3.webp",
    ],
  },
  {
    id: "p9",
    tag: "Maintenance",
    images: [
      "/projects/bpjs/1.webp",
      "/projects/bpjs/2.webp",
      "/projects/bpjs/3.webp",
      "/projects/bpjs/4.webp",
      "/projects/bpjs/5.webp",
      "/projects/bpjs/6.webp",
      "/projects/bpjs/7.webp",
      "/projects/bpjs/8.webp",
      "/projects/bpjs/9.webp",
      "/projects/bpjs/10.webp",
      "/projects/bpjs/11.webp",
      "/projects/bpjs/12.webp",
      "/projects/bpjs/13.webp",
      "/projects/bpjs/14.webp",
      "/projects/bpjs/15.webp",
      "/projects/bpjs/16.webp",
      "/projects/bpjs/17.webp",
      "/projects/bpjs/18.webp",
      "/projects/bpjs/19.webp",
      "/projects/bpjs/20.webp",
      "/projects/bpjs/21.webp",
      "/projects/bpjs/22.webp",
      "/projects/bpjs/23.webp",
      "/projects/bpjs/24.webp",
      "/projects/bpjs/25.webp",
      "/projects/bpjs/26.webp",
      "/projects/bpjs/27.webp",
      "/projects/bpjs/28.webp",
      "/projects/bpjs/29.webp",
      "/projects/bpjs/30.webp",
      "/projects/bpjs/31.webp",
      "/projects/bpjs/32.webp",
      "/projects/bpjs/33.webp",
      "/projects/bpjs/34.webp",
      "/projects/bpjs/35.webp",
      "/projects/bpjs/36.webp",
      "/projects/bpjs/37.webp",
      "/projects/bpjs/38.webp",
      "/projects/bpjs/39.webp",
      "/projects/bpjs/40.webp",
      "/projects/bpjs/41.webp",
      "/projects/bpjs/42.webp",
      "/projects/bpjs/43.webp",
      "/projects/bpjs/44.webp",
      "/projects/bpjs/45.webp",
      "/projects/bpjs/46.webp",
      "/projects/bpjs/47.webp",
      "/projects/bpjs/48.webp",
      "/projects/bpjs/49.webp",
      "/projects/bpjs/50.webp",
    ],
  },
  {
    id: "p10",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.webp"],
  },
  {
    id: "p11",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.webp"],
  },
  {
    id: "p12",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.webp"],
  },
];

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
      staggerChildren: 0.06,
    },
  },
};

const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 6;
  const projectSlides = Array.from(
    { length: Math.ceil(projects.length / itemsPerPage) },
    (_, index) => projects.slice(index * itemsPerPage, (index + 1) * itemsPerPage)
  );

  const nextSlide = () => {
    if (currentIndex < activeProject.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;

      if (
        e.key === "ArrowRight" &&
        currentIndex < activeProject.images.length - 1
      ) {
        setCurrentIndex((prev) => prev + 1);
      }

      // FIX LOGIKA: ArrowLeft harusnya dikurang 1 (prev - 1)
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }

      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, currentIndex]);

  return (
    <section id="projects" className="section-py bg-secondary/40 overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        
        {/* HEADER */}
        <m.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div className="max-w-2xl">
            <m.span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block" variants={fadeInUp}>
              {t("projects.badge")}
            </m.span>
            <m.h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" variants={fadeInUp}>
              {t("projects.title")}
            </m.h2>
            <m.p className="mt-4 text-muted-foreground" variants={fadeInUp}>
              {t("projects.subtitle")}
            </m.p>
          </div>
        </m.div>

        {/* SWIPER CONTAINER */}
        <div className="mt-14">
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
            lazy="true"
            className="pb-14 overflow-hidden px-2"
          >
            {projectSlides.map((slideItems, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {/* GRID SYSTEM INSIDE SLIDE */}
                <m.div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={staggerContainer}
                >
                  {slideItems.map((p) => (
                    <m.article
                      key={p.id}
                      variants={fadeInUp}
                      className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                        <img
                          src={p.images[0]}
                          alt={t(`projects.items.${p.id}`)}
                          loading="lazy"
                          onClick={() => {
                            setActiveProject(p);
                            setCurrentIndex(0);
                          }}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        />

                        {/* TAG */}
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium text-primary">
                          {p.tag}
                        </span>
                      </div>

                      {/* TEXT */}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
                          {t(`projects.items.${p.id}`)}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {t("projects.defaultDesc")}
                        </p>
                      </div>
                    </m.article>
                  ))}
                </m.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL GALLERY WITH ANIMATEPRESENCE */}
      <AnimatePresence>
        {activeProject && (
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            
            {/* CLOSE */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 text-white hover:opacity-70 transition z-50"
            >
              <X size={34} />
            </button>

            {/* IMAGE CLICK HANDLER */}
            <div
              className="relative cursor-pointer"
              onClick={(e) => {
                const screenWidth = window.innerWidth;
                const clickX = e.clientX;

                if (
                  clickX > screenWidth / 2 &&
                  currentIndex < activeProject.images.length - 1
                ) {
                  nextSlide();
                }

                if (clickX < screenWidth / 2 && currentIndex > 0) {
                  prevSlide();
                }
              }}
            >
              {/* FIX TYPO: Mengubah <main.img> menjadi <m.img> */}
              <m.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                src={activeProject.images[currentIndex]}
                alt=""
                className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl shadow-2xl select-none"
              />
            </div>

            {/* COUNTER */}
            <div className="absolute bottom-6 text-white/80 text-sm font-medium tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur">
              {currentIndex + 1} / {activeProject.images.length}
            </div>

          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;