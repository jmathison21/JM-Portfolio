"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

function TabButton({ name, tab, setTab }) {
    const href = name === "Home" ? "/" : "/" + name.toLowerCase()
    return (
        <Link
            className={
                "z-10 w-fit rounded-full px-4 py-1 text-center text-lg font-bold duration-100 hover:bg-rose-400 lg:text-2xl xl:text-3xl "
                + (tab === name.toLowerCase() ? "bg-rose-400" : "bg-white")
            }
            href={href}
            onClick={() => {
                setTab(name.toLowerCase())
            }}>
            {name}
        </Link>
    )
}

export default function Tabs({ tabsList }) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const pathname = usePathname().split("/").pop()
    const [tab, setTab] = useState(
        pathname == "" ? tabsList[0].toLowerCase() : pathname
    )

    const tabs = tabsList.map((name) => (
        <TabButton key={name} name={name} tab={tab} setTab={setTab} />
    ))

    

    return (
        <div className="flex flex-row w-fit space-x-3 m-3 sm:mx-4 lg:mx-8 lg:space-x-6">
            {tabs}
        </div>
    )
}
