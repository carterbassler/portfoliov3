import { ArrowUpRight } from "lucide-react";
import React from "react";
import SkillIcon from "./SkillIcon";
import Image from "next/image";

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

type Props = {
  project: ProjectProps;
};

function Project({ project }: Props) {
  return (
    <div className="flex flex-row space-x-4 group justify-center w-full hover:bg-[#0a1930] hover:bg-opacity-50 transition duration-500 ease-in-out rounded-lg p-3">
      <div className="flex relative rounded-full w-1/4 aspect-w-9 aspect-h-9">
        <Image
          src={project.image}
          alt="Project Image"
          layout="fill"
          objectFit="contain"
          className=""
        />
      </div>
      <div className="w-3/4 flex-col space-y-2">
        <div className="flex flex-col">
          <a target="_blank" href={project.url} rel="noopener noreferrer">
            <div className="flex flex-row space-x-2">
              <h1 className="font-bold text-xl group-hover:text-[#64FFDA] text-white transition duration-500 ease-in-out">
                {project.name}
              </h1>
              <ArrowUpRight className="text-white group-hover:text-[#64FFDA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition duration-500 ease-in-out transform" />
            </div>
          </a>
          <h1>{project.description}</h1>
        </div>
        <div className="flex flex-wrap justify-start mt-3">
          {project.skills.map((skill) => (
            <SkillIcon key={skill} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
