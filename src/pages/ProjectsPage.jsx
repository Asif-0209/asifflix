import React, { useState } from "react";

function ProjectsPage({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      {/* Header */}
      <header className="p-8 border-b border-gray-700 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">
          🎥 My Project Showcase
        </h1>
        <p className="text-gray-400">
          Explore AI, ML, and Cloud projects — Netflix style.
        </p>
      </header>

      {/* Projects Grid */}
      <section className="p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="relative group bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-800 cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <h3 className="text-lg font-bold text-red-500">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.tech}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Optional Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div className="bg-gray-900 p-6 rounded-lg max-w-2xl">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              {selectedProject.title}
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
              {selectedProject.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">🧩 Skills Used</h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
