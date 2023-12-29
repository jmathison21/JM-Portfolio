"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

function TabButton({ name, tab, setTab }) {
    const href = name === "Home" ? "/" : "/" + name.toLowerCase()
    return (
        <Link
            className={
                "z-10 w-32 rounded-2xl px-4 py-1 text-center text-xl font-bold duration-100 hover:bg-slate-400 xl:w-36 xl:text-2xl"
            }
            href={href}
            onClick={() => {
                setTab(name)
            }}>
            {name}
        </Link>
    )
}

export default function Tabs({ tabsList }) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const [tab, setTab] = useState(tabsList[0])

    const tabs = tabsList.map((name) => (
        <TabButton key={name} name={name} tab={tab} setTab={setTab} />
    ))

    //useEffect(() => {}, [tab, tabs])

    return (
        <div className="">
            {tabs}
        </div>
    )
}
