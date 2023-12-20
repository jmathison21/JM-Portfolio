"use client"
import Image from "next/image"
import Link from "next/link"

export default function Project({ project }) {
    /*const image =
        project.picture != "" ? (
            <Image
                src={project.picture}
                alt={project["picture-alt"]}
                width={200}
                height={200}
            />
        ) : (
            <></>
        )*/
    return (
        <li className="flex flex-row space-x-4 rounded-xl bg-white p-3">
            <div className="flex flex-col space-y-2 sm:space-y-3">
                <h2 className="text-xl font-bold lg:text-2xl">{project.name}</h2>
                <p className="text-md lg:text-xl">{project.description}</p>
                <p className="text-md lg:text-xl"><span className="font-bold">Technologies: </span> {project.technologies}</p>
            </div>
        </li>
    )
}
