"use client"
import { useState} from "react";
import Link from "next/link"

export default function Tabs({tabsList}) {
    tabsList = tabsList != null ? tabsList : ["None"]
    const [tab,setTab] = useState(tabsList[0])
    const tabs = tabsList.map(name => <Link className="m-1 md:m-2 font-bold flex-grow text-md md:text-xl  p-1 lg:px-3 text-center bg-slate-100 rounded-xl shadow-sm" key={name} href={"/" +  name.toLowerCase()} onClick={() => {setTab(name)}}>{name}</Link>)
    
    return (<div className="flex flex-row flex-grow min-h-max min-w-fit w-4/5 md:w-4/5 lg:w-3/5  max-w-xl justify-center p-2 rounded-xl">{tabs}</div>)
}