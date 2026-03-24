// Importing React's useState hook for managing component state
import { useState } from "react";

// Importing motion component from Framer Motion for animations
import { motion } from "framer-motion";

// Importing EmailJS SDK
import emailjs from "@emailjs/browser";

// Importing Particles Background (same as Home component)
import ParticlesBackground from "../components/ParticlesBackground.jsx";

// Reading EmailJS credentials from environment variables (Vite)
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const CONTACT_EMAIL = "mantukumar0003571@gmail.com";
const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;



    setFormData((p) => ({ ...p, [name]: value }));

    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = () => {
    const required = ["name", "email", "idea"];
    const newErrors = {};

    required.forEach(
      (f) => !formData[f].trim() && (newErrors[f] = "Fill this field")
    );

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nIdea:\n${formData.idea}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          from_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({ name: "", email: "", idea: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden px-4 py-24 text-white sm:px-6 lg:px-10"
      style={{
        background:
          "radial-gradient(900px circle at 8% -12%, rgba(40,100,255,0.27), transparent 43%), radial-gradient(900px circle at 90% 8%, rgba(8,190,195,0.22), transparent 44%), linear-gradient(180deg, #020916 0%, #031025 58%, #031227 100%)",
      }}
    >
      <ParticlesBackground />

      <div className="pointer-events-none absolute left-[-120px] top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
            Have an idea, internship opening, or collaboration in mind? Share the details and I
            will respond with a clear plan.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-6"
        >
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-900/60">
              <motion.img
                src="/images/Astra.webp"
                alt="Contact illustration"
                className="mx-auto h-64 w-full max-w-md object-contain p-4 sm:h-72"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 inline-block text-sm font-semibold text-cyan-100 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Response Time</p>
                <p className="mt-1 text-sm font-semibold text-white">Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-md sm:p-8"
        >
          <h3 className="text-3xl font-black text-white">Send a Message</h3>
          <p className="mt-2 text-slate-300">
            Or email me directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-cyan-300 hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>

          {!isEmailJsConfigured && (
            <p className="mt-5 rounded-lg border border-yellow-300/35 bg-yellow-300/10 px-4 py-3 text-sm text-yellow-200">
              Direct form delivery is not configured in this local setup. Submitting will open your email app with a prefilled draft instead.
            </p>
          )}

          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-slate-200">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`rounded-md border bg-slate-900/70 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${
                  errors.name ? "border-red-500" : "border-slate-600"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-slate-200">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`rounded-md border bg-slate-900/70 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${
                  errors.email ? "border-red-500" : "border-slate-600"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-slate-200">
                Idea <span className="text-red-500">*</span>
              </label>

              <textarea
                name="idea"
                rows={5}
                placeholder="Enter your idea"
                value={formData.idea}
                onChange={handleChange}
                className={`rounded-md border bg-slate-900/70 p-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 ${
                  errors.idea ? "border-red-500" : "border-slate-600"
                }`}
              />

              {errors.idea && (
                <p className="text-red-500 text-xs">{errors.idea}</p>
              )}
            </div>

            {status && (
              <p
                className={`text-sm ${status === "success"
                  ? "text-green-400"
                  : status === "mailto"
                    ? "text-blue-300"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                  }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message sent successfully ✅"
                    : status === "mailto"
                      ? "Opening your email app with a prefilled message..."
                      : "Something went wrong ❌"}
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status === "sending"}
              type="submit"
              className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 py-3 font-semibold text-white transition hover:brightness-110 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
