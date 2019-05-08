const https = require("https");
const { consumerKey, consumerSecret } = require("./secrets");
exports.getToken = function(callback) {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
        "base64"
    );
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
                callback(new Error(res.statusCode));
            } else {
                // console.log(res.statusCode);
                let body = "";
                res.on("data", chunk => (body += chunk)).on("end", () => {
                    try {
                        body = JSON.parse(body);
                        // console.log(body);
                        callback(null, body.access_token);
                    } catch (err) {
                        callback(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
        callback(err);
    });
    req.write("grant_type=client_credentials");
    req.end();
};

exports.getTweets = function(token, callback) {
    const req = https.request(
        {
            host: "api.twitter.com",
            // path: "/1.1/statuses/user_timeline.json",
            path:
                "/1.1/statuses/user_timeline.json?screen_name=@TheSun&count=20",
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
                callback(new Error(res.statusCode));
            } else {
                // console.log(res.statusCode);
                let body = "";
                res.on("data", chunk => (body += chunk)).on("end", () => {
                    try {
                        // console.log(body);
                        body = JSON.parse(body);
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
                                    href: item.entities.urls[0].url
                                };
                            });
                        console.log(body);

                        callback(null, body);
                    } catch (err) {
                        callback(err);
                    }
                });
            }
        }
    );
    req.on("error", err => {
        console.log(err);
        callback(err);
    });
    req.end();
};
