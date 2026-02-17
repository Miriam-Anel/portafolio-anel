import { useState } from "react";
import Button from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/lib/projects-data"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todos" },
    { id: "UX/UI Design", label: "UX/UI Design" },
    { id: "Front-end", label: "Front-end" },
    { id: "Design + Dev", label: "Design + Dev" },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="py-24 md:py-32 md:px-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
            Featured projects
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Find out about my works: read through my case studies, have a look at 
            final designs and try out prototypes I've built.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-wrap items-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No hay proyectos en esta categoría aún.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
