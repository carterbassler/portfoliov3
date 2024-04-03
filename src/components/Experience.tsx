import { ArrowUpRight } from "lucide-react";
import React from "react";
import SkillIcon from "./SkillIcon";
import { motion } from "framer-motion";

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

type Props = {
  experience: ExperienceProps;
};

function Experience({ experience }: Props) {
  return (
    <div className="flex flex-row md:space-x-4 group hover:bg-[#0a1930] hover:bg-opacity-50 transition duration-500 ease-in-out rounded-lg p-3">
      <div className="hidden md:flex md:w-1/4">
        <h1 className="text-white text-xs md:text-base text-opacity-80">
          {experience.duration}
        </h1>
      </div>
      <div className="flex md:w-3/4 justify-center">
        <div className="flex flex-col space-y-2">
          <div>
            <a target="_blank" href={experience.url} rel="noopener noreferrer">
              <div className="flex flex-row space-x-2">
                <h1 className="font-bold text-lg md:text-xl group-hover:text-[#64FFDA] text-white transition duration-500 ease-in-out">
                  {experience.company}
                </h1>
                <ArrowUpRight className="text-white group-hover:text-[#64FFDA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-500 ease-in-out transform" />
              </div>
            </a>
            <h1 className="text-white text-md md:text-lg text-opacity-80">
              {experience.position}
            </h1>
            <h1 className="text-white text-sm md:text-base text-opacity-80">
              {experience.description}
            </h1>
          </div>
          <div className="flex flex-wrap justify-start mt-3">
            {experience.skills.map((skill) => (
              <SkillIcon key={String(skill)} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
