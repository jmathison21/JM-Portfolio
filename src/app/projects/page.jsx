"use client"
import {useState} from "react";
import Image from "next/image"
import Link from "next/link"
import db from "src/jennaDB.js"

function Projects() {
    const [content, setContent] = useState(db.getTabContent("Projects"))

    return (<p>Projects</p>)
}


export default function Page() {
    return (<Projects />)
}