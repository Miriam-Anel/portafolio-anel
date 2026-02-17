import Button from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-primary rounded-full" />
      <div className="absolute bottom-24 left-16 w-16 h-32 bg-coral rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent rounded-full opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-up">
            Let's work together!
          </h2>
          
          <p className="text-xl md:text-2xl text-background/70 mb-12 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            I'm currently available for freelance projects and full-time positions. 
            Let's create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <a href="mailto:hola@maria.design">
              <Button size="lg" className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 group">
                <Mail className="mr-2 h-5 w-5" />
                hola@maria.design
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-background/50 text-sm font-medium">Find me on</span>
            <a
              href="#"
              className="p-3 border border-background/20 rounded-full text-background/70 hover:text-background hover:border-background/50 hover:bg-background/10 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-3 border border-background/20 rounded-full text-background/70 hover:text-background hover:border-background/50 hover:bg-background/10 transition-smooth"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
