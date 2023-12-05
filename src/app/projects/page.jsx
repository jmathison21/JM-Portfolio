import Project from "./Project"

function Projects({content}) {
    if(content == undefined) {
        return <p>content not found</p>
    }

    const projects = content.Projects.map((project) => {<Project project={project} />})

    return (<ul>
        {projects}
    </ul>)
}

async function getContent(page) {
    let baseURL = "http://" + process.env.HOSTNAME
    process.env.PORT == 3000 ? baseURL = baseURL + ":" + process.env.PORT : Null

    const fetchURL = new URL("/api", baseURL)
    fetchURL.searchParams.append("query","content")
    fetchURL.searchParams.append("page", page)

    const res = await fetch(fetchURL, {cache: "no-store"})

    if(!res.ok) {
        return undefined
    } 

    return await res.json()
}

export default async function Page() {
    const data = await getContent("Projects")

    return (<Projects content={data}/>)
}