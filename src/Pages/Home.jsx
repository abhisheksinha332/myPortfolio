import ThemeToggle from "./Components/ThemeToggle";
import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import SkillsSection from "./Components/SkillsSection";
import ProjectSection from "./Components/ProjectSection";
import ContactSection from "./Components/ContactSection";
import FooterComponent from "./Components/FooterComponent";
import ScrollToTop from "./Components/ScrollToTop";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-x-hidden">
      
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        {/* Add other sections like Contact, Footer, etc. here */}
        <FooterComponent />
        <ScrollToTop />
      </main>
        
    </div>
  );
};

export default Home;
