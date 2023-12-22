import Image from "next/image"
import Link from "next/link"

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
        <li className="flex flex-row space-x-4 rounded-xl bg-white p-3">
            {image}
            <div className="flex flex-col space-y-2 sm:space-y-3">
                <h2 className="text-xl font-bold lg:text-2xl">{project.name}</h2>
                <p className="text-md lg:text-xl">{project.description}</p>
                <p className="text-md lg:text-xl"><span className="font-bold">Technologies: </span> {project.technologies}</p>
            </div>
        </li>
    )
}

function Projects({ content }) {
    if (content == null) {
        return <p>content not found</p>
    }

    const projects = content.Projects.map((project) => {
        return <Project project={project} key={project.name} />
    })

    return <ul className="space-y-4 sm:space-y-6">{projects}</ul>
}

async function getDB() {
    const revalidate =
        process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ? 0 : 3600
    const dbURL =
        revalidate != 0
            ? process.env.NEXT_PUBLIC_DB_URL
            : process.env.DEV_DB_URL
    const res = await fetch(dbURL, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        next: { revalidate: revalidate },
    })

    if (!res.ok) {
        return null
    }

    return await res.json()
}

export default async function Page() {
    const db = await getDB()
    const data = db.tabs.find(tab => tab.name === "Projects").content

    return <Projects content={data} />
}
