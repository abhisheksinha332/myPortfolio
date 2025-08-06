import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import Resume from '../../assets/Abhishek Sinha.pdf';
import {Briefcase, Code, User} from 'lucide-react';


const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-8 text-center">About <span className="primary-color">Me</span> </h2>
      </div>

      <Box sx={{ flexGrow: 1 }} className="container mx-auto px-12 mb-12">
      <Grid container spacing={18}>
        <Grid size={{ xs: 12, sm: 6 }} sx={
          {
            marginTop: '30px',
          }
        } >
          <h3 className="text-2xl font-semibold">Senior Engineer - DevOps & Automation</h3> <br/>
           <p className="text-muted-foreground">
          DevOps Engineer with 3 years of IT experience, including 2 years in DevOps and 1 year in Monitoring & Incident Management. </p>
          <p>Worked closely with the Microsoft team to support the Renault-Nissan Alliance (RNA) on Microsoft Connected Vehicle Platform (MCVP). Recognized for developing impactful automations that reduced manual effort and human error. Early experience in IoT and AI through hands-on internship work.
        </p>
        <div className='about-me-button'>
          <Button variant="contained" className="primary-button mt-4" sx={{borderRadius: '9999px', paddingX: '1rem'}} href="#contact">
            Get in Touch
        </Button>
        <Button variant="outlined" className="secondary-button mt-4 ml-4" href={Resume} download sx={{borderRadius: '9999px'}} >
            Download Resume
        </Button>
        </div>
        
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
         
          <Paper elevation={3} className="p-4" sx={
            {
              height: '30%',
              color: '#fff',
              opacity: 0.3,
              margin: '25px 0px',
              ":hover": {
                opacity: 0.4,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              
              <div className='flex items-center space-x-4'>
              <div>
                <Code className='h-6 w-6 primary-color' />
                </div>
            <div className="text-left text-color font-semibold">
              <p>DevOps Engineer </p>
            </div>
              </div>
              <div>
              <p className='text-color flex items-center space-x-4'>Proficient in DevOps tools and practices and Azure Cloud and also in web Development</p>
              </div>
              
            </Paper>
          <Paper elevation={3} className="p-4" sx={
            {
              height: '30%',
              color: '#fff',
              opacity: 0.3,
              margin: '25px 0px',
              ":hover": {
                opacity: 0.4,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              
              <div className='flex items-center space-x-4'>
              <div>
                <User className='h-6 w-6 primary-color' />
                </div>
            <div className="text-left text-color font-semibold">
              <p>Automating Tasks</p>
            </div>
              </div>
              <div>
              <p className='text-color flex items-center space-x-4'>Experienced in automation using Power Automate, Azure Automation, PowerShell</p>
              </div>
              
            </Paper>
          <Paper elevation={3} className="p-4" sx={
            {
              height: '30%',
              color: '#fff',
              opacity: 0.3,
              margin: '25px 0px',
              ":hover": {
                opacity: 0.4,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease-in-out',
              }
            }}>
              
              <div className='flex items-center space-x-4'>
              <div>
                <Briefcase className='h-6 w-6 primary-color' />
                </div>
            <div className="text-left text-color font-semibold">
              <p>My Experience</p>
            </div>
              </div>
              <div>
              <p className='text-color flex items-center space-x-4'>Overall 3 years of experience. Including 2 years in DevOps and 1 year in Monitoring & Incident Management.</p>
              </div>
           </Paper>
        </Grid>
      </Grid>
    </Box>
    </section>
  );
};

export default About;