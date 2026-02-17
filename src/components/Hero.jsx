import Button from "@/components/ui/button.jsx";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Decorative geometric shapes */}
      <div className="absolute top-32 left-16 w-24 h-24 bg-primary rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-48 right-24 w-16 h-32 bg-coral rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-48 right-1/3 w-12 h-12 bg-mint rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/3 right-16 w-8 h-8 bg-lavender rounded-full animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with wave underline */}
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            ¡Hola! <span className="underline-wave inline-block">Soy Anel.</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed animate-fade-up font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Diseñadora UX/UI & Desarrolladora Front-end
          </p>
          
          {/* Description */}
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Creo experiencias digitales que combinan diseño centrado en el usuario 
            con código limpio. Desde research hasta implementación.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="default" size="lg" onClick={scrollToProjects} className="rounded-full px-8">
              Ver proyectos
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("sobre-mi")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full px-8">
              Sobre mí
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up cursor-pointer"
          style={{ animationDelay: "0.6s" }}
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth">
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;