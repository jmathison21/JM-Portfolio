//Fetch jennaDB
async function getDB() {
  return await fetch("http://localhost:3000/jennaDB.json").then(res => res.json())
}
const db = await getDB()


//React Components
function Header() {
  return (
    <div>
      <h1>Jenna Mathison</h1>
    </div>
  );
  }

function Tabs() {
  const tabs = db.tabs.map(tab => tab.name)
  return (
    <div>
      {tabs.map((name) => {
        return (<button>{name}</button>)
      })}
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
  return (
    <div>
      <Tabs />
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