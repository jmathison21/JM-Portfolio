"use client"
import { useEffect, useState} from "react";
import Link from "next/link"

function TabButton({name, tab, setTab}) {
    return (
    <Link className={"font-bold flex-grow text-xl py-0 px-4 z-10 text-center rounded-2xl hover:bg-slate-500 duration-100" + (tab == name ? " bg-slate-500" : " bg-transparent")} href={"/" +  name.toLowerCase()} onClick={() => {setTab(name)}}>{name}</Link>
    )
}

export default function Tabs({tabsList}) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const [tab,setTab] = useState(tabsList[0])
    const tabs = tabsList.map(name => <TabButton key={name} name={name} tab={tab} setTab={setTab}/>)

    useEffect(() => {
        
    }, [tab,tabs])
    
    return (
        <div className="flex flex-row w-fit h-fit space-x-2 m-4 bg-slate-100 justify-center rounded-2xl shadow-sm">
            {tabs}
        </div>)
}