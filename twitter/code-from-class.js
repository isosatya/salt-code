// {
//     "consumerKey": "RouqA5cn9188jmscqsloNofbP",
//     "consumerSecret": "empxhtIJcIF8xXFHTt1xOFMAJGZx0GNorP6xUmF1BPQMieeg7v"
// }

const express = require("express");
const app = express();
const twtapi = require("./twtapi");

app.use(express.static("./public"));

//callback has to always be called, even if theres an error (browser will keep spinning, because thers no response)

app.get("/data.json", (req, res) =>
    twtapi.getToken(function(err, token) {
        if (err) {
            res.sendStatus(500);
        } else {
            twtapi.getTweets(/*getMadonna*/ token, function(err, tweets) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.json(tweets);
                }
            });
        }
    })
);

app.listen(8080, () => console.log("i am listening"));
