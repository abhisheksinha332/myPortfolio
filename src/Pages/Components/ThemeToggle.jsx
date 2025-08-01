import {Sun, Moon} from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

const ThemeToggle = () => {

    const [isdarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem("theme");  
        if(theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }else if(theme === "light") {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if(!isdarkMode) {
          document.documentElement.classList.add("dark"); 
          localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

    };
  return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 p-1 rounded-full transition-colors",
    "duration-300 focus:outline-hidden z-10"
  )}>
    {isdarkMode ? (
      <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
      <Moon className="h-6 w-6 text-blue-900" />
    )}
  </button>
};

export default ThemeToggle;
