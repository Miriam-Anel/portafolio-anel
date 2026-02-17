const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground text-background/50 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-primary-foreground">M</span>
            </div>
            <p className="text-sm">
              © {currentYear} María. Diseñado y desarrollado con pasión.
            </p>
          </div>
          <p className="text-sm">
            Disponible para proyectos freelance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;