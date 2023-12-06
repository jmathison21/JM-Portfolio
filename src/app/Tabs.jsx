"use client"
import { useEffect, useState} from "react";
import Link from "next/link"

function TabButton({name, setTab}) {
    return (
    <Link className="font-bold flex-grow text-xl p-2 text-center bg-transparent rounded-2xl selected:bg-slate-500 hover:bg-slate-500 sel" key={name} href={"/" +  name.toLowerCase()} onClick={() => {setTab(name)}}>{name}</Link>
    )
}

export default function Tabs({tabsList}) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const [tab,setTab] = useState(tabsList[0])
    const tabs = tabsList.map(name => <TabButton key={name} name={name} setTab={setTab}/>)

    useEffect(() => {
        
    }, [tab])
    
    return (
        <div className="flex flex-row w-fit space-x-2 m-2 bg-slate-100 justify-center rounded-2xl shadow-sm">
            {tabs}
        </div>)
}