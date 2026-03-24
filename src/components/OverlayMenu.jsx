import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa6";

const NAV_LINKS = [
  { label: "Home", href: "#home", emoji: "🏠" },
  { label: "About", href: "#about", emoji: "👤" },
  { label: "Skills", href: "#skills", emoji: "⚡" },
  { label: "Projects", href: "#projects", emoji: "🚀" },
  { label: "Experience", href: "#experience", emoji: "💼" },
  { label: "Certifications", href: "#certifications", emoji: "🏆" },
  { label: "Contact", href: "#contact", emoji: "📬" },
];

const SOCIALS = [
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/in/rameshray45", color: "#0A66C2" },
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/RameshQWert", color: "#ffffff" },
  { Icon: FaEnvelope, label: "Email", href: "mailto:rameshlpu779@gmail.com", color: "#EA4335" },
  { Icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/919430260097", color: "#25D366" },
];

const containerVariants = {
  closed: { clipPath: "circle(0% at calc(100% - 56px) 36px)", transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
  open: { clipPath: "circle(170% at calc(100% - 56px) 36px)", transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const listVariants = {
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  open: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const itemVariants = {
  closed: { opacity: 0, x: -30, transition: { duration: 0.2 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function OverlayMenu({ isOpen, onClose, activeSection }) {
  // Trap focus inside menu when open
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="fixed inset-0 z-50 flex"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              background: "linear-gradient(135deg, #0a0a0f 0%, #0d1218 40%, #0a0f14 100%)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Ambient glow blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#1CD8D2]/8 blur-[150px] animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#302b63]/20 blur-[120px] animate-pulse" />
              <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-[#00bf8f]/6 blur-[100px]" />
            </div>

            <div className="relative z-10 w-full flex flex-col px-8 sm:px-12 py-8 overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-12 sm:mb-16">
                <div>
                  <p className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase mb-1">Navigate</p>
                  <h2 className="text-white text-xl font-bold">Menu</h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 hover:bg-white/15
                    flex items-center justify-center text-white/70 hover:text-white
                    transition-all duration-200"
                  aria-label="Close menu"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav Links */}
              <motion.ul
                variants={listVariants}
                className="flex flex-col gap-2 flex-1"
              >
                {NAV_LINKS.map(({ label, href, emoji }) => {
                  const sectionId = href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.li key={label} variants={itemVariants}>
                      <a
                        href={href}
                        onClick={onClose}
                        className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200
                          ${isActive
                            ? "bg-white/10 border border-white/15"
                            : "border border-transparent hover:bg-white/5 hover:border-white/8"
                          }`}
                      >
                        <span className="text-xl w-8 flex-shrink-0">{emoji}</span>
                        <span
                          className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors duration-200
                            ${isActive ? "text-white" : "text-white/50 group-hover:text-white"}`}
                        >
                          {label}
                        </span>
                        {isActive && (
                          <motion.div
                            layoutId="mobile-active-dot"
                            className="ml-auto w-2 h-2 rounded-full bg-[#1CD8D2]"
                          />
                        )}
                        <svg
                          className={`ml-auto w-4 h-4 transition-all duration-200 ${isActive ? "text-[#1CD8D2]" : "text-white/20 group-hover:text-white/50 group-hover:translate-x-1"}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </motion.li>
                  );
                })}
              </motion.ul>

              {/* Footer: Socials + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-10 pt-8 border-t border-white/8"
              >
                {/* Social Icons */}
                <div className="flex items-center gap-3 mb-6">
                  {SOCIALS.map(({ Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center
                        text-white/50 hover:text-white hover:bg-white/12 hover:border-white/20
                        transition-all duration-200 text-lg"
                      style={{ "--hover-color": color }}
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
                {/* Mobile CTA */}
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white
                    bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]
                    hover:opacity-90 transition-all duration-200 shadow-lg"
                >
                  Reach Out 🚀
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
