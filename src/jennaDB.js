import db from "./jennaDB.json"

const jdb = {
    getTabs: function() {
        return db.tabs.map(tab => tab.name)
    },
    getTabContent: function(tab) {
        return "none"
    },
    getImageURL: function(imageName)  {
        return ""
    }
}

export default jdb