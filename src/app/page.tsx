"use client";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactElement, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { Barbell, SpotifyLogo, Strategy } from "@phosphor-icons/react";

class ExperienceProps {
  company: String;
  position: String;
  url: string;
  duration: String;
  description: String;
  skills: String[];

  constructor(
    company: String,
    position: String,
    url: string,
    duration: String,
    description: String,
    skills: String[]
  ) {
    this.company = company;
    this.position = position;
    this.url = url;
    this.duration = duration;
    this.description = description;
    this.skills = skills;
  }
}

const experience1 = new ExperienceProps(
  "CrowdVolt",
  "Founding Software Engineer",
  "https://crowdvolt.com",
  "Jan 2024 - Present",
  "Building out the frontend at YCombinator backed peer-to-peer, bid-ask style marketplace that allows fans to exchange tickets to live events.",
  [
    "React",
    "Next.js",
    "TailwindCSS",
    "HTML",
    "Typescript",
    "Python",
    "PostgreSQL",
  ]
);

const experience2 = new ExperienceProps(
  "Bank of New York Mellon",
  "Software Engineer Intern",
  "https://www.bnymellon.com/",
  "June - Aug 2023",
  "As part of the wealth management engineering team, I developed an internal web tool to provide ease of access and improve application performance for team members. Utilized Angular and microfrontend architecture, along with Spring for efficient REST API development.",
  ["Angular", "Java", "Spring Boot", "HTML/CSS", "Typescript"]
);

const experience3 = new ExperienceProps(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "https://www.fcm.com/",
  "June - Aug 2022",
  "Independently developed an internal tool that significantly reduced manual processing time and boosted workflow efficiency for the team. The tool was integrated into the engineering platform using .NET Core and utilized a machine learning model with a 92% accuracy rate to efficiently automate previously manual filtration processes.",
  [".NET Core", "C#", "LINQ", "REGEX", "C# ML"]
);

const experience4 = new ExperienceProps(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "https://www.fcm.com/",
  "June - Aug 2021",
  "Developed an internal tool to help visualize over 40,000 data points of insurance loss. Created as an Angular web app, the tool utilized the Google Maps API to enhance data visualization and lookup, providing a seamless user experience through faster data retrieval and processing.",
  ["Angular", "Google Maps API", "Javascript", "HTML/CSS"]
);

class ProjectProps {
  name: String;
  description: String;
  url: string;
  image: string;
  skills: String[];
  icon: ReactElement;

  constructor(
    name: String,
    description: String,
    url: string,
    image: string,
    skills: String[],
    icon: ReactElement
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.image = image;
    this.skills = skills;
    this.icon = icon;
  }
}

const project1 = new ProjectProps(
  "Vibify - Spotify Helper",
  "A Next JS web application that uses NextAuth and the Spotify API to allow users to log in and automate the process of saving their 'Discover Weekly' playlist. Also allows users to view their Spotify Wrapped.",
  "https://music-helper-app.vercel.app/",
  "/vibify.png",
  ["Next.js", "Spotify API", "NextAuth", "React", "TailwindCSS"],
  <SpotifyLogo size={48} weight="fill" />
);

const project2 = new ProjectProps(
  "Imperium",
  "A full-stack Flutter/Dart mobile application with workout tracking exercise addition, and set management features. Incorporated Firebase Firestore for real-time data handling and Firebase Authentication for secure user access control.",
  "https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone",
  "/imperium.png",
  ["Flutter", "Dart", "Firebase"],
  <Barbell size={48} weight="fill" />
);
const project3 = new ProjectProps(
  "EdgeVantage",
  "A full-stack NextJs web app processes and aggregates odds from 5 sportsbooks using advanced data analysis to identify arbitrage opportunities and bets with positive Expected Value (EV), enhancing decision-making.",
  "",
  "/edgevantage.png",
  ["Next.js", "Typescript", "TailwindCSS", "Python", "FastAPI"],
  <Strategy size={48} weight="fill" />
);

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.5, // Adjust based on your needs
      }
    );

    const sections = [
      aboutRef.current,
      experienceRef.current,
      projectsRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_rgba(0,70,140,0.2)_0%,_rgba(0,70,140,0.1)_50%,_transparent_100%)] before:opacity-100"
    >
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row px-6 md:px-12 lg:px-0 lg:w-4/5">
          <Hero activeSection={activeSection} />
          <div className="flex flex-col space-y-20 lg:w-3/5 overflow-y-auto pb-12 lg:py-24">
            <section ref={aboutRef} id="about">
              <About />
            </section>

            <section ref={experienceRef} id="experience">
              <div className="flex flex-col space-y-6 lg:space-y-12">
                <Experience experience={experience1} />
                <Experience experience={experience2} />
                <Experience experience={experience3} />
                <Experience experience={experience4} />
              </div>
            </section>
            <section ref={projectsRef} id="projects">
              <div className="flex flex-col space-y-6 lg:space-y-12">
                <Project project={project1} />
                <Project project={project2} />
                <Project project={project3} />
              </div>
            </section>
            <Footer />
          </div>
        </div>
      </div>
      <header className="hidden md:absolute bottom-0 right-0 p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Time Travel</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Visit Previous Iterations of My Portfolio
              </DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-2">
              <h1>Image</h1>
              <h1>Image</h1>
              <h1>Image</h1>
              <h1>Image</h1>
            </div>
          </DialogContent>
        </Dialog>
      </header>
    </motion.section>
  );
}
