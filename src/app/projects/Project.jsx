"use client"
import Image from "next/image"
import Link from "next/link"

export default function Project({ project }) {
    const image =
        project.picture != "" ? (
            <Image
                src={project.picture}
                alt={project["picture-alt"]}
                width={200}
                height={200}
            />
        ) : (
            <></>
        )
    return (
        <li className="flex flex-row space-x-4 rounded-xl bg-white p-2">
            {image}
            <div className="flex flex-col space-y-2">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-md">{project.description}</p>
                <p className="text-md">Technologies: {project.technologies}</p>
            </div>
        </li>
    )
}
