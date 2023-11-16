import db from "./jennaDB.json"

const jdb = {
    getTabs: function() {
        return db.tabs.map(tab => tab.name)
    },
    getSocial: function() {
        return db.Social
    }
}

export default jdb