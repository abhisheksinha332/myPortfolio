import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Skills", href: "#skills" },
];



const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);    
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
            window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <nav className= {cn(
      "fixed top-0 left-0 w-full bg-background text-foreground flex items-center justify-between p-4 shadow-md",
      "transition-all duration-300 ease-in-out",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py=5")}>


        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary     flex items-center">
                <span className="relative z-10">
                   <span className="text-glow text-[hsl(var(--primary))]">Abhishek Sinha</span> Portfolio
                </span>
            </a>
            <div>
                {navItems.map((item) => (
                    <a key={item.name} href={item.href}  className="mx-2 text-[hsl(var(--foreground)/0.8)] hover:text-[hsl(var(--primary))] transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>
            {/* <div className={cn(
                "hidden inset-0 bg-[hsl(var(--background)/0.8)] backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
            )}>
                <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <a key={item.name} href={item.href}  className="mx-2 text-[hsl(var(--foreground)/0.8)] hover:text-[hsl(var(--primary))] transition-colors duration-300">
                        {item.name}
                    </a>
                ))}
            </div>
            </div> */}
            
        </div>
    </nav>
  );
}

export default Navbar;