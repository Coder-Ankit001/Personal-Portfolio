import React from "react";

const projects = [
  {
    title: "Arcane Hub",
    description:
      "MERN stack gaming platform with authentication, wishlist, and RAWG API integration.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    live: "https://arcanehubfrontendvercel-3kc30c5rw-coder-ankit001s-projects.vercel.app/",
    code: "https://github.com/Coder-Ankit001?tab=repositories",
  },
  {
    title: "Amazon Clone",
    description:
      "Multi-page e-commerce UI built using HTML & CSS with responsive design and structured layout.",
    tech: ["HTML", "CSS"],
    live: "#",
    code: "https://github.com/Coder-Ankit001",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white px-6 md:px-10 py-10">

      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold mb-10">
        My <span className="text-violet-500">Projects</span>
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg transition"
          >
            {/* TITLE */}
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            {/* DESC */}
            <p className="text-gray-300 mt-3">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-slate-700 text-violet-400 px-3 py-1 rounded-full text-sm border border-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-4 mt-6">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="text-violet-400 hover:text-violet-300 font-medium"
              >
                Live →
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white font-medium"
              >
                Code →
              </a>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;