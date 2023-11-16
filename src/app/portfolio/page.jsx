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
  console.log(socials)

  const socialItems = socials.map((social) => {
    return (
      <li key={social.name}>
        <Image width={100} height={100} src={social.icon} alt={social["icon-alt"]} />
        <Link href={social.link}>{social.name}</Link>
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
    <div>
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
    <div>
      <div>{tabs}</div>
      <div><View tab={tab} /></div>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <Header />
      <Content />
    </main>
  );
}