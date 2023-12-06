"use client"
import Image from "next/image"
import Link from "next/link"

export default function Project({project, key}) {
    const image = project.picture != "" ? <Image src={project.picture} alt={project["picture-alt"]} width={200} height={200}/> : <></>
    return (
    <li key={key} className="flex flex-row space-x-4 bg-white rounded-xl p-2">
        {image}
        <div className="flex flex-col space-y-2">
            <h2 className="font-bold text-xl">{project.name}</h2>
            <p className="text-md">{project.description}</p>
            <p className="text-md">Technologies: {project.technologies}</p>
        </div>
    </li>)
}