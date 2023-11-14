export const metadata = {
  title: 'Jenna Mathison',
}

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

export default function Page() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}