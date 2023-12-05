import Project from "./Project"
import db from "src/jennaDB"

function Projects({content}) {
    if(content == null) {
        return <p>content not found</p>
    }

    const projects = content.Projects.map((project) => {<Project project={project} />})

    return (<ul>
        {projects}
    </ul>)
}

export default async function Page() {
    const data = await db.getTabContent("Projects")

    return (<Projects content={data}/>)
}