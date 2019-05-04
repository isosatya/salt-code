const http = require("http");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

http.createServer((req, res) => {
    if (req.method != "GET") {
        res.statusCode = 405;
        res.end();
        return;
    }

    if (req.url == "/") {
        const projHtml = require("./index2.js");
        const result = projHtml.listProjects();
        res.end(result);
        // console.log(result);
    }

    var myPath = path.normalize(__dirname + "/projects" + req.url);
    // console.log(typeof myPath);

    if (!myPath.startsWith(__dirname + "/projects")) {
        res.statusCode = 403;
        res.end();
        process.exit();
    }

    // console.log("myPath before the fsstat", myPath);
    fs.stat(myPath, (err, stats) => {
        if (err) {
            console.log("NO FILE FOUND ERROR", err);
            res.statusCode = 404;
            res.end();
            return;
        } else {
            if (stats.isFile()) {
                // console.log("hi im a file!!!!!");

                var contType = "";
                const ext = path.extname(myPath);
                // console.log(ext);

                switch (ext) {
                    case ".html":
                        contType = "text/html";
                        break;
                    case ".css":
                        contType = "text/css";
                        break;
                    case ".js":
                        contType = "text/javascript";
                        break;
                    case ".json":
                        contType = "application/json";
                        break;
                    case ".gif":
                        contType = "image/gif";
                        break;
                    case ".jpg":
                        contType = "image/jpeg";
                        break;
                    case ".png":
                        contType = "image/png";
                        break;
                    case ".svg":
                        contType = "image/svg+xml";
                        break;
                }

                res.setHeader("content-type", contType);

                // console.log(contType);

                const readStream = fs.createReadStream(myPath);
                readStream.pipe(res);

                readStream.on("error", err => {
                    console.log(err);
                    res.statusCode = 404;
                    res.end();
                });
            } else if (stats.isDirectory()) {
                // console.log("hi im a directory!!!!");

                if (req.url.endsWith("/")) {
                    // chalk.green(console.log("i entered the / if!!!!"));
                    var htmlPath = myPath + "index.html";
                    const readStream = fs.createReadStream(htmlPath);
                    readStream.pipe(res);
                    readStream.on("error", err => {
                        console.log(err);
                        res.statusCode = 404;
                        res.end();
                    });
                    // res.end();
                } else {
                    // chalk.red(console.log("i entered the NON / ifff"));
                    // htmlPath = myPath + "/" + "index.html";
                    res.setHeader("Location", req.url + "/");
                    res.statusCode = 302;
                    res.end();
                    // console.log(htmlPath);
                }
            }
        }
    });

    req.on("error", err => console.log(err));
    res.on("error", err => console.log(err));
}).listen(8080, () => console.log("I AM LISTENING ;-)"));
