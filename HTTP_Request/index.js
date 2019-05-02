const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    // console.dir(request, { depth: 0 });

    console.log("HEADERS:     ", request.headers);

    const { method, url } = request;
    console.log(`METHOD:     ${method}
URL:        ${url}`);

    // console.log(request.headers["user-agent"]);

    var txtFileArr = [
        new Date(),
        request.method,
        request.url,
        request.headers["user-agent"]
    ];
    console.log("TEXT FILE ARRAY", txtFileArr);

    var txtFileStr = txtFileArr.join("\t") + "\n";
    console.log("TEXT FILE STRING", txtFileStr);

    fs.appendFile("requests.txt", txtFileStr, "utf8", err => {
        if (err) {
            console.log(err);
        }
    });

    request.on("error", err => console.log(err));
    response.on("error", err => console.log(err));

    if (request.method == "GET" || request.method == "HEAD") {
        response.setHeader("Content-Type", "text/html");
        if (request.method == "GET") {
            response.write(`<!doctype html>
                        <html>
                        <title>Hello World!</title>
                        <p>Hello World!
                        </html>`);
        }
        response.statusCode = 200;
        response.end();
    } else if (request.method == "POST") {
        // console.log("doing a POST request!!");
        response.setHeader("Location", "/");
        let body = [];
        // let body = "";
        request
            .on("data", chunk => body.push(chunk))
            // .on("data", chunk => (body += chunk))
            .on("end", () => console.log("BODY--->", body));
        response.statusCode = 302;
        response.end();
    } else {
        response.statusCode = 405;
        response.end();
    }
});

server.listen(8080);
