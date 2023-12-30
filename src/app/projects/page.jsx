import Image from "next/image"
import Link from "next/link"
import {getDB}from "../data"

function TechBox({name}) {
    return (
        <span>{name}</span>
    )
}

function Project({ project }) {
    const image =
        project.pictures.length != 0 ? (
            <div className="w-20">
                <Image
                    src={project.pictures[0]}
                    alt={project["picture-alts"][0]}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
        ) : (
            <></>
        )
    return (
        <div className="flex flex-row space-x-4 rounded-xl bg-slate-300 p-3 shadow-sm sm:w-2/3 xl:w-1/2">
            {image}
            <div className="flex flex-col space-y-2 sm:space-y-3">
                <h2 className="text-xl font-bold lg:text-2xl">{project.name}</h2>
                <p className="text-md lg:text-xl">{project.description}</p>
                <p className="text-md lg:text-xl"><span className="font-bold">Technologies: </span> {project.technologies}</p>
            </div>
        </div>
    )
}

function Projects({ content }) {
    if (content == null) {
        return <p>content not found</p>
    }

    const projects = content.Projects.map((project) => {
        return <Project project={project} key={project.name} />
    })

    return (
        <div className="flex flex-col items-center py-8 px-6 space-y-6 lg:py-10">{projects}</div>
    )
}

export default async function Page() {
    const db = await getDB()
    const data = db.tabs.find(tab => tab.name === "Projects").content

    return <Projects content={data} />
}
