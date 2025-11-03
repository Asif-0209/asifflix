import { useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectRow({ title, projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="px-10 py-8 bg-black text-white overflow-hidden">
      <h3 className="text-2xl font-semibold mb-6">{title}</h3>

      {/* Horizontal Scrollable Row */}
      <div className="flex overflow-x-scroll space-x-5 scrollbar-hide pb-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="relative group flex-shrink-0 min-w-[220px] max-w-[220px] rounded-lg overflow-hidden transform hover:scale-110 transition-transform duration-300 ease-out cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover rounded-md"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <h4 className="text-lg font-bold text-red-500">
                {project.title}
              </h4>
              <p className="text-sm text-gray-300">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal when a project is selected */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectRow;
