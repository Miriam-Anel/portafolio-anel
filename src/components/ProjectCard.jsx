
import { ArrowRight } from "lucide-react";

// Ajusta estos colores a tu paleta Tailwind
const colorClasses = {
  primary: "bg-primary",
  coral: "bg-coral",
  accent: "bg-accent",
  mint: "bg-mint",
  lavender: "bg-lavender",
};

const getCategoryLabel = (category) => {
  switch (category) {
    case "ux-ui":
      return "Diseño";
    case "frontend":
      return "Código";
    case "both":
      return "Diseño + Código";
    default:
      return category;
  }
};

const ProjectCard = ({ project, index = 0 }) => {
  const categoryLabel = getCategoryLabel(project.category);

  return (
    <a
      href={`/proyectos/${project.slug}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-3xl"
      aria-label={`Ver caso de estudio de ${project.title}`}
    >
      <article
        className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-elevated transition-smooth animate-fade-up"
        style={{ animationDelay: `${0.1 * index}s` }}
      >
        {/* Imagen + badge flotante */}
        <div className="relative px-4 pt-4">
          <span className="absolute top-6 left-6 z-10 inline-flex items-center rounded-full bg-muted/90 backdrop-blur px-3 py-1 text-sm font-medium text-foreground border border-border">
            {categoryLabel}
          </span>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="p-8">

          {/* Título */}
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Chips de tags */}
          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full bg-muted text-muted-foreground text-sm font-medium px-3 py-1 border border-border/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA inline (solo decorativo, el <a> padre es quien navega) */}
          <div className="inline-flex items-center gap-2 text-foreground font-medium transition-all duration-300 group-hover:gap-3">
            Ver caso de estudio
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;
