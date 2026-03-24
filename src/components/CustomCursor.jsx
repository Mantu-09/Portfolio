import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device — hide custom cursor on touch screens
    const touchCheck = () => setIsTouch(true);
    window.addEventListener("touchstart", touchCheck, { once: true });

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("touchstart", touchCheck);
    };
  }, []);

  // Don't render on touch/mobile (touch devices have no pointer)
  if (isTouch) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
        transition: "transform 0.05s linear",
      }}
    >
      <div
        className="w-20 h-20 rounded-full 
                   bg-gradient-to-r from-pink-500 to-blue-500 
                   blur-3xl opacity-80"
      />
    </div>
  );
}
