import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
    {
        school: "Lovely Professional University",
        location: "Phagwara, Punjab",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        duration: "Aug 2023 - Present",
        score: "CGPA: 7.00",
        tag: "Undergraduate",
    },
    {
        school: "L.N.D College Motihari",
        location: "Motihari, Bihar",
        degree: "Intermediate - Science",
        duration: "Apr 2020 - Mar 2022",
        score: "Percentage: 80%",
        tag: "Higher Secondary",
    },
    {
        school: "S.H.R.D High School Chauradano",
        location: "Chauradano, Bihar",
        degree: "Matriculation",
        duration: "Apr 2019 - Mar 2020",
        score: "Percentage: 85%",
        tag: "Secondary School",
    },
];

const quickStats = [
    { label: "Education Milestones", value: "3" },
    { label: "Current Program", value: "B.Tech CSE" },
    { label: "Academic Strength", value: "Consistent Progress" },
];

export default function Education() {
    return (
        <section
            id="education"
            className="relative overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
            style={{
                background:
                    "radial-gradient(900px circle at 8% -10%, rgba(56,189,248,0.25), transparent 44%), radial-gradient(900px circle at 95% 20%, rgba(99,102,241,0.22), transparent 45%), linear-gradient(180deg, #020916 0%, #031025 60%, #031127 100%)",
            }}
        >
            <div className="pointer-events-none absolute left-[-120px] top-16 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
            <div className="pointer-events-none absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="inline-flex rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-100">
                        Academic Journey
                    </p>
                    <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Education
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
                        A structured academic path in Computer Science with continuous progress and practical
                        application in software engineering.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="mt-8 grid gap-3 sm:grid-cols-3"
                >
                    {quickStats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                        >
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{stat.label}</p>
                            <p className="mt-1 text-base font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="relative mx-auto mt-12 max-w-5xl">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-sky-300/0 via-sky-300/45 to-sky-300/0 sm:left-1/2 sm:-translate-x-1/2" />

                    {educationData.map((edu, index) => (
                        <EducationCard key={`${edu.school}-${edu.duration}`} data={edu} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function EducationCard({ data, index }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isEven ? -24 : 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`relative mb-8 flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
        >
            <div className="absolute left-4 top-8 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-sky-400 bg-slate-950 sm:left-1/2 sm:top-10 sm:-translate-x-1/2" />

            <div className="hidden md:block md:w-1/2" />

            <div className={`w-full pl-10 md:w-1/2 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <article className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                            <FaGraduationCap className="text-2xl text-sky-300" />
                            <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-[11px] font-semibold text-cyan-100">
                                {data.tag}
                            </span>
                        </div>
                        <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                            {data.duration}
                        </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white">{data.school}</h3>
                    <p className="mt-1 text-sm text-slate-300">{data.location}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200">{data.degree}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                        <span className="text-xs uppercase tracking-[0.12em] text-slate-400">Academic Result</span>
                        <span className="rounded-md border border-emerald-300/35 bg-emerald-300/10 px-2.5 py-1 text-sm font-semibold text-emerald-100">
                            {data.score}
                        </span>
                    </div>
                </article>
            </div>
        </motion.div>
    );
}
