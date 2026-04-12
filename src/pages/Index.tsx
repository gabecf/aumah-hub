import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <div
        className="relative z-10 rounded-t-[20px] bg-[#f5f4f2] shadow-[0_-12px_40px_rgba(0,0,0,0.25)]"
      >
        <About />
        <Services />
        <Cases />
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
