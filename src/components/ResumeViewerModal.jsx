import React from "react";

export default function ResumeViewerModal({
  isOpen,
  onClose,
  resumeUrl = "/Resume.pdf",
  title = "Resume Preview",
}) {
  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Viewer"
    >
      <div
        className="h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-cyan-300/45 bg-slate-900 shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-700/75 px-4 py-3">
          <p className="text-sm font-semibold text-cyan-100 sm:text-base">{title}</p>
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-cyan-300/45 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 hover:bg-cyan-300/20"
            >
              Open In New Tab
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>

        <iframe
          src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          title="Resume PDF"
          className="h-[calc(88vh-52px)] w-full bg-white"
        />
      </div>
    </div>
  );
}
