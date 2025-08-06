import ThemeToggle from "./Components/ThemeToggle";
import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import SkillsSection from "./Components/SkillsSection";



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
      </main>

    </div>
  );
};

export default Home;
