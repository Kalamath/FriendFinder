// This is to load the data

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET REQUEST

    app.get("api/friends", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        friends.push(req.body);
        res.json(true);
    });
}
