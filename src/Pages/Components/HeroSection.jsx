import { Button } from "@mui/material";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex flex-col items-center justify-center px-4" id="home">
     <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
                <span className="animate-fade-in opacity-0">Hi, I'm </span>
                <span className="animate-fade-in-delay-1 opacity-0 primary-color">Abhishek </span>
                <span className="animate-fade-in-delay-2 opacity-0">Sinha</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3=4xl mx-auto opacity-0 animate-fade-in-delay-3"> 
                DevOps Engineer with 3 years of IT experience, including 2 years in DevOps and 1 year in Monitoring & Incident Management. Worked closely with the Microsoft team to support the Renault-Nissan Alliance (RNA) on Microsoft Connected Vehicle Platform (MCVP). Recognized for developing impactful automations that reduced manual effort and human error. Early experience in IoT and AI through hands-on internship work.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-delay-4 opacity-0">
                <Button className="primary-button" sx={{ borderRadius: '9999px' }} variant="contained" href="#contact">
                    <a href="#projects" className="">
                        View Projects
                    </a>
                </Button>
            </div>
        </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
       
            <span className="text-small text-muted-foregound mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 primary-color"/>
     
    </div>
    </section>
  );
};
export default HeroSection;