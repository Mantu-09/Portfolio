import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OverlayMenu from "./OverlayMenu";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
];

const SECTION_IDS = ["home", "about", "skills", "projects", "experience", "certifications", "achievements", "education", "timezone", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);
  const timerId = useRef(null);
  const onHomePage = useRef(true);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Track if on home section
  useEffect(() => {
    const homeEl = document.getElementById("home");
    if (!homeEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        onHomePage.current = entry.isIntersecting;
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(homeEl);
    return () => obs.disconnect();
  }, []);

  // Scroll hide/show + glass effect
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);

      if (onHomePage.current) {
        setVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current + 8) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 4) {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);
        timerId.current = setTimeout(() => {
          if (!onHomePage.current) setVisible(false);
        }, 3500);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ y: visible ? 0 : "-110%" }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* ── Logo ── */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Back to top"
            >
              <motion.img
                src="/images/rocket_logo.webp"
                alt="Logo"
                className="w-8 h-8 sm:w-9 sm:h-9"
                whileHover={{ rotate: 20, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight hidden xs:block">
                Mantu Kumar
              </span>
            </a>

            {/* ── Desktop Nav Links ── */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 group ${
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{label}</span>
                  </a>
                );
              })}
            </nav>

            {/* ── Right Controls ── */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a
                href="#contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full
                  bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
                  text-white shadow-lg hover:shadow-[#1CD8D2]/25 hover:scale-105
                  transition-all duration-200"
              >
                Reach Out
              </a>

              {/* Mobile Hamburger */}
              <button
                id="nav-menu-btn"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-xl
                  bg-white/8 border border-white/10 hover:bg-white/15 hover:border-white/20
                  transition-all duration-200 gap-[5px] backdrop-blur-sm"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="block w-5 h-[1.5px] bg-white rounded-full origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
