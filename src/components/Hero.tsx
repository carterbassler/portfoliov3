import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PlayingAnimation from "./PlayingAnimation";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, File } from "lucide-react";
import { cn } from "@/lib/utils";

interface NowPlayingData {
  title: string;
  // You can add other properties as needed
}

interface HeroProps {
  activeSection: string;
}

const Hero: React.FC<HeroProps> = ({ activeSection }) => {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingData | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify-now-playing");
        if (response.ok) {
          const data: NowPlayingData = await response.json();
          setNowPlaying(data);
        } else {
          setNowPlaying(null);
        }
      } catch (error) {
        console.error("Error fetching now playing:", error);
        setNowPlaying(null);
      }
    };

    // Fetch now playing data initially
    fetchNowPlaying();

    // Set up polling to fetch now playing data every 5 seconds (5000 milliseconds)
    const interval = setInterval(fetchNowPlaying, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Current active section:", activeSection);
  }, [activeSection]);

  return (
    <div>
      <div
        id="header"
        className="flex flex-col space-y-8 lg:space-y-24 sticky items-center lg:items-start top-0 py-12 lg:py-24"
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Carter Bassler</h1>
          <h1 className="text-xl">Founding Engineer at CrowdVolt</h1>
          <h1 className="text-base md:text-lg text-white text-opacity-70 w-3/4">
            I love building well-designed, user-friendly products on the web and
            mobile.
          </h1>
          <div className="flex flex-row items-center space-x-2">
            <div className="w-3 h-3 bg-[#64FFDA] rounded-full animate-pulse"></div>
            {nowPlaying && nowPlaying.title ? (
              <div className="flex items-center space-x-2 text-sm md:text-base">
                <span>Now Playing:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={nowPlaying.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <span>{nowPlaying.title}</span>
                    <PlayingAnimation />
                  </motion.span>
                </AnimatePresence>
              </div>
            ) : (
              <span>Not Listening</span>
            )}
          </div>
        </div>
        <div className="hidden lg:flex flex-col space-y-2">
          {/* Adjust the activeSection check for each id */}
          <div className="flex flex-row items-center space-x-2">
            <div
              className={`border-t ${
                activeSection === "about" ? "border-2 w-12" : "border w-6"
              } my-4 border-white`}
            ></div>
            <h1
              id="about"
              className={`${activeSection === "about" ? "font-bold" : ""}`}
            >
              ABOUT
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div
              className={`border-t ${
                activeSection === "experience" ? "border-2 w-12" : "border w-6"
              } my-4 border-white`}
            ></div>
            <h1
              id="experience"
              className={`${activeSection === "experience" ? "font-bold" : ""}`}
            >
              EXPERIENCE
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div
              className={`border-t ${
                activeSection === "projects" ? "border-2 w-12" : "border w-6"
              } my-4 border-white`}
            ></div>
            <h1
              id="projects"
              className={`${activeSection === "projects" ? "font-bold" : ""}`}
            >
              PROJECTS
            </h1>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <a
            href="https://github.com/carterbassler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform"
            >
              <Github className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/carter-bassler-856a581a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform"
            >
              <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
          </a>
          <a
            href="/BasslerResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform"
            >
              <File className="h-6 w-6 md:h-8 md:w-8" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
