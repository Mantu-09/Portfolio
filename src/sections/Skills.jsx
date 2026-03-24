import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaPython, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const groupedSkills = [
  {
    title: "Frontend",
    emphasis: "Crafting fast and polished user experiences",
    items: [
      { icon: FaReact, name: "React", level: 90, color: "#61DAFB" },
      { icon: SiJavascript, name: "JavaScript", level: 90, color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", level: 80, color: "#3178C6" },
      { icon: SiRedux, name: "Redux", level: 82, color: "#764ABC" },
      { icon: SiTailwindcss, name: "Tailwind", level: 87, color: "#06B6D4" },
      { icon: SiBootstrap, name: "Bootstrap", level: 88, color: "#7952B3" },
      { icon: SiHtml5, name: "HTML", level: 95, color: "#E34F26" },
      { icon: SiCss3, name: "CSS", level: 95, color: "#1572B6" },
    ],
  },
  {
    title: "Backend and Data",
    emphasis: "Reliable API design and scalable data models",
    items: [
      { icon: SiNodedotjs, name: "Node.js", level: 86, color: "#339933" },
      { icon: SiExpress, name: "Express", level: 82, color: "#86efac" },
      { icon: SiMongodb, name: "MongoDB", level: 83, color: "#47A248" },
      { icon: SiMysql, name: "MySQL", level: 84, color: "#4479A1" },
      { icon: FaPython, name: "Python", level: 80, color: "#3776AB" },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Product Thinking",
  "Communication",
  "Adaptability",
  "Team Collaboration",
  "Leadership",
];

export default function Skills() {
  const topMetrics = useMemo(
    () => [
      { label: "Core Technologies", value: "14+" },
      { label: "Full Stack Focus", value: "MERN" },
      { label: "Delivery Style", value: "Impact Driven" },
    ],
    []
  );

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
      style={{
        background:
          "radial-gradient(900px circle at 8% -8%, rgba(29,109,255,0.3), transparent 43%), radial-gradient(900px circle at 95% 18%, rgba(14,201,207,0.24), transparent 45%), linear-gradient(180deg, #020914 0%, #041126 58%, #031329 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Skills Snapshot
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering Skills
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
            A practical blend of frontend architecture, backend engineering, and collaborative
            delivery skills focused on building production-ready products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          {topMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
              <p className="mt-1 text-lg font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {groupedSkills.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
              className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-6"
            >
              <h3 className="text-2xl font-black text-white">{group.title}</h3>
              <p className="mt-1 text-sm text-cyan-100/85">{group.emphasis}</p>

              <div className="mt-5 space-y-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={`${group.title}-${skill.name}`}
                      className="rounded-xl border border-slate-700/75 bg-slate-900/75 p-3"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xl" style={{ color: skill.color }}>
                            <Icon />
                          </span>
                          <span className="text-sm font-semibold text-slate-100">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-300">{skill.level}%</span>
                      </div>

                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-700">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center shadow-[0_20px_70px_rgba(2,6,23,0.4)]"
        >
          <h3 className="text-xl font-bold text-white">Professional Strengths</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}