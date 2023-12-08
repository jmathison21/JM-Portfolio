"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

function TabButton({ name, tab, setTab}) {
    return (
        <Link
            className={
                "z-10 w-32 rounded-2xl px-4 py-1 text-center text-xl font-bold duration-100 hover:bg-slate-400 " +
                (tab == name ? " bg-slate-400" : " bg-transparent") 
            }
            href={"/" + name.toLowerCase()}
            onClick={() => {
                setTab(name)
            }}>
            {name}
        </Link>
    )
}

export default function Tabs({ tabsList }) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const pathname = usePathname().split("/")[1]
    const [tab, setTab] = useState(
        tabsList.find((name) => name.toLowerCase() == pathname)
    )

    const tabs = tabsList.map((name) => (
        <TabButton key={name} name={name} tab={tab} setTab={setTab}/>
    ))

    useEffect(() => {}, [tab, tabs])

    return (
        <div className="m-4 flex h-fit w-fit flex-row justify-center space-x-2 rounded-2xl bg-slate-100 shadow-sm">
            {tabs}
        </div>
    )
}
