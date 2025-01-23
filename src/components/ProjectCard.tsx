import { IoGlobeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/types/types";



export default function ProjectCard({project}: {project: Project}) {
  return (
    <div className="bg-neutral-800 text-neutral-200 p-4 rounded-xl">
      <div className="pb-2">
        <img src="null" alt="" className="w-full h-40" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-100">{project.name}</h3>
      <div className="text-neutral-300">{project.date}</div>
      <div className="pb-1 text-neutral-400">{project.description}</div>
      <hr className="border-neutral-500" />
      <div className="flex flex-wrap gap-2 py-2">
        {project.techs.map((tech, index) => (
          <div key={index} className="py-1 px-3 bg-neutral-700 rounded">{tech}</div>
        ))}

      </div>
      <div className="flex gap-2">
        <a href={project.url} target="_blank" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <IoGlobeOutline className="text-base" />
          Website</a>
        <a href={project.github} target="_blank" className="flex items-center gap-1 bg-neutral-950 hover:bg-neutral-900 py-1 px-3 rounded">
          <FaGithub className="text-base" />
          Github</a>
      </div>
    </div>
  )
}
