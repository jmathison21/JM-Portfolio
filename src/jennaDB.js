import db from "./jennaDB.json"

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
    }
}

export default jdb