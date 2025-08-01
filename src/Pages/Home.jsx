import ThemeToggle from "./Components/ThemeToggle";
import StarBackground from "./Components/StarBackground";
import Navbar from "./Components/Navbar";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-x-hidden">
      <h1>Welcome to the Home Page</h1>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
    </div>
  );
};

export default Home;
