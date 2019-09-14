// This is to load the data

var tableData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET REQUEST

    app.get("api/friends", function(req, res) {
        res.json(friendsData);
    });
}