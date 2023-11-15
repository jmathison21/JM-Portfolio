
import Tabs from "./tabs.jsx"

//Fetch jennaDB
import db from "/jennaDB.json"
/*async function getDB() {
  return await fetch("http://localhost:3000/jennaDB.json").then(res => res.json())
}
const db = await getDB()*/


//React Components
function Header() {
  return (
    <div>
      <h1>Jenna Mathison</h1>
    </div>
  );
  }

function View() {
  return (
    <div>
      <p>View Content</p>
    </div>
  );
}

function Content() {
  const tabs = db.tabs.map(tab => tab.name)
  console.log(tabs)

  const tabState = tabs[0]

  return (
    <div>
      <Tabs names={tabs}/>
      <View />
    </div>
  );
}

//Page Export function
export default async function Page() {
  return (
    <main>
      <Header />
      <Content />
    </main>
  );
}