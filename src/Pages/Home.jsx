import ThemeToggle from "./Components/ThemeToggle";
import StarBackground from "./Components/StarBackground";



const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center overflow-x-hidden">
      <h1>Welcome to the Home Page</h1>
      <ThemeToggle />
      <StarBackground />
    </div>
  );
};

export default Home;
