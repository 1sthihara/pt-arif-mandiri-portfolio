import { CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const points = [
  "Specialized in fiber optic & telecom infrastructure",
  "Skilled engineering and field operation teams",
  "Proven delivery for enterprise & government clients",
  "Providing reliable services throughout Batam",
];

const About = () => {
  return (
<section id="about" className="section-py bg-background">
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
      className="pb-12 overflow-hidden px-2"
    >
          <SwiperSlide>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  About Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Building the Backbone of Modern Connectivity
                </h2>
                <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">PT. ARIF MANDIRI</strong> is a trusted general contractor specializing in telecommunication infrastructure, fiber optic installation, and network solutions. Established in <strong className="text-foreground">2019</strong> and headquartered in Batam, we partner with leading telecom and infrastructure companies to deliver reliable, future-ready networks.
                </p>

                <ul className="mt-8 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <div className="text-4xl font-bold text-gradient">2019</div>
                    <div className="mt-2 text-sm text-muted-foreground">Founded in Batam</div>
                  </div>
                  <div className="bg-primary rounded-2xl p-6 shadow-card text-primary-foreground mt-8">
                    <div className="text-4xl font-bold">100%</div>
                    <div className="mt-2 text-sm opacity-90">Project commitment</div>
                  </div>
                  <div className="bg-secondary rounded-2xl p-6 shadow-soft">
                    <div className="text-4xl font-bold text-foreground">24/7</div>
                    <div className="mt-2 text-sm text-muted-foreground">Maintenance support</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border mt-8">
                    <div className="text-4xl font-bold text-gradient">B2B</div>
                    <div className="mt-2 text-sm text-muted-foreground">Enterprise focused</div>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>

    <SwiperSlide>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Director Message
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            A Word from Our Director
          </h2>

          <p className="mt-6 text-muted-foreground leading-relaxed">
            At <strong className="text-foreground">PT. ARIF MANDIRI</strong>, we are committed to delivering excellence in every project.
            Our goal is to provide reliable, high-quality telecommunication solutions that support
            long-term infrastructure growth across Batam.
          </p>

                <div className="mt-6 italic text-foreground/80 relative">
        <span className="absolute -left-3 top-0 text-4xl text-primary">“</span>
        <p className="pl-4">
          Building strong connections today for a better, more reliable, and more connected tomorrow. We are committed to delivering quality solutions that empower growth and innovation.
        </p>
      </div>


        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center">
          <div className="relative">

            <img
              src="/director.png"
              alt="Director"
              className="w-80 md:w-[360px] lg:w-[440px] h-auto object-contain"
            />

            {/* Fade bawah */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-white/90 via-white/50 to-transparent pointer-events-none" />
            
            <p className="mt-4 text-center">
              <span className="font-semibold">Judi Harianto</span>
              <span className="text-muted-foreground">, Director</span>
            </p>
          </div>
        </div>

      </div>
    </SwiperSlide>
</Swiper>
  </div>
</section>
);
};

export default About;