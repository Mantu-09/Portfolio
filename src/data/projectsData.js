export const PROJECTS = [
  {
    id: "careerpilot",
    title: "CareerPilot",
    subtitle: "AI-Powered Career Guidance Platform",
    description:
      "An AI-first mentoring assistant for students with personalized roadmap generation, mock interviews, and skill-gap insights.",
    duration: "Nov 2025 - Present",
    category: "Full Stack",
    badges: ["Featured", "API Integration"],
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "LangChain", "Pinecone"],
    metrics: "40% faster career planning workflow",
    liveUrl: "https://careerpilot-app.vercel.app/",
    sourceUrl: "https://github.com/Mantu-09",
    image: "/images/careerpilot-banner.png",
  },
  {
    id: "bookmyappointment",
    title: "BookMyAppointment",
    subtitle: "Healthtech Platform",
    description:
      "A full-stack healthtech platform enabling online doctor appointments with location-based search, role-based dashboards, secure authentication, and integrated payment gateways. Currently enhancing with AI-based recommendations.",
    duration: "2026",
    category: "Full Stack",
    badges: ["Healthcare", "Full Stack"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Payment Gateway"],
    metrics: "Optimized healthcare accessibility & seamless transactions",
    liveUrl: "https://github.com/Mantu-09",
    sourceUrl: "https://github.com/Mantu-09",
    image: "/images/bookmyappointment-banner.png",
  },
  {
    id: "yuvastay",
    title: "YuvaStay",
    subtitle: "PG Booking Platform Near Campus",
    description:
      "A booking platform that helps students discover nearby PGs with map-based discovery, image-rich listings, and fast inquiry handling.",
    duration: "Aug 2025 - Sep 2025",
    category: "Web App",
    badges: ["Frontend", "Full Stack"],
    tech: ["Node.js", "Express", "MongoDB", "Bootstrap", "Tailwind", "Cloudinary", "Mapbox"],
    metrics: "Reduced property search time by 55%",
    liveUrl: "https://github.com/Mantu-09",
    sourceUrl: "https://github.com/Mantu-09",
    image: "/images/Yuva-stay-banner.png",
  },
  {
    id: "car-rental",
    title: "Car Rental Suite",
    subtitle: "Full Booking Workflow for Rentals",
    description:
      "A complete rental experience with availability logic, pricing snapshots, and a streamlined reservation funnel.",
    duration: "2024",
    category: "Full Stack",
    badges: ["Web App"],
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    metrics: "Cut booking drop-off by 27%",
    liveUrl: "https://github.com/Mantu-09",
    sourceUrl: "https://github.com/Mantu-09",
    image: "/images/car-rental-banner.png",
  },
  
];

export const findProjectById = (projectId) => PROJECTS.find((project) => project.id === projectId);