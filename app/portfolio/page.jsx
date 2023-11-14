//React Components
function Header() {
  return (
    <div>
      <h1>Jenna Mathison</h1>
    </div>
  );
  }

function Tabs() {
  const tabs = ["Socials","Projects","Experience","Education","Skills"]
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



//Fetch jennaDB
async function getDB() {
  const res = await fetch("http://localhost:3000/jennaDB.json")
  const data = res.json()
  return data
}


//Page Export function
export default async function Page() {
  const db = getDB()
  console.log(db)

  return (
    <main>
      <Header />
      <Content />
    </main>
  );
}