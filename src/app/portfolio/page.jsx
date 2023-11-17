"use client"
import { useState} from "react";
import Image from "next/image"
import Link from "next/link"
import db from "src/jennaDB.js"

//const cachedTabs = cache(db.getTabs())
//const cachedSocials = cache(db.getSocial())


//Tab Componenent Functions
const tabComponents = {
  Social: <Social />,
  Bio: <Bio />,
  Projects: <Projects />,
  Resume: <Resume/>,
}

function Social() {
  const [socials,setSocials] = useState(db.getSocial())

  const socialItems = socials.map((social) => {
    return (
      <li key={social.name} className="p-3">
        <div className="flex flex-row items-center">
          <Image width={100} height={100} src={social.icon} alt={social["icon-alt"]} />
          <Link className="pl-8 text-2xl text-blue-500"href={social.link}>{social.name}</Link>
        </div>
      </li>
    )})

  return(
    <div className="flex flex-col items-center">
      <h2 className="text-center p-4 font-bold text-xl ">Social Media</h2>
      <ul className="">{socialItems}</ul>
    </div>
  )
}

function Bio() {
  return(<p>Empty Bio</p>)
}

function Projects() {
  return(<p>Empty Projects</p>)
}

function Resume () {
  return(<p>Empty Resume</p>)
}


//Page Components
function Header() {
  return (
    <div className="w-full min-w-fit">
      <h1 className="w-f text-center text-4xl font-bold p-10 md:pb-14 whitespace-nowrap">Jenna Mathison</h1>
    </div>
  );
}

function View({tab}) {
  const tabComponent = tabComponents[tab]

  return(tabComponent)
}

function Content() {
  const tabsList = db.getTabs()
  const [tab,setTab] = useState(tabsList[0])
  const tabs = tabsList.map(name => <button className="m-1 md:m-2 font-bold flex-grow text-md md:text-xl  p-1 lg:px-3 text-center bg-slate-100 rounded-xl shadow-sm" key={name} onClick={() => {setTab(name)}}>{name}</button>)

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-5/6 md:w-3/5 lg:w-1/2 p-1 pt-1 items-center bg-rose-200 rounded-xl shadow-md">
        <div className="flex flex-row flex-grow min-h-max min-w-fit w-4/5 md:w-4/5 lg:w-3/5  max-w-xl justify-center p-2 rounded-xl">{tabs}</div>
        <div className="w-full pb-6 px-6"><View tab={tab} /></div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col items-center h-screen">
      <Header />
      <Content />
    </main>
  );
}