import Project from "./Project"

function Projects({content}) {
    if(content == undefined) {
        return <p>content not found</p>
    }

    const projects = content.map((project) => {<Project project={project} />})

    return (<ul>
        {projects}
    </ul>)
}

async function getContent(page) {
    let baseURL = "http://" + process.env.HOSTNAME
    process.env.PORT == 3000 ? baseURL = baseURL + ":" + process.env.PORT : Null
    const res = await fetch(new URL("/api", baseURL), {headers: {query:"content", page: page}})

    if(!res.ok) {
        return undefined
    } 

    return res.json().body
}

export default function Page() {
    const content = getContent("Projects")
    console.log("content", content)

    return (<Projects content={content}/>)
}