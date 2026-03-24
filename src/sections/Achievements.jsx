import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaMedal, FaTrophy } from "react-icons/fa";

const achievements = [
    {
        title: "HackerRank CSS - 4 Star Achiever",
        date: "Oct 2025",
        description:
            "Ranked among top performers out of 2,500+ participants for strong command of modern CSS techniques and best practices.",
        icon: FaTrophy,
        color: "text-yellow-400",
        tag: "Competitive Coding",
    },
    {
        title: "Oracle Cloud AI Learning Milestone",
        date: "2025",
        description:
            "Completed multiple Oracle cloud and AI certifications with practical understanding of GenAI, infrastructure, and workflow integration.",
        icon: FaAward,
        color: "text-cyan-300",
        tag: "Cloud and AI",
    },
    {
        title: "Consistent Full Stack Project Delivery",
        date: "2024 - 2025",
        description:
            "Built and shipped multiple production-style projects across web apps, APIs, and responsive experiences with clear execution discipline.",
        icon: FaMedal,
        color: "text-emerald-300",
        tag: "Project Execution",
    },
];

const metrics = [
    { label: "Highlighted Achievements", value: "3" },
    { label: "Certification and Project Focus", value: "Cloud, AI, Full Stack" },
    { label: "Delivery Mindset", value: "Impact Oriented" },
];

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
            style={{
                background:
                    "radial-gradient(850px circle at 8% -10%, rgba(243,186,47,0.2), transparent 44%), radial-gradient(850px circle at 92% 20%, rgba(37,99,235,0.2), transparent 45%), linear-gradient(180deg, #020916 0%, #031025 58%, #031127 100%)",
            }}
        >
            <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="pointer-events-none absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="inline-flex rounded-full border border-yellow-300/45 bg-yellow-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-100">
                        Milestones
                    </p>
                    <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Achievements
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
                        Highlights that demonstrate consistent execution, learning velocity, and measurable
                        progress in engineering.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mt-8 grid gap-3 sm:grid-cols-3"
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                        >
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{metric.label}</p>
                            <p className="mt-1 text-base font-bold text-white">{metric.value}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {achievements.map((item, index) => (
                        <motion.article
                            key={`${item.title}-${item.date}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md"
                        >
                            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative flex items-center justify-between gap-2">
                                <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                                    {item.date}
                                </span>
                                <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                                    {item.tag}
                                </span>
                            </div>

                            <div className="relative mt-4 flex items-start gap-3">
                                <span className={`mt-1 text-2xl ${item.color}`}>
                                    <item.icon />
                                </span>
                                <div>
                                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
