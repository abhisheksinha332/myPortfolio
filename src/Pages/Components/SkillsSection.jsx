import { Button, LinearProgress, Stack } from "@mui/material";
import {act, useState} from "react";
import { cn } from "../../lib/utils";

const Skills = [
    {name: "JavaScript",level: "95",Category: "frontend"},
    {name: "React",level: "90",Category: "frontend"},
    {name: "CSS",level: "80",Category: "frontend"},
    {name: "HTML",level: "90",Category: "frontend"},

    {name: "Node.js",level: "85",Category: "backend"},
    {name: "Express",level: "80",Category: "backend"},
    {name: "MongoDB",level: "75",Category: "backend"},
    {name: "PHP",level: "70",Category: "backend"},

    {name: "Git/GitHub",level: "85",Category: "tools"},
    {name: "Docker",level: "70",Category: "tools"},
    {name: "CI/CD",level: "65",Category: "tools"},
    {name: "Agile Methodologies",level: "75",Category: "tools"},
    {name: "VS Code",level: "90",Category: "tools"},
    {name: "Azure DevOps",level: "70",Category: "tools"},
    {name: "Azure Cloud",level: "65",Category: "tools"},
];

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const categories = ["all", "frontend", "backend", "tools"];
    const filteredSkills = activeCategory === "all" ? Skills : Skills.filter(skill => skill.Category === activeCategory);

  return (
    <section className="skills-section py-24 px-4 relative bg-secondary/30" id="skills">
        <div className="container mx-auto max-w-5xl"> 
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="primary-color">Skills</span></h2>
        
        <div className="flex justify-center mb-12 gap-4">
            {
                categories.map((category, index) => (
                   <Button
                       key={index}
                          variant={activeCategory === category ? "contained" : "outlined"}
                          sx={{borderRadius: '9999px', paddingX: '1rem'}}
                       onClick={() => setActiveCategory(category)}
                   >
                       {category}
                   </Button>
                ))
            }
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover hover:shadow-xl transition-shadow duration-300">
              <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
             <Stack>
                {/* <BorderLinearProgress variant="determinate" value={skill.level} /> */}
                <LinearProgress variant="determinate" value={skill.level} className="my-2" />
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
             </Stack>
             </div>
          ))}
          </div>
        </div>
    </section>
  );
}

export default SkillsSection;