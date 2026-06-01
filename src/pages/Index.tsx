import { lazy, Suspense } from "react";
// 1. Komponen Utama (Above-the-Fold) - Tetap dimuat instan agar LCP cepat
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";

// 2. OPTIMASI: Komponen Bawah (Below-the-Fold) - Di-lazy load murni lewat kode
const About = lazy(() => import("@/components/site/About"));
const VisionMission = lazy(() => import("@/components/site/VisionMission"));
const Services = lazy(() => import("@/components/site/Services"));
const Projects = lazy(() => import("@/components/site/Projects"));
const Activities = lazy(() => import("@/components/site/Activities"));
const Clients = lazy(() => import("@/components/site/Clients"));
const Contact = lazy(() => import("@/components/site/Contact"));
const Footer = lazy(() => import("@/components/site/Footer"));

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Bagian atas layar langsung tampil tanpa nunggu */}
      <Navbar />
      <Hero />
      
      {/* Bagian bawah layar ditunda sampai halaman utama siap render */}
      <Suspense fallback={<div className="h-40 w-full bg-transparent" />}>
        <About />
        <VisionMission />
        <Services />
        <Projects />
        <Activities />
        <Clients />
        
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
};

export default Index;