"use client"
import Image from "next/image"
import Link from "next/link"

export default function Project({project}) {
    return (
    <li key={project.name}>
        <Image src={project.picture} alt={project["picture-alt"]} width={200} height={200}/>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
    </li>)
}