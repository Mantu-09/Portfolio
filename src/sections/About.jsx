import { motion } from "framer-motion";

export default function About() {
  const pillars = [
    {
      title: "Product Thinking",
      description:
        "I design flows that reduce friction and make users complete key actions faster.",
    },
    {
      title: "Clean Engineering",
      description:
        "I build scalable MERN architecture with maintainable APIs and reliable data models.",
    },
    {
      title: "Execution Speed",
      description:
        "I ship fast with clear priorities, iterative delivery, and measurable outcomes.",
    },
  ];

  const quickFacts = [
    { label: "Current Focus", value: "Full Stack + AI" },
    { label: "Primary Stack", value: "React, Node, MongoDB" },
    { label: "Based In", value: "India" },
    { label: "Open To", value: "Internships, Full-Time" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
      aria-label="About me"
      style={{
        background:
          "radial-gradient(900px circle at 10% -10%, rgba(36,117,255,0.28), transparent 42%), radial-gradient(800px circle at 95% 12%, rgba(11,199,200,0.24), transparent 45%), linear-gradient(180deg, #020815 0%, #030e22 58%, #031129 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-160px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-10 text-center"
        >
          <p className="inline-flex rounded-full border border-cyan-300/45 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            About Me
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Building Products Recruiters Remember
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
            I combine clean engineering with user-centered thinking to build fast, scalable web
            products that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.5)] backdrop-blur-md"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-cyan-300/20 shadow-lg">
                <img src="/images/profile-photo.jpg" alt="Mantu Kumar profile" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-emerald-300/40 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available For Opportunities
                </div>
                <h3 className="text-2xl font-black text-white sm:text-3xl">Mantu Kumar</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100/90">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {quickFacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-3"
                >
                  <p className="text-xs uppercase tracking-[0.08em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white"
                aria-label="View my projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/10"
                aria-label="Get in touch"
              >
                Get in Touch
              </a>
            </div>
          </motion.aside>

          <motion.div
            className="space-y-6 rounded-2xl border border-white/10 bg-slate-950/65 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-black text-white sm:text-3xl">What I Build</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-200/90">
                I am a Computer Science and Engineering student at Lovely Professional University,
                focused on full stack development and practical AI-driven product experiences. I
                build systems where frontend usability and backend reliability work together.
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-300/90">
                Recent work includes CareerPilot, an AI-powered student guidance product, and
                YuvaStay, a booking platform designed for search speed and better conversion.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {pillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-xl border border-slate-700/75 bg-slate-900/75 p-4"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-cyan-100">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
                </motion.article>
              ))}
            </div>

            <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100">
                Recruiter Snapshot
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cyan-50/95">
                Strong in React and Node.js with hands-on delivery across authentication, API
                design, database modeling, responsive UI, and production-oriented feature
                execution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
