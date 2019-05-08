const express = require("express");
const app = express();
const twtApi = require("./twtApi");

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    // console.log("this is the log before the twtApi.getToken()");
    twtApi.getToken((err, token) => {
        if (err) {
            res.sendStatus(500);
        } else {
            twtApi.getTweets(token, (err, tweets) => {
                if (err) {
                    console.log("this is before the res.sendStatus(500) IF");
                    res.sendStatus(500);
                } else {
                    res.json(tweets);
                }
            });
        }
    });
});

app.listen(8080, () => console.log("im listening"));
