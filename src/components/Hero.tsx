import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, File } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import PlayingAnimation from "./PlayingAnimation";

interface NowPlayingData {
  title: string;
  // Add other properties as needed
}

function Hero() {
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
      }
    };

    // Fetch now playing data initially
    fetchNowPlaying();

    // Set up polling to fetch now playing data every 5 seconds
    const interval = setInterval(fetchNowPlaying, 1);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div id="header" className="flex flex-col space-y-8 xl:space-y-24 sticky items-center xl:items-start top-0 py-24">
        <div className="flex flex-col items-center xl:items-start text-center xl:text-start space-y-4">
          <h1 className="text-5xl font-bold">Carter Bassler</h1>
          <h1 className="text-xl">Founding Engineer at CrowdVolt</h1>
          <h1 className="text-lg text-white text-opacity-70 w-3/4">
            I love building well-designed, user friendly products on the web and
            mobile
          </h1>
          <div className="flex flex-row items-center space-x-2">
            <div className="w-3 h-3 bg-[#64FFDA] rounded-full animate-pulse"></div>
            {nowPlaying && nowPlaying.title ? (
              <div className="flex items-center space-x-2">
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
        <div className="hidden xl:flex flex-col space-y-2">
          <div className="flex flex-row items-center space-x-2">
            <div className="border-t border-white my-4 px-8 border-[1px]"></div>
            <h1 id="about" className="text-md text-white font-bold">
              ABOUT
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="border-t border-white border-opacity-80 my-4 px-4 border-[1px]"></div>
            <h1 id="experience" className="text-md text-white text-opacity-80">
              EXPERIENCE
            </h1>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <div className="border-t border-white border-opacity-80 my-4 px-4 border-[1px]"></div>
            <h1 id="projects" className="text-md text-white text-opacity-80">
              PROJECTS
            </h1>
          </div>
        </div>
        <div className="flex flex-row space-x-6">
          <a href="https://github.com/carterbassler" target="_blank">
            <Button variant="ghost" className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform">
              <Github className="h-8 w-8" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/carter-bassler-856a581a1/"
            target="_blank"
          >
            <Button variant="ghost" className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform">
              <Linkedin className="h-8 w-8" />
            </Button>
          </a>
          <a href="/BasslerResume.pdf" target="_blank">
            <Button variant="ghost" className="hover:text-[#64FFDA] hover:bg-transparent hover:-translate-y-2 transition duration-500 ease-in-out transform">
              <File className="h-8 w-8" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;