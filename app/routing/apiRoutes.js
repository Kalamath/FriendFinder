// This is to load the data

var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET REQUEST

    app.get("api/friends", function (req, res) {
        res.json(answerArray);
    });
    
    app.post("/api/friends", function (req, res) {
        // This is used to loop through all the matches
        var bestMatch = {
            name: "",
            photo: "",
            matchDifference: 1000
        };

        // This is used to take the user survey and POST it
        var user = req.body;
        var userScore = user.scores;

        // The difference between the friend's scores
        var totalDifference = 0;

        // We need to loop through all the matches in the db
        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i].name);
            totalDifference = 0;

            // This will loop through all the scores
            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScore[j]) - parseInt(friendsData[i].scores[j]));

                // If the sum is less than the differences
                if (totalDifference <= bestMatch.matchDifference) {

                    bestMatch.name = friendsData[i].name;
                    bestMatch.photo = friendsData[i].photo;
                    bestMatch.friendsData = totalDifference;
                }
            }
        }

        // This is to save the user data into the database
        friendsData.push(user);

        // Return a JSON with the users bestMatch
        res.json(bestMatch)
    });
}
