import db from "./jennaDB.json"

const jdb = {
    getTabs: function() {
        return db.tabs.map(tab => tab.name)
    },
    getTabContent: function(tab) {
        for (let i = 0; i < db.tabs.length; i++) {
            if (db.tabs[i].name === tab) {
                return db.tabs[i].content
            }
        }
        return "Tab Not Found"
    }
}

export default jdb