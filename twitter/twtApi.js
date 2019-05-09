const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");

let getToken = function() {
    return new Promise(function(resolve, reject) {
        const encoded = Buffer.from(
            `${consumerKey}:${consumerSecret}`
        ).toString("base64");
        const req = https.request(
            {
                host: "api.twitter.com",
                path: "/oauth2/token",
                method: "POST",
                headers: {
                    "content-type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                    authorization: `Basic ${encoded}`
                }
            },
            res => {
                if (res.statusCode != 200) {
                    // console.log(res.statusCode);
                    reject(new Error(res.statusCode));
                } else {
                    // console.log(res.statusCode);
                    let body = "";
                    res.on("data", chunk => (body += chunk)).on("end", () => {
                        try {
                            body = JSON.parse(body);
                            // console.log(body);
                            resolve(body.access_token);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        );
        req.on("error", err => {
            console.log(err);
            reject(err);
        });
        req.write("grant_type=client_credentials");
        req.end();
    });
};

exports.getToken = getToken;

let getTweets = function(token, screenName) {
    return new Promise(function(resolve, reject) {
        const req = https.request(
            {
                host: "api.twitter.com",
                // path: "/1.1/statuses/user_timeline.json",
                path: `/1.1/statuses/user_timeline.json?screen_name=${screenName}&count=5`,
                // method: "GET",
                // tweet_mode: "extended",
                // screen_name: "@TheSun",
                // count: "20",
                headers: {
                    authorization: `Bearer ${token}`
                }
            },
            res => {
                if (res.statusCode != 200) {
                    console.log(res.statusCode);
                    reject(new Error(res.statusCode));
                } else {
                    // console.log(res.statusCode);
                    let body = "";
                    res.on("data", chunk => (body += chunk)).on("end", () => {
                        try {
                            body = JSON.parse(body);
                            // console.log(body);
                            body = body
                                .filter(item => {
                                    return (
                                        item.entities.urls &&
                                        item.entities.urls.length == 1
                                    );
                                })
                                .map(item => {
                                    return {
                                        text: item.text.split("http", 1),
                                        date: item.created_at,
                                        href: item.entities.urls[0].url
                                    };
                                });
                            // console.log("body at the api fn", body);

                            resolve(body);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            }
        );
        req.on("error", err => {
            console.log(err);
            reject(err);
        });
        req.end();
    });
};

exports.getTweets = getTweets;
