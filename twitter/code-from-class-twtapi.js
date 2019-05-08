const https = require("https");
const {consumerKey, consumerSecret} = require("./secrets");
// we need two requests, on to get the TOKEN; one to get the TWEETS
// lets do a GET TOKEN function, and one GET TWEETS function, both need to be asynchronous

exports.getToken = function (callback) {
    const encoded = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64")
    const req = https.request({
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            "content-type": "application/x-www...etc", // get this from twitter website developers
            authorization: `Basic ${encoded}`
        }
    }, (res) => {
        console.log(res.statusCode);
        if (res.statusCode != 200) {
            callback(new Error(res.statusCode))
        } else {
            let body = "";
            res.on("data", chunk => body += chunk)
            res.on("end", () => console.log(body)
            // here in the body i should get access_token, that is the token i need
            try {
                body = JSON.parse(body)
                token = body.access_token // i use this then in the next twitter function

            })
        }
    })
}

exports.getMadonna = function(callback) { // this would be token and twitt function that have to be exported
    const req = https.request(
        {
            host: "elegant-croissant.glitch.me",
            path: "/spotify?q=madonna&type=artist",
            method: "GET",
            port: 443,
            headers: {
                "x-funky-whatever": "whatever text"

            }
        },
        res => {
            console.log(res.statusCode);
            console.log(res.headers);
            //we need to add events, so we know when the body is there available
            let body = "";
            if (res.statusCode == 200) {
                callback(new Error(res.statusCode))
            } else {
                res.on("data", chunk => (body += chunk));
                res.on("end", () => {
                    try {
                        body = body.json.parse(body);
                        console.log(body.artists.items[0]);
                        callback(null, body);
                    } catch (e) {
                        console.log(e);
                    }
                });
            }
        }

    })
    req.on("error",f err => {
        callback(err)
    );
    req.end();
};

// normally GEt request dont have body because they dont need it. only POST do
// but in case needed, we use req.write for sending a body
// req.write("text=funky+chicken&color=magenta")
