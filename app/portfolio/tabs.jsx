"use client"
import { useState } from "react";

export default function Tabs(props) {
    const [tab,setTab] = useState(props.names[0])
    const tabs = props.names.map(name => <button onClick={() => {setTab(name)}}>{name}</button>)
    return (
    <div>
        {tabs}
    </div>
    )
}