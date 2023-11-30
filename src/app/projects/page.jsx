"use client"
import {useState} from "react";
import Image from "next/image"
import Link from "next/link"

function Project({project}) {
    return (
        <div>
            <Image src={project.picture} alt={project["picture-alt"]} width={200} height={200}/>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </div>
    )
}

function Projects({content}) {
    if(content == "") {
        return <p>content not found</p>
    }

    const projects = content.map((project) => {<Project project={project} />})

    return (<div>
        {projects}
    </div>)
}


export default function Page({content}) {

    return (<Projects content={""}/>)
}