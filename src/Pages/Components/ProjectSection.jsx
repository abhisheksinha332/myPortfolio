import { ArrowRight, Github, Tags } from "lucide-react";
import news from "../../assets/news-min.png";
import insomnia from "../../assets/insomnia-min.PNG";
import spotify from "../../assets/spotify-min.png";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";



const Projects = [
  { id: 1, 
    title: "MUSIC WEBSITE (SPOTIFY)", 
    description: "A music application supported by Spotify data that lets users to search songs of different categories, genres and singers that is being fetched by the Spotify API.", 
    link: "https://github.com/abhisheksinha332/react-spotify-app", 
    Tags: ['React', 'Spotify API', 'Music'],
    image: spotify
},
  { id: 2, 
    title: "SOCIAL MEDIA WEBSITE",
    description: "Application in which you can create your own post and also modify, delete your posts as well as see others post. Created using Reactjs, Nodejs, Expressjs, mongoose, mongoDb and many more...",
     link: "https://github.com/abhisheksinha332/MERNstack", 
     Tags: ['React', 'Node.js', 'Express', 'MongoDB'],
     image: insomnia
},
  { id: 3, 
    title: "NEWS WEBSITE",
     description: "A voice controlled website for news information which acts accordingly to the users voice with the help of Alan AI.",
    link: "https://github.com/abhisheksinha332/react-news-ai", 
    Tags: ['React', 'Alan AI', 'News'],
    image: news
},
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cemter">My <span className="primary-color">Projects</span></h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {Projects.map((project) => (

          <div key={project.id} >
            <Card sx={{ maxWidth: 345, backgroundColor: 'hsl(var(--card))' }} className="group bg-card rounded-lg overfolow-hidden card-hover">
                <CardHeader title={project.title} />
                <CardMedia component="img" height="194" image={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {project.description}
                    </Typography>
                </CardContent>
                  <div className="p-6">
                        <div className="flex flex-wrap gap-2">
                            {project.Tags.map((tag, index) => (
                                <span key={index} className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground ">                 
                                    {tag}
                                </span>
                            ))}
                        </div> 
                    </div>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">    
                        <a href={project.link} target="_blank">
                            <Github size={20} />
                            </a>          
                        
                </IconButton>
                </CardActions>
                 
            </Card>
          </div>
        ))}
        </div>

        <div className="text-center mt-12">
            <a >
                
            </a>
            <Button href="https://github.com/abhisheksinha332" className="primary-button gap-2" sx={{ borderRadius: '9999px' }} variant="contained" target="_blank">
                    Check My Github <ArrowRight size={16}/>
                </Button>
       </div>
      </div>
    </section>
  );
}

export default ProjectSection;