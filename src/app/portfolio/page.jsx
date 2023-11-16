"use client"
import { useEffect, useState } from "react";
import db from "src/jennaDB.js"


//Tab Componenent Functions
const tabComponents = {
  Social: <Social />,
  Bio: <Bio />,
  Projects: <Projects />,
  Resume: <Resume/>,
}

function Social() {
  return(<p>Empty Social</p>)
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