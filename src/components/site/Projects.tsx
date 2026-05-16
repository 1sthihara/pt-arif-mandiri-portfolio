import { useEffect, useState } from "react";
import { X } from "lucide-react";

const projects = [
  {
    title: "PGASCOM Fiber Optic Project",
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
    title: "FO Network Deployment",
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
    title: "Cable Pulling & Installation",
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
    title: "HDPE Installation",
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
    title: "FO Splicing Activity",
    tag: "Splicing",
    images: [
      "/projects/splicing/1.png",
      "/projects/splicing/2.png",
      "/projects/splicing/3.png",
      "/projects/splicing/4.png",
    ],
  },

  {
    title: "Network Infrastructure Upgrade",
    tag: "Maintenance",
    images: [
      "/projects/cctv/1.png",
      "/projects/cctv/2.png",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    if (
      e.key === "ArrowLeft" &&
      currentIndex > 0
    ) {
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
    <section id="projects" className="section-py bg-secondary/40">
      <div className="container-px max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Portfolio
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Selected Projects
            </h2>

            <p className="mt-4 text-muted-foreground">
              A snapshot of recent work delivered for our enterprise and infrastructure partners.
            </p>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p) => (
            <article
              key={p.title}
              className="
                group
                bg-card
                rounded-2xl
                overflow-hidden
                shadow-soft
                border
                border-border
                hover:shadow-elevated
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">

                <img
                  src={p.images[0]}
                  alt={p.title}
                  onClick={() => {
                    setActiveProject(p);
                    setCurrentIndex(0);
                  }}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                    hover:grayscale-0
                    transition-all
                    duration-500
                    cursor-pointer
                  "
                />

                {/* TAG */}
                <span
                  className="
                    absolute
                    top-4
                    left-4
                    px-3
                    py-1
                    rounded-full
                    bg-background/80
                    backdrop-blur
                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  {p.tag}
                </span>

              </div>

              {/* TEXT */}
              <div className="p-6">

                <h3
                  className="
                    text-lg
                    font-bold
                    text-foreground
                    group-hover:text-primary
                    transition
                  "
                >
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Delivered with precision engineering and on-schedule execution.
                </p>

              </div>

            </article>
          ))}

        </div>
      </div>

      {/* MODAL GALLERY */}
      {activeProject && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-4
          "
        >

          {/* CLOSE */}
          <button
            onClick={() => setActiveProject(null)}
            className="
              absolute
              top-5
              right-5
              text-white
              hover:opacity-70
              transition
            "
          >
            <X size={34} />
          </button>

          {/* IMAGE */}
          <div
            className="relative"
            onClick={(e) => {
              const screenWidth = window.innerWidth;
              const clickX = e.clientX;

              if (
                clickX > screenWidth / 2 &&
                currentIndex < activeProject.images.length - 1
              ) {
                nextSlide();
              }

              if (
                clickX < screenWidth / 2 &&
                currentIndex > 0
              ) {
                prevSlide();
              }
            }}
          >
            <img
              src={activeProject.images[currentIndex]}
              alt=""
            className="
              max-w-[95vw]
              max-h-[90vh]
              object-contain
              rounded-xl
              shadow-2xl
              select-none
            "
            />
            </div>

          {/* COUNTER */}
          <div
            className="
              absolute
              bottom-6
              text-white/80
              text-sm
            "
          >
            {currentIndex + 1} / {activeProject.images.length}
          </div>

        </div>
      )}
    </section>
  );
};

export default Projects;