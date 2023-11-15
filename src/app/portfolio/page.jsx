"use client"
import { useEffect, useState } from "react";
import db from "src/jennaDB.js"


function Header() {
  return (
    <div>
      <h1>Jenna Mathison</h1>
    </div>
  );
  }

function View({tab}) {
  const tabContent = db.getTabContent(tab)
  console.log(tab,tabContent)

  return(<p>{tabContent}</p>)
}

function Content() {
  const tabsList = db.getTabs()
  const [tab,setTab] = useState(tabsList[0])
  const tabs = tabsList.map(name => <button key={name} onClick={() => {setTab(name)}}>{name}</button>)

  return (
    <>
    <div>
      <div>{tabs}</div>
      <div id="content"><View tab={tab} /></div>
    </div>
    </>
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