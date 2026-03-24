
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { PROJECTS } from "../data/projectsData";

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = React.useState("All Projects");

  const filters = React.useMemo(
    () => [
      "All Projects",
      ...new Set(PROJECTS.flatMap((project) => [project.category, ...project.badges])),
    ],
    []
  );

  const filteredProjects = React.useMemo(() => {
    if (activeFilter === "All Projects") {
      return PROJECTS;
    }

    return PROJECTS.filter(
      (project) => project.category === activeFilter || project.badges.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-12"
      style={{
        background:
          "radial-gradient(1200px circle at 10% -10%, rgba(29,109,255,0.32), transparent 45%), radial-gradient(900px circle at 95% 20%, rgba(11,188,193,0.26), transparent 46%), linear-gradient(180deg, #05112f 0%, #061739 60%, #03102a 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={sectionMotion}
          className="text-center"
        >
          <p className="mb-3 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Selected Work
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
            A curated showcase of web applications, APIs, and immersive interfaces. Add any number
            of projects in the data array and this section scales automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all sm:text-sm"
                style={{
                  borderColor: isActive ? "rgba(87, 195, 255, 0.9)" : "rgba(148, 163, 184, 0.35)",
                  background: isActive
                    ? "linear-gradient(90deg, rgba(47,105,255,0.85), rgba(20,177,197,0.85))"
                    : "rgba(15, 23, 42, 0.6)",
                  color: "#f8fafc",
                  boxShadow: isActive ? "0 12px 28px rgba(24, 120, 255, 0.35)" : "none",
                }}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_26px_70px_rgba(2,6,23,0.45)] backdrop-blur-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span
                      key={`${project.id}-${badge}`}
                      className="rounded-full border border-cyan-300/45 bg-slate-900/75 px-3 py-1 text-[11px] font-semibold text-cyan-100"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                    {project.category} | {project.duration}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-blue-100/80">{project.subtitle}</p>
                </div>

                <p className="text-sm leading-relaxed text-slate-200/85">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={`${project.id}-${techItem}`}
                      className="rounded-full border border-slate-700 bg-slate-900/65 px-2.5 py-1 text-[11px] font-medium text-slate-100"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-28 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-28 items-center justify-center rounded-md border border-blue-200/40 bg-transparent px-4 py-2 text-sm font-semibold text-blue-100 transition-colors hover:bg-white/10"
                  >
                    Source Code
                  </a>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex min-w-28 items-center justify-center rounded-md border border-cyan-300/55 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
