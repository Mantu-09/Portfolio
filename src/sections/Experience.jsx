import React from "react";
import { motion, useInView } from "framer-motion";
import ResumeViewerModal from "../components/ResumeViewerModal";

function AnimatedCounter({ value, suffix = "", durationMs = 1100 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.55 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) {
      return;
    }

    const start = performance.now();
    let frameId = null;

    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setCount(Math.round(progress * value));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [durationMs, isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Car Rental Web Application",
    companyLogo: "",
    location: "Remote",
    duration: "Jun 2025 - Jul 2025",
    summary:
      "Built and shipped a production-ready MERN platform for end-to-end car rental operations with secure APIs and a fast, responsive interface.",
    impact: "Improved booking workflow speed with clean UX and optimized API response handling.",
    kpis: [
      { label: "Secure API Modules", value: 6, suffix: "+" },
      { label: "Core Workflows Built", value: 12, suffix: "+" },
      { label: "Auth and Access Layers", value: 3, suffix: "" },
    ],
    highlights: [
      "Designed REST APIs for vehicles, bookings, and user management using Node.js and Express.",
      "Implemented JWT authentication and role-based access control for secure admin and user flows.",
      "Built responsive React dashboards for booking, fleet tracking, and profile actions.",
      "Structured MongoDB schemas and validations to keep booking data reliable and query-friendly.",
    ],
    skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", "Tailwind CSS"],
    projectUrl: "https://github.com/Mantu-09",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  const [showResumeViewer, setShowResumeViewer] = React.useState(false);

  return (
    <>
      <section
        id="experience"
        className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
        style={{
          background:
            "radial-gradient(800px circle at 0% -10%, rgba(50,95,245,0.35), transparent 42%), radial-gradient(700px circle at 100% 8%, rgba(15,198,204,0.26), transparent 40%), linear-gradient(180deg, #020815 0%, #041028 55%, #031129 100%)",
        }}
      >
      <div className="pointer-events-none absolute left-[-120px] top-[120px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] top-[70px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="text-center"
        >
          <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Professional Journey
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Experience</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
            Demonstrated delivery across full stack engineering, secure backend architecture, and
            user-focused interfaces that improve product outcomes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowResumeViewer(true)}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white"
            >
              View Resume
            </button>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-md border border-cyan-300/45 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 sm:text-sm">
            Full Stack Engineering
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 sm:text-sm">
            Secure APIs and Auth
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-slate-100 sm:text-sm">
            Product-Focused Delivery
          </span>
        </motion.div>

        <div className="relative mt-14 space-y-8">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/45 to-cyan-300/0 sm:block" />

          {experiences.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_70px_rgba(2,6,23,0.45)] backdrop-blur-md sm:ml-10 sm:p-7"
            >
              <div className="absolute left-[-36px] top-10 hidden h-4 w-4 rounded-full border-2 border-cyan-200 bg-cyan-400 shadow-[0_0_0_8px_rgba(56,189,248,0.18)] sm:block" />
              <div className="absolute right-0 top-0 h-1 w-44 bg-gradient-to-r from-cyan-300/0 via-cyan-300/75 to-blue-400/0" />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  {item.companyLogo ? (
                    <img
                      src={item.companyLogo}
                      alt={`${item.company} logo`}
                      className="h-11 w-11 rounded-lg border border-white/20 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/45 bg-cyan-300/10 text-sm font-bold text-cyan-100">
                      {item.company.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-cyan-100/90">
                      {item.company} | {item.location}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-cyan-300/45 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  {item.duration}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {item.kpis.map((kpi) => (
                  <div
                    key={`${item.company}-${kpi.label}`}
                    className="rounded-lg border border-slate-700/80 bg-slate-900/65 px-3 py-2"
                  >
                    <p className="text-xl font-bold text-cyan-100">
                      <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                    </p>
                    <p className="mt-0.5 text-[11px] uppercase tracking-[0.08em] text-slate-300">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-200/90 sm:text-base">{item.summary}</p>
              <p className="mt-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-sm font-medium text-emerald-100">
                Recruiter Signal: {item.impact}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-200/90">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={`${item.role}-${skill}`}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-28 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-w-28 items-center justify-center rounded-md border border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

      <ResumeViewerModal
        isOpen={showResumeViewer}
        onClose={() => setShowResumeViewer(false)}
        resumeUrl="/Resume.pdf"
        title="Resume Preview"
      />
    </>
  );
}
