import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import VisionMission from "@/components/site/VisionMission";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import Activities from "@/components/site/Activities";
import Clients from "@/components/site/Clients";

import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Projects />
      <Activities />
      <Clients />
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
