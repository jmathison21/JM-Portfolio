async function getDB() {
    const res = await fetch(process.env.NEXT_PUBLIC_DB_URL, {headers: {"Content-Type": "application/json", "Accept": "application/json"}, cache: "no-store"})

    if(!res.ok) {
        return null
    }

    return await res.json()
}

const db = await getDB()

const jdb = {
    getTabs: function() {
        const tabs = db.tabs.map(tab => tab.name)
        return tabs
    },
    getTabContent: function(tab) {
        for (let i = 0; i < db.tabs.length; i++) {
            if (db.tabs[i].name === tab) {
                return db.tabs[i].content
            }
        }
        return "Content Not Found"
    },
    getDB: function() {
        return db
    }
}

export default jdb