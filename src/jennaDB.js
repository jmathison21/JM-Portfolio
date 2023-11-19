import db from "./jennaDB.json"

const jdb = {
    getTabs: function() {
        return db.tabs.map(tab => tab.name)
    },
    getTabContent: function(tab) {
        return db[tab]
    }
}

export default jdb