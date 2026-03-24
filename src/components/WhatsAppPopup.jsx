import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppPopup() {
    const [showButton, setShowButton] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show button after 5 seconds
        const timer = setTimeout(() => {
            setShowButton(true);
            setShowPopup(true); // Show popup initially with button
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!showButton) return;

        // Loop popup visibility every 5 seconds (visible for 3s, hidden for 2s)
        const loopTimer = setInterval(() => {
            setShowPopup((prev) => !prev);
        }, 5000);

        return () => clearInterval(loopTimer);
    }, [showButton]);

    return (
        <AnimatePresence>
            {showButton && (
                <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
                    {/* Animated "Hi" Message Bubble */}
                    <AnimatePresence>
                        {showPopup && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="bg-white text-black px-3 py-1 rounded-lg shadow-md mb-1 relative"
                            >
                                <span className="font-bold text-sm">Hi 👋</span>
                                {/* Triangle pointer */}
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-white rotate-45" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Icon Button */}
                    <motion.a
                        href="https://wa.me/919430260097"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
                        initial={{ opacity: 0, y: 50, scale: 0.5, rotate: -180 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: showPopup ? 1.2 : 1, // "Pop" effect when message appears
                            rotate: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15
                        }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaWhatsapp className="text-3xl" />
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}
