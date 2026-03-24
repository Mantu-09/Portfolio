import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Timezone from "./sections/Timezone";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WhatsAppPopup from "./components/WhatsAppPopup";
import ProjectDetails from "./pages/ProjectDetails";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    if (!hash) {
      return;
    }

    const targetId = hash.replace("#", "");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return null;
}

function PortfolioHome() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative animated-gradient text-white">
      <CustomCursor />
      <Navbar />

      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}

      <Home introDone={introDone} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Education />
      <Timezone />
      <Contact />
      <Footer />
      <WhatsAppPopup />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
