import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Speak Feed Project",
    subtitle: "Interactive Feedback & Speaker Platform",
    description:
      "A modern platform aimed at helping public speakers receive live feedback, manage referrals, and connect with audiences. Inspired by the SPEAKFEED trademark and platform concept — a web application focused on empowering speakers with tools to rate, book, and improve their speaking skills and presence.",
    tags: ["Ongoing", "Next.js", "TypeScript"],
    image: "/speakfeed.webp",
    liveDemo: "https://speakfeed.com/en",
    githubRepo: "#",
    projectColor: "#eb631b",
  },
  {
    title: "ShaadiPros Platform",
    subtitle: "Real-Time Blog Engine with Next.js 16 & Gemini AI",
    description:
      "A full-stack, AI-native platform providing a dynamic real-time blog engine, content suggestions, and seamless publishing workflows. Integrated with Convex serverless backend, Google Gemini AI for content generation, and a solid CI/CD setup enabling fast deployments and code reliability.",
    tags: [
      "Next.js 16",
      "React 19",
      "Convex",
      "Google Gemini",
      "ImageKit",
      "Clerk",
      "Tailwind CSS 4",
      "Shadcn UI",
      "TypeScript",
      "Zod",
      "Docker",
    ],
    image: "/Shaadipros.webp",
    liveDemo: "https://shaadipros.com/",
    githubRepo: "#",
    projectColor: "#df9c19",
  },
  {
    title: "VIAI",
    subtitle: "AI-Powered Athletic & Performance Tech",
    description:
      "A tech demo showcasing advanced wearable AI performance tracking and coaching tools. Built to integrate smart hardware with real-time AI analytics for athletes — offering performance insights, training indicators, and data visualization to help users optimize physical activity and reach goals.",
    tags: [
      "Next.js",
      "MySQL",
      "Auth.js",
      "Bcrypt",
      "Zod",
      "HMAC",
      "ESLint",
      "Prettier",
      "Husky",
      "Lint-Staged",
    ],
    image: "/Viai.webp",
    liveDemo: "https://viainow.com/",
    githubRepo: "#",
    projectColor: "#7c3aed",
  },
  {
    title: "Fliz",
    subtitle: "Heavy Equipment & Rental Marketplace",
    description:
      "A high-performance rental platform connecting businesses and individuals with heavy equipment providers. Focused on seamless discovery, secure payments, and logistics tracking, the site delivers a streamlined experience for selecting and booking machinery online.",
    tags: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "TanStack Query",
      "Axios",
      "React Router",
      "React Toastify",
      "React Slick",
    ],
    image: "/fliz.webp",
    liveDemo: "https://fliz.com.sa/en/renter/companies",
    githubRepo: "#",
    projectColor: "#fec08c",
  },
  {
    title: "Modern Portfolio",
    subtitle: "Ranjan — Frontend Developer",
    description:
      "A personalized portfolio showcasing skills, projects, and design sensibilities with interactive animations, customizable theme settings (light/dark + colors), and smooth navigation to present a distinctive online identity.",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Context API",
      "Email JS",
      "AI",
    ],
    image: "/My-Portfolio.webp",
    liveDemo: "https://ranjangupta.vercel.app/",
    githubRepo: "https://github.com/Ranjan404/my-portfolio",
    projectColor: "#EA580C",
  },
  {
    title: "Abdomax",
    subtitle: "Medical & Health Equipment Services",
    description:
      "Frontend of a modern healthcare support portal designed to simplify scheduling, monitoring, and usage tracking for medical machines. Built for responsive performance and engaging discovery experiences with optimized loading speeds.",
    tags: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "TanStack Query",
      "Axios",
      "React Router",
      "React Toastify",
      "React Slick",
    ],
    image: "/Abdomax.webp",
    liveDemo: "https://www.abdomax.ch/fr",
    githubRepo: "#",
    projectColor: "#95db32",
  },
  {
    title: "Tick'It",
    subtitle: "Facility Task & Workflow Management",
    description:
      "A responsive task tracking and management platform designed to coordinate tasks across teams with real-time updates, automated alerts, role-based views, and polished UI transitions — aimed at improving productivity and accountability without a backend.",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Context API",
      "React Toastify",
    ],
    image: "/tickit.webp",
    liveDemo: "https://tickit.co/",
    githubRepo: "#",
    projectColor: "#000000",
  },
];

const ProjectTimeline = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: project.projectColor,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold inline-block px-6 py-2 relative z-10"
            style={{
              color: themeColors.primaryColor,
              backgroundColor: themeColors.bg,
            }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">Latest Works</span>
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-1 mx-auto"
              style={{ backgroundColor: themeColors.primaryColor }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.h2>
        </motion.div>

        {/* Vertical timeline line */}
        <div
          className="w-0.5 hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2"
          style={{ backgroundColor: themeColors.primaryColor }}
        ></div>

        {/* Projects */}
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;

            return (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isHovered={isHovered}
                setHoveredProject={setHoveredProject}
              />
            );
          })}
        </div>
      </div>

      {/*Note for Read... */}
      <motion.div
        className="max-w-2xl mx-auto mt-20 px-6 relative group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            backgroundColor: themeColors.cardBg,
            border: `1px solid ${themeColors.borderLight}`,
            boxShadow: `0 4px 20px ${themeColors.shadow}`,
            opacity: 0.7,
          }}
        />

        <div className="relative z-10 p-6 md:p-8">
          <div className="flex items-start gap-4">
            {/* <div
              className="flex-shrink-0 mt-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: themeColors.accentGold }}
            /> */}

            <div>
              <motion.p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: themeColors.text }}
                whileHover={{
                  x: 4,
                  transition: { duration: 0.3 },
                }}
              >
                <span
                  className="font-bold"
                  style={{ color: themeColors.primaryColor }}
                >
                  Project Selection:{" "}
                </span>
                During my learning journey, I built several practice projects
                including{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  calculator
                </span>
                ,{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  watches
                </span>
                ,{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  website clones
                </span>
                , and{" "}
                <span
                  className="font-medium"
                  style={{ color: themeColors.accentBlue }}
                >
                  many more
                </span>{" "}
                to sharpen my skills. The projects shown above represent my{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGreen }}
                >
                  best work
                </span>{" "}
                — fully designed and developed from scratch, showcasing complete{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGold }}
                >
                  UI/UX ownership
                </span>{" "}
                and{" "}
                <span
                  className="font-semibold"
                  style={{ color: themeColors.accentGold }}
                >
                  project building logic
                </span>
                .
              </motion.p>

              <motion.div
                className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 border-t"
                style={{ borderColor: themeColors.borderLight }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: themeColors.accentRed }}
                  />
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: themeColors.summeryText }}
                  >
                    Currently Mastering
                  </span>
                </div>

                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: themeColors.cardSecondary,
                    color: themeColors.secondary,
                    border: `1px solid ${themeColors.border}`,
                  }}
                >
                  Next.js
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectTimeline;
