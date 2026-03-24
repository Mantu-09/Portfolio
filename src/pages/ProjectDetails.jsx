import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { PROJECTS, findProjectById } from "../data/projectsData";

export default function ProjectDetails() {
  const SWIPE_HINT_STORAGE_KEY = "portfolio-project-swipe-hint-seen";
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = findProjectById(projectId);
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const lastScrollY = useRef(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const currentIndex = PROJECTS.findIndex((item) => item.id === projectId);
  const hasValidIndex = currentIndex >= 0;
  const previousProject = hasValidIndex
    ? PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
    : null;
  const nextProject = hasValidIndex ? PROJECTS[(currentIndex + 1) % PROJECTS.length] : null;

  useEffect(() => {
    if (!hasValidIndex) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft" && previousProject) {
        navigate(`/projects/${previousProject.id}`);
      }

      if (event.key === "ArrowRight" && nextProject) {
        navigate(`/projects/${nextProject.id}`);
      }

      if (event.key === "Escape") {
        navigate("/#projects");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hasValidIndex, navigate, nextProject, previousProject]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current + 6) {
        setShowFloatingNav(false);
      } else if (currentY < lastScrollY.current - 4) {
        setShowFloatingNav(true);
      }

      if (currentY < 24) {
        setShowFloatingNav(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const isMobileViewport = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
    const hasSeenHint = typeof window !== "undefined" && window.localStorage.getItem(SWIPE_HINT_STORAGE_KEY);

    if (!isMobileViewport || hasSeenHint) {
      return;
    }

    setShowSwipeHint(true);

    const timer = window.setTimeout(() => {
      setShowSwipeHint(false);
      window.localStorage.setItem(SWIPE_HINT_STORAGE_KEY, "true");
    }, 2800);

    return () => window.clearTimeout(timer);
  }, [SWIPE_HINT_STORAGE_KEY]);

  const handleTouchStart = (event) => {
    if (showSwipeHint) {
      setShowSwipeHint(false);
      window.localStorage.setItem(SWIPE_HINT_STORAGE_KEY, "true");
    }

    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 60 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX > 0 && previousProject) {
      navigate(`/projects/${previousProject.id}`);
    }

    if (deltaX < 0 && nextProject) {
      navigate(`/projects/${nextProject.id}`);
    }
  };

  if (!project) {
    return (
      <section className="min-h-screen px-4 py-16 text-white sm:px-8" style={{ background: "#04102d" }}>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-slate-950/70 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Project Not Found</p>
          <h1 className="mt-3 text-3xl font-black">This project does not exist.</h1>
          <Link
            to="/#projects"
            className="mt-6 inline-flex rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
          >
            Back To Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen px-4 py-10 text-white sm:px-6 lg:px-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        background:
          "radial-gradient(1200px circle at 12% -5%, rgba(38,99,255,0.34), transparent 50%), radial-gradient(900px circle at 88% 18%, rgba(13,206,211,0.24), transparent 48%), linear-gradient(180deg, #041130 0%, #061739 48%, #030e26 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="rounded-md border border-cyan-300/45 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20"
          >
            Back
          </button>
          <Link
            to="/#projects"
            className="rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            All Projects
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/65 shadow-[0_30px_100px_rgba(2,6,23,0.55)] backdrop-blur-md"
        >
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[26rem]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/25 to-transparent" />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              {project.badges.map((badge) => (
                <span
                  key={`${project.id}-${badge}`}
                  className="rounded-full border border-cyan-300/45 bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 p-5 sm:p-7 lg:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  {project.category} | {project.duration}
                </p>
                <h1 className="mt-2 text-3xl font-black sm:text-4xl">{project.title}</h1>
                <p className="mt-2 text-base text-blue-100/85">{project.subtitle}</p>
              </div>
              <p className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                Impact: {project.metrics}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">{project.description}</p>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={`${project.id}-${item}`}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-32 items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
              >
                Live Demo
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-32 items-center justify-center rounded-md border border-blue-200/40 bg-transparent px-4 py-2 text-sm font-semibold text-blue-100"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-7 rounded-2xl border border-white/10 bg-slate-950/55 p-5"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/85">
            Keyboard: Left = Previous | Right = Next | Esc = All Projects | Swipe: Left/Right
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {previousProject && (
              <Link
                to={`/projects/${previousProject.id}`}
                className="rounded-md border border-cyan-300/45 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20"
              >
                Prev: {previousProject.title}
              </Link>
            )}
            {nextProject && (
              <Link
                to={`/projects/${nextProject.id}`}
                className="rounded-md border border-cyan-300/45 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20"
              >
                Next: {nextProject.title}
              </Link>
            )}
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
            Browse Other Projects
          </p>
          <div className="flex flex-wrap gap-2.5">
            {PROJECTS.filter((item) => item.id !== project.id).map((item) => (
              <Link
                key={`project-jump-${item.id}`}
                to={`/projects/${item.id}`}
                className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-100 transition-colors hover:border-cyan-300/70 hover:text-cyan-100"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {previousProject && (
        <Link
          to={`/projects/${previousProject.id}`}
          aria-label={`Go to previous project: ${previousProject.title}`}
          className={`fixed bottom-6 left-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/50 bg-slate-900/85 text-xl font-bold text-cyan-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:bg-cyan-300/20 sm:bottom-7 sm:left-8 ${
            showFloatingNav ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          &lt;
        </Link>
      )}

      {nextProject && (
        <Link
          to={`/projects/${nextProject.id}`}
          aria-label={`Go to next project: ${nextProject.title}`}
          className={`fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/50 bg-slate-900/85 text-xl font-bold text-cyan-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:bg-cyan-300/20 sm:bottom-7 sm:right-8 ${
            showFloatingNav ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          &gt;
        </Link>
      )}

      <AnimatePresence>
        {showSwipeHint && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-none fixed bottom-20 left-1/2 z-40 -translate-x-1/2 rounded-full border border-cyan-300/45 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
          >
            Swipe left or right to browse projects
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}