const About = () => {
  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-64 bg-primary rounded-full opacity-80 blur-sm" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-coral rounded-full opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 animate-fade-up">
            Who am I?
          </h2>

          {/* Main description */}
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <p>
              I'm a <strong className="text-foreground">UX/UI designer</strong> with front-end development skills. 
              I have experience in user interfaces and product design. I can help you build 
              innovative digital products from UX research to UI design and prototyping.
            </p>
            <p>
              My background in both design and code allows me to create solutions that are 
              not only beautiful but also technically feasible and performant.
            </p>
          </div>

          {/* Image with decorative elements */}
          <div className="relative mt-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative max-w-lg mx-auto">
              {/* Yellow arch behind image */}
              <div className="absolute -left-8 top-1/4 w-24 h-48 bg-primary rounded-full -z-10" />
              {/* Coral shape */}
              <div className="absolute -right-4 bottom-1/4 w-16 h-32 bg-coral rounded-full -z-10" />
              
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop"
                alt="Profile"
                className="w-full rounded-3xl shadow-elevated"
              />
            </div>
          </div>

          {/* Skills/What I do */}
          <div className="mt-24 grid md:grid-cols-2 gap-12">
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Design
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                User research, wireframing, high-fidelity prototypes, and design systems in Figma. 
                I focus on creating intuitive experiences that solve real problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Development
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                React, TypeScript, Tailwind CSS, and modern animation libraries. 
                I write clean, maintainable code that brings designs to life.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Learn more link */}
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <a 
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-foreground font-medium hover:gap-3 transition-all duration-300"
            >
              <span className="underline underline-offset-4">Learn more about me</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
