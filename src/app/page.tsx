"use client";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
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

export const Highlight = ({
  children,
  className,
  link,
}: {
  children: React.ReactNode;
  className?: string;
  link: string;
}) => {
  return (
    <a target="_blank" href={link}>
      <span
        className={cn(
          "font-bold  bg-blue-700/[0.2] text-blue-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    </a>
  );
};

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
  "Spearheaded the transition to Next.js, leveraged modern technologies, and efficiently migrated the existing React.js codebase, contributing to enhanced performance, maintainability, and user experience of the platform.",
  ["React", "Next.js", "TailwindCSS", "HTML", "Typescript"]
);

const experience2 = new ExperienceProps(
  "Bank of New York Mellon",
  "Software Engineer Intern",
  "https://www.bnymellon.com/",
  "Jun - Aug 2023",
  "As part of the wealth management engineering team, I developed an internal web tool to provide ease of access and improve application performance for team members. Utilized Angular and microfrontend architecture, along with Spring for efficient REST API development.",
  ["Angular", "Java", "Spring Boot", "HTML/CSS", "Typescript"]
);

const experience3 = new ExperienceProps(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "https://www.fcm.com/",
  "Jun - Aug 2022",
  "Independently developed an internal tool that significantly reduced manual processing time and boosted workflow efficiency for the team. The tool was integrated into the engineering platform using .NET Core and utilized a machine learning model with a 92% accuracy rate to efficiently automate previously manual filtration processes.",
  [".NET Core", "C#", "LINQ", "REGEX", "C# ML"]
);

const experience4 = new ExperienceProps(
  "Fermat Capital Management",
  "Software Engineer Intern",
  "https://www.fcm.com/",
  "Jun - Aug 2021",
  "Developed an internal tool to help visualize over 40,000 data points of insurance loss. Created as an Angular web app, the tool utilized the Google Maps API to enhance data visualization and lookup, providing a seamless user experience through faster data retrieval and processing.",
  ["Angular", "Google Maps API", "Javascript", "HTML/CSS"]
);

class ProjectProps {
  name: String;
  description: String;
  url: string;
  image: string;
  skills: String[];

  constructor(
    name: String,
    description: String,
    url: string,
    image: string,
    skills: String[]
  ) {
    this.name = name;
    this.description = description;
    this.url = url;
    this.image = image;
    this.skills = skills;
  }
}

const project1 = new ProjectProps(
  "Vibify - Spotify Helper",
  "A Next JS web application that uses NextAuth and the Spotify API to allow users to log in and automate the process of saving their 'Discover Weekly' playlist. Also allows users to view their Spotify Wrapped.",
  "https://vibify.vercel.app",
  "/vibify.png",
  ["Next.js", "Spotify API", "NextAuth", "React", "TailwindCSS"]
);

const project2 = new ProjectProps(
  "Imperium",
  "A full-stack Flutter/Dart mobile application with workout tracking exercise addition, and set management features. Incorporated Firebase Firestore for real-time data handling and Firebase Authentication for secure user access control.",
  "https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone",
  "/",
  ["Flutter", "Dart"]
);
const project3 = new ProjectProps(
  "Loo's List Clone",
  "A full-stack Django web application to display real-time University of Virginia class listings, integrated with Google user accounts for secure authentication, and utilized PostgreSQL for efficient data storage and access.",
  "/",
  "",
  ["Django", "Python", "PostgreSQL", "HTML", "CSS", "Javascript"]
);
const project4 = new ProjectProps(
  "EdgeVantage",
  "A full-stack NextJs web app processes and aggregates odds from 5 sportsbooks using advanced data analysis to identify arbitrage opportunities and bets with positive Expected Value (EV), enhancing decision-making.",
  "",
  "/",
  ["Next.js", "Typescript", "TailwindCSS", "Python", "FastAPI"]
);

export default function Home() {
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
  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_rgba(0,70,140,0.2)_0%,_rgba(0,70,140,0.1)_50%,_transparent_100%)] before:opacity-100"
    >
      <div className="flex justify-center">
        <div className="flex flex-col xl:flex-row w-4/5">
          <Hero />
          <div className="flex flex-col space-y-24 w-3/5 overflow-y-auto py-24">
            <section id="about">
              <div id="about" className="flex flex-col space-y-8 p-3">
                <p>
                  I am a fourth-year Computer Science student at the{" "}
                  <Highlight link={"https://www.cavalierdaily.com/"}>
                    University of Virginia
                  </Highlight>
                  . I love creating and developing things that I am passionate
                  about like my workout tracker app{" "}
                  <Highlight
                    link={
                      "https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone"
                    }
                  >
                    Imperium
                  </Highlight>
                </p>
                <p>
                  I've always been a lover of racket sports but have been
                  getting really into{" "}
                  <Highlight
                    link={
                      "https://www.theonion.com/things-to-never-say-to-someone-who-loves-pickleball-1850540860"
                    }
                  >
                    Pickleball
                  </Highlight>{" "}
                  and Squash recently
                </p>
                <p>
                  I'm really passionate about music and listen to almost
                  everything there is. Check out my{" "}
                  <Highlight
                    link={
                      "https://open.spotify.com/user/bassler.spotify?si=bf92c113ca744a9a"
                    }
                  >
                    Spotify Profile
                  </Highlight>{" "}
                  for some of my favorite playlists!
                </p>
              </div>
            </section>

            <section id="experience">
              <div className="flex flex-col space-y-12">
                <Experience experience={experience1} />
                <Experience experience={experience2} />
                <Experience experience={experience3} />
                <Experience experience={experience4} />
              </div>
            </section>
            <section id="projects">
              <div className="flex flex-col space-y-12">
                <Project project={project1} />
                <Project project={project2} />
                <Project project={project3} />
                <Project project={project4} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <header className="absolute bottom-0 right-0 p-4">
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
