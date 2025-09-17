import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import Services from "@/components/sections/Services";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import ScrollTriggerAnim from "@/components/animations/ScrollTrigger";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        {/* Animate all section headings on scroll */}
        <ScrollTriggerAnim selector=".section-heading" y={24} />
        <HeroBanner />
        <Services />
        <AboutUs />
        <Testimonials />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
