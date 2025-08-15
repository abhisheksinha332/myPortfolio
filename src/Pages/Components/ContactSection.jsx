import { Button } from "@mui/material";
import { useRef } from "react";
import SendIcon from '@mui/icons-material/Send';
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';



const ContactSection = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({name: '',email: '',message: ''});

    const form = useRef();

    useEffect(() => {
        console.log("isSubmitted changed:", isSubmitted);
    }, [isSubmitted]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        
        e.preventDefault()

        emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICES,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  form.current,
  {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );

        setIsSubmitted(true)
        
        setTimeout(()=> {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', message: '' });
        },1500)

        
    }
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl bg-card p-8 rounded-lg shadow-xs contact-form"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In<span className="primary-color">Touch</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-8">
                        {/* <h3 className="text-2xl font-semibold mb-6">Contact Information</h3> */}
                        {/* <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium ">Email</h4>
                                    <a href= "mailto:3327abhishek@gmail.com" className="text-muted-foreground hover:text-color transition:colors">
                                        3327abhishek@gmail.com
                                    </a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium ">Phone</h4>
                                    <a href= "telto:+918271402619" className="text-muted-foreground hover:text-color transition:colors">
                                        +91 8271402619
                                    </a>
                                </div>
                            </div>
                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium ">Location</h4>
                                    <a className="text-muted-foreground hover:text-color transition:colors">
                                        Hyderabad, India
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With ME</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/abhishek-sinha-5007bb169/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/_abhishek_sinha/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://twitter.com/_abhishek_sinha" target="_blank">
                                    <Twitter />
                                </a>
                                
                            </div>
                        </div> */}
                        <DotLottieReact
                                    src="https://lottie.host/94ccfcf6-a94b-40ff-ab05-a175424777ee/BydT8fqmJP.lottie"
                                    loop
                                    autoplay
                                    />
                    </div>

                    <div className="" >
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 ">Your Name</label>
                            <input type="text" onChange={handleChange} value={formData.name} placeholder="Abhishek Sinha..." id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus: outline-hidden focus:ring-2 focus:ring-primary"/>
                             <label htmlFor="email" className="block text-sm font-medium mb-2 ">Your Email</label>
                            <input type="email" onChange={handleChange} value={formData.email} placeholder="johndoe@gmail.com.." id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus: outline-hidden focus:ring-2 focus:ring-primary"/>
                             <label htmlFor="message" className="block text-sm font-medium mb-2 ">Yor Message</label>
                            <textarea  placeholder="Your Message..." onChange={handleChange} value={formData.message} id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus: outline-hidden focus:ring-2 focus:ring-primary resize-none"/>

                            <Button type="submit" disabled={isSubmitted}  sx={{ borderRadius: '9999px' }} variant="contained" endIcon={<SendIcon />}>
                                {isSubmitted ?"Sending" : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;