import { X } from "lucide-react";

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-zinc-900 text-white rounded-xl max-w-3xl w-full mx-6 shadow-lg relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X size={28} />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-t-xl"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-4">{project.tech}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Episodes (Steps to Build)
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              {project.steps && project.steps.length > 0 ? (
                project.steps.map((step, i) => <li key={i}>{step}</li>)
              ) : (
                <li>Steps coming soon...</li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {project.skills && project.skills.length > 0 ? (
                project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-red-600/30 border border-red-500 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="text-gray-400">No skills listed yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
