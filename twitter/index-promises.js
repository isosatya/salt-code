const express = require("express");
const app = express();
const twtApi = require("./twtApi");

let { getToken, getTweets } = twtApi;

console.log(getToken);

app.use(express.static("./public"));

app.get("/data.json", (req, res) => {
    // console.log("this is the log before the twtApi.getToken()");
    getToken()
        .then(token => {
            Promise.all([
                getTweets(token, "OddNewsUPI"),
                getTweets(token, "TheSun"),
                getTweets(token, "HuffPostWeird")
            ]).then(tweets => {
                let upi = tweets[0];
                for (var i = 0; i < tweets[0].length; i++) {
                    upi[i].text[0] += " (UPI News)";
                    // console.log("UPI Tweet", upi);
                }

                let sun = tweets[1];
                for (i = 0; i < tweets[1].length; i++) {
                    sun[i].text[0] += " (The Sun)";
                }
                let huff = tweets[2];
                for (i = 0; i < tweets[2].length; i++) {
                    huff[i].text[0] += " (HuffPostWeird)";
                }

                let mergArr = upi.concat(sun, huff);
                // console.log("NOT sorted mergarr", mergArr);

                for (i = 0; i < mergArr.length; i++) {
                    // console.log("date of creation!", mergArr[i].date);
                    mergArr[i].date = new Date(mergArr[i].date).getTime();
                    // console.log("NEW date of creation!", mergArr[i].date);
                }

                mergArr.sort(function(a, b) {
                    return a.date - b.date;
                });

                for (i = 0; i < mergArr.length; i++) {
                    mergArr[i].date = new Date(mergArr[i].date);
                }
                // console.log("sorted mergArr", mergArr);

                res.json(mergArr);
                // console.log("sorted mergArr", mergArr);
            });
        })
        .catch(function(err) {
            console.log("this is before the res.sendStatus(500) IF", err);
            res.sendStatus(500);
        });
});

app.listen(8080, () => console.log("im listening"));
