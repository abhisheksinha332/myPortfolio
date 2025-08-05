import ThemeToggle from "./Components/ThemeToggle";
import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-x-hidden">
      
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
