
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { SiOracle } from "react-icons/si";

const certifications = [
    {
        title: "NPTEL Cloud Computing",
        issuer: "NPTEL",
        date: "2025",
        link: "/certificates/Cloud_Computing_Certification.pdf",
        gradient: "from-emerald-400/25 to-teal-500/25",
        tag: "Cloud",
    },
    {
        title: "Oracle Cloud Infrastructure AI Foundations Associate",
        issuer: "Oracle",
        date: "2025",
        link: "/certificates/Oracle_Ai_Foundations.pdf",
        gradient: "from-blue-500/25 to-cyan-400/25",
        tag: "AI",
    },
    {
        title: "Oracle Data Science Certificate",
        issuer: "Oracle",
        date: "2025",
        link: "/certificates/Oracle Data Science Certificate.pdf",
        gradient: "from-fuchsia-500/25 to-purple-500/25",
        tag: "Generative AI",
    },
    {
        title: "Oracle Cloud Infrastructure DevOps",
        issuer: "Oracle",
        date: "2025",
        link: "/certificates/Oracle_DevOps.pdf",
        gradient: "from-indigo-500/25 to-sky-500/25",
        tag: "DevOps",
    },
    {
        title: "MySQL HeatWave",
        issuer: "Oracle",
        date: "2025",
        link: "/certificates/MySQL_HeatWave.pdf",
        gradient: "from-amber-400/25 to-orange-500/25",
        tag: "Database",
    },
    
];

const keyStats = [
    { label: "Verified Certifications", value: "5" },
    { label: "Cloud and AI Focus", value: "Oracle + NPTEL" },
    { label: "Domains", value: "AI, Cloud, DevOps, DB" },
];

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
            style={{
                background:
                    "radial-gradient(850px circle at 8% -12%, rgba(38,107,255,0.3), transparent 45%), radial-gradient(900px circle at 90% 12%, rgba(17,188,193,0.22), transparent 46%), linear-gradient(180deg, #020916 0%, #031025 60%, #031127 100%)",
            }}
        >
            <div className="pointer-events-none absolute left-[-120px] top-14 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="pointer-events-none absolute right-[-120px] top-12 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        Credentials
                    </p>
                    <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Certifications
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
                        Validated credentials in cloud infrastructure, AI, and data technologies that reinforce
                        practical engineering capability.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mt-8 grid gap-3 sm:grid-cols-3"
                >
                    {keyStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                        >
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                            <p className="mt-1 text-base font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {certifications.map((cert, index) => (
                        <motion.article
                            key={`${cert.title}-${cert.issuer}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md"
                        >
                            <div
                                className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-r ${cert.gradient} opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-80`}
                            />

                            <div className="relative flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    {cert.issuer === "Oracle" ? (
                                        <SiOracle className="text-2xl text-red-400" />
                                    ) : (
                                        <FaCertificate className="text-xl text-emerald-300" />
                                    )}
                                    <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                                        {cert.tag}
                                    </span>
                                </div>

                                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="relative mt-4 text-lg font-bold leading-snug text-white">{cert.title}</h3>
                            <p className="relative mt-2 text-sm text-slate-300">Issued by {cert.issuer}</p>

                            <div className="relative mt-5 flex gap-2">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
                                >
                                    View Certificate
                                </a>
                                <a
                                    href={cert.link}
                                    download
                                    className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
                                >
                                    Download
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
