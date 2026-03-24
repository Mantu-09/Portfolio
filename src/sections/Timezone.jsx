import React, { useState, useEffect } from "react";
import Globe from "../components/Globe";
import { motion } from "framer-motion";

export default function Timezone() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
    });

    return (
        <section id="timezone" className="w-full py-16 sm:py-20 bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 px-4 sm:px-6">

            {/* Left: Clock / Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-md shadow-2xl w-full max-w-md"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Global Connectivity
                </h2>
                <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
                    Working across timezones to deliver excellence properly.
                </p>

                <div className="flex flex-col gap-2">
                    <span className="text-xs sm:text-sm text-gray-500 font-mono tracking-widest uppercase">
                        My Local Time
                    </span>
                    <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-wider">
                        {formattedTime}
                    </div>
                    <span className="text-blue-400 font-medium text-sm sm:text-base">
                        INDIA (IST)
                    </span>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-4 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                    <span>Open to work globally</span>
                </div>
            </motion.div>

            {/* Right: Globe */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full flex items-center justify-center relative z-0 min-h-[280px] sm:min-h-[380px] md:min-h-[500px] max-w-lg md:max-w-none"
            >
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
                <Globe />
            </motion.div>

        </section>
    );
}
