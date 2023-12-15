import Project from "./Project"

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
