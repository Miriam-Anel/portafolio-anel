import { useState, useEffect } from "react";
import  Button from "@/components/ui/button.jsx";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo with yellow circle */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
            <span className="font-serif text-lg font-bold text-primary-foreground">M</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { id: "proyectos", label: "Work" },
            { id: "sobre-mi", label: "About" },
            { id: "contacto", label: "Contact" },
          ].map((item) => (
            <Button
              key={item.id}
              variant="ghost"                // usa tu variante preferida
              className="text-sm font-medium text-foreground relative group bg-transparent px-0 hover:bg-transparent"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Button>

          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        
<Button
          variant="ghost"
          className="md:hidden text-foreground px-2 py-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {[
              { id: "proyectos", label: "Work" },
              { id: "sobre-mi", label: "About" },
              { id: "contacto", label: "Contact" },
            ].map((item) => (
              
<Button
                key={item.id}
                variant="ghost"
                className="text-lg font-medium text-foreground hover:text-muted-foreground transition-smooth text-left py-2 justify-start bg-transparent"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>

            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;