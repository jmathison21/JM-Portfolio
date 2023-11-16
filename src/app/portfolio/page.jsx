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
      <li key={social.name} >
        <div className="flex flex-row items-center">
          <Image width={100} height={100} src={social.icon} alt={social["icon-alt"]} />
          <Link href={social.link}>{social.name}</Link>
        </div>
      </li>
    )})

  return(
      <ul>{socialItems}</ul>
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
    <div className="w-3/5">
      <h1>Jenna Mathison</h1>
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
  const tabs = tabsList.map(name => <button key={name} onClick={() => {setTab(name)}}>{name}</button>)

  return (
    <div className="w-3/5">
      <div>{tabs}</div>
      <div><View tab={tab} /></div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <Content />
    </main>
  );
}