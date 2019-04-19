var friends = require("../data/friends.js");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        var input = req.body;
        var response = input.scores;


        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;


        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            console.log(currentFriend);


            var difference = 0;



            for (var j = 0; j < response.length; j++) {
                console.log("Check type: ", friends[i].scores[j]);
                console.log("Check type: ", response[j]);
                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(response[j]));
            }


            console.log("This is total difference", totalDifference);
            console.log("Difference", difference);

            console.log("friends", friends[i]);

            if (difference < totalDifference) {
                totalDifference = difference;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }

        }

        console.log("matchName", matchName);


        friends.push(input);

        console.log(matchImage);


        res.json(
            {
                status: "OK",
                matchName: matchName,
                matchImage: matchImage
            });
    });

};