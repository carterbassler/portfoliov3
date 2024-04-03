import { ArrowUpRight } from "lucide-react";
import React, { ReactElement } from "react";
import SkillIcon from "./SkillIcon";
import Image from "next/image";
import { Barbell, Code, SpotifyLogo } from "@phosphor-icons/react";

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

type Props = {
  project: ProjectProps;
};

function Project({ project }: Props) {
  const isUrlBlank = !project.url;
  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 group justify-center w-full hover:bg-[#0a1930] hover:bg-opacity-50 transition duration-500 ease-in-out rounded-lg p-3">
      <div className="flex items-center md:justify-center md:w-1/4 aspect-w-16 aspect-h-9">
        <div className="flex items-center justify-center rounded-xl p-4 h-16 w-16 md:h-24 md:w-24 bg-teal-800 text-teal-300">
          {project.icon}
        </div>
      </div>
      <div className="md:w-3/4 flex-col space-y-2">
        <div className="flex flex-col">
          <a
            target={isUrlBlank ? undefined : "_blank"}
            href={isUrlBlank ? undefined : project.url}
            rel={isUrlBlank ? undefined : "noopener noreferrer"}
          >
            <div className="flex flex-row space-x-2">
              <h1 className="font-bold text-lg md:text-xl group-hover:text-[#64FFDA] text-white transition duration-500 ease-in-out">
                {project.name}
              </h1>
              {isUrlBlank ? (
                <Code size={24} className="text-white group-hover:text-[#64FFDA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-500 ease-in-out transform" />
              ) : (
                <ArrowUpRight className="text-white group-hover:text-[#64FFDA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-500 ease-in-out transform" />
              )}
            </div>
          </a>
          <h1 className="text-white text-sm md:text-base text-opacity-80">
            {project.description}
          </h1>
        </div>
        <div className="flex flex-wrap justify-start mt-3">
          {project.skills.map((skill) => (
            <SkillIcon key={String(skill)} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
