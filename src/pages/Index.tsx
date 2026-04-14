import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div
        className="relative z-10 -mt-6 overflow-hidden rounded-t-[24px] shadow-[0_-16px_48px_rgba(0,0,0,0.3)]"
      >
        <About />
        <Services />
        <Cases />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
};

export default Index;
