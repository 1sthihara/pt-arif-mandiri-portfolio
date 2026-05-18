import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

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
      "/projects/pgascom/1.png",
      "/projects/pgascom/2.png",
      "/projects/pgascom/3.png",
      "/projects/pgascom/4.png",
      "/projects/pgascom/5.png",
      "/projects/pgascom/6.png",
      "/projects/pgascom/7.png",
      "/projects/pgascom/8.png",
      "/projects/pgascom/9.png",
    ],
  },
  {
    id: "p2",
    tag: "Deployment",
    images: [
      "/projects/bpbatam/1.jpeg",
      "/projects/bpbatam/2.jpeg",
      "/projects/bpbatam/3.jpeg",
      "/projects/bpbatam/4.jpeg",
      "/projects/bpbatam/5.jpeg",
      "/projects/bpbatam/6.jpeg",
      "/projects/bpbatam/7.jpeg",
      "/projects/bpbatam/8.jpeg",
      "/projects/bpbatam/9.jpeg",
    ],
  },
  {
    id: "p3",
    tag: "Field Operation",
    images: [
      "/projects/pulling/1.png",
      "/projects/pulling/2.png",
      "/projects/pulling/3.png",
      "/projects/pulling/4.png",
      "/projects/pulling/5.png",
      "/projects/pulling/6.png",
    ],
  },
  {
    id: "p4",
    tag: "Civil Works",
    images: [
      "/projects/penggalian/1.jpeg",
      "/projects/penggalian/2.jpeg",
      "/projects/penggalian/3.jpeg",
      "/projects/penggalian/4.jpeg",
      "/projects/penggalian/5.jpeg",
      "/projects/penggalian/6.jpeg",
      "/projects/penggalian/7.jpeg",
      "/projects/penggalian/8.jpeg",
      "/projects/penggalian/9.jpeg",
      "/projects/penggalian/10.jpeg",
      "/projects/penggalian/11.jpeg",
      "/projects/penggalian/12.jpeg",
      "/projects/penggalian/13.jpeg",
      "/projects/penggalian/14.jpeg",
      "/projects/penggalian/15.jpeg",
    ],
  },
  {
    id: "p5",
    tag: "Splicing",
    images: [
      "/projects/splicing/1.png",
      "/projects/splicing/2.png",
      "/projects/splicing/3.png",
      "/projects/splicing/4.png",
    ],
  },
  {
    id: "p6",
    tag: "Maintenance",
    images: [
      "/projects/cctv/1.png",
      "/projects/cctv/2.png",
      "/projects/cctv/3.jpeg",
      "/projects/cctv/4.jpeg",
      "/projects/cctv/5.jpeg",
      "/projects/cctv/6.jpeg",
      "/projects/cctv/7.jpeg",
      "/projects/cctv/8.jpeg",
    ],
  },
  {
    id: "p7",
    tag: "Civil Works",
    images: [
      "/projects/polda/1.jpeg",
      "/projects/polda/2.jpeg",
      "/projects/polda/3.jpeg",
      "/projects/polda/4.jpeg",
      "/projects/polda/5.jpeg",
      "/projects/polda/6.jpeg",
      "/projects/polda/7.jpeg",
      "/projects/polda/8.jpeg",
      "/projects/polda/9.jpeg",
      "/projects/polda/10.jpeg",
      "/projects/polda/11.jpeg",
      "/projects/polda/12.jpeg",
      "/projects/polda/13.jpeg",
      "/projects/polda/14.jpeg",
      "/projects/polda/15.jpeg",
      "/projects/polda/16.jpeg",
      "/projects/polda/17.jpeg",
      "/projects/polda/18.jpeg",
      "/projects/polda/19.jpeg",
      "/projects/polda/20.jpeg",
      "/projects/polda/21.jpeg",
      "/projects/polda/22.jpeg",
      "/projects/polda/23.jpeg",
      "/projects/polda/24.jpeg",
      "/projects/polda/25.jpeg",
      "/projects/polda/26.jpeg",
      "/projects/polda/27.jpeg",
      "/projects/polda/28.jpeg",
      "/projects/polda/29.jpeg",
      "/projects/polda/30.jpeg",
      "/projects/polda/31.jpeg",
      "/projects/polda/32.jpeg",
      "/projects/polda/33.jpeg",
      "/projects/polda/34.jpeg",
      "/projects/polda/35.jpeg",
      "/projects/polda/36.jpeg",
      "/projects/polda/37.jpeg",
      "/projects/polda/38.jpeg",
      "/projects/polda/39.jpeg",
    ],
  },
  {
    id: "p8",
    tag: "Infrastructure",
    images: [
      "/projects/southlink/1.jpeg",
      "/projects/southlink/2.jpeg",
      "/projects/southlink/3.jpeg",
    ],
  },
  {
    id: "p9",
    tag: "Maintenance",
    images: [
      "/projects/bpjs/1.jpeg",
      "/projects/bpjs/2.jpeg",
      "/projects/bpjs/3.jpeg",
      "/projects/bpjs/4.jpeg",
      "/projects/bpjs/5.jpeg",
      "/projects/bpjs/6.jpeg",
      "/projects/bpjs/7.jpeg",
      "/projects/bpjs/8.jpeg",
      "/projects/bpjs/9.jpeg",
      "/projects/bpjs/10.jpeg",
      "/projects/bpjs/11.jpeg",
      "/projects/bpjs/12.jpeg",
      "/projects/bpjs/13.jpeg",
      "/projects/bpjs/14.jpeg",
      "/projects/bpjs/15.jpeg",
      "/projects/bpjs/16.jpeg",
      "/projects/bpjs/17.jpeg",
      "/projects/bpjs/18.jpeg",
      "/projects/bpjs/19.jpeg",
      "/projects/bpjs/20.jpeg",
      "/projects/bpjs/21.jpeg",
      "/projects/bpjs/22.jpeg",
      "/projects/bpjs/23.jpeg",
      "/projects/bpjs/24.jpeg",
      "/projects/bpjs/25.jpeg",
      "/projects/bpjs/26.jpeg",
      "/projects/bpjs/27.jpeg",
      "/projects/bpjs/28.jpeg",
      "/projects/bpjs/29.jpeg",
      "/projects/bpjs/30.jpeg",
      "/projects/bpjs/31.jpeg",
      "/projects/bpjs/32.jpeg",
      "/projects/bpjs/33.jpeg",
      "/projects/bpjs/34.jpeg",
      "/projects/bpjs/35.jpeg",
      "/projects/bpjs/36.jpeg",
      "/projects/bpjs/37.jpeg",
      "/projects/bpjs/38.jpeg",
      "/projects/bpjs/39.jpeg",
      "/projects/bpjs/40.jpeg",
      "/projects/bpjs/41.jpeg",
      "/projects/bpjs/42.jpeg",
      "/projects/bpjs/43.jpeg",
      "/projects/bpjs/44.jpeg",
      "/projects/bpjs/45.jpeg",
      "/projects/bpjs/46.jpeg",
      "/projects/bpjs/47.jpeg",
      "/projects/bpjs/48.jpeg",
    ],
    
  },
  {
    id: "p10",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.jpg"],
  },
  {
    id: "p11",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.jpg"],
  },
  {
    id: "p12",
    tag: "Upcoming Project",
    images: ["/projects/placeholder.jpg"],
  },
];

// Konfigurasi Animasi Halus & Ringan (Hardware Accelerated)
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
      staggerChildren: 0.06, // Sekuensial super cepat untuk performa grid mobile
    },
  },
};

const Projects = () => {
  const { t } = useTranslation();
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Membagi array data proyek menjadi beberapa grup (masing-masing grup berisi 6 item)
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
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div className="max-w-2xl">
            <motion.span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary block" variants={fadeInUp}>
              {t("projects.badge")}
            </motion.span>
            <motion.h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground" variants={fadeInUp}>
              {t("projects.title")}
            </motion.h2>
            <motion.p className="mt-4 text-muted-foreground" variants={fadeInUp}>
              {t("projects.subtitle")}
            </motion.p>
          </div>
        </motion.div>

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
            className="pb-14 overflow-hidden px-2"
          >
            {projectSlides.map((slideItems, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {/* GRID SYSTEM INSIDE SLIDE */}
                <motion.div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={staggerContainer}
                >
                  {slideItems.map((p) => (
                    <motion.article
                      key={p.id}
                      variants={fadeInUp}
                      className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* IMAGE */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                        <img
                          src={p.images[0]}
                          alt={t(`projects.items.${p.id}`)}
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
                    </motion.article>
                  ))}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL GALLERY WITH ANIMATEPRESENCE */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
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
              {/* Image Transition menggunakan key untuk efek crossfade instan yang mewah */}
              <motion.img
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

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;