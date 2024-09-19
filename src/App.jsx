import "./index.css";
import AboutSection from "./Components/AboutSection";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import TestimonialSection from "./Components/TestimonialSection";
import WorkSection from "./Components/WorkSection";

function App() {
  return (
    <>
      <body className="bg-black text-white scroll-smooth">
        <Header />
        <HeroSection id="hero" />
        <WorkSection id="how-it-works" />
        <AboutSection id="about" />
        <TestimonialSection id="testimonials" />
        <ContactSection id="contact" />
        <Footer />
      </body>
    </>
  );
}

export default App;
