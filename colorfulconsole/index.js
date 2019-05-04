const http = require("http");
const fs = require("fs");
const querystring = require("querystring");
const chalk = require("chalk");

http.createServer((request, response) => {
    request.on("error", err => console.log(err));
    response.on("error", err => console.log(err));

    if (!request.method == "GET" && !request.method == "POST") {
        response.statusCode = 405;
        return response.end();
    }

    response.setHeader("Content-Type", "text/html");
    response.statusCode = 200;

    if (request.method == "GET") {
        response.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
        response.end();
    } else if (request.method == "POST") {
        let body = "";
        request
            .on("data", chunk => (body += chunk))
            .on("end", () => {
                console.log("BODY--->", body);
                var parsedBody = querystring.parse(body);
                console.log("parsed body", parsedBody.color);
                console.log(chalk[parsedBody.color](parsedBody.text));
                response.end(`<!doctype html>
                <html>
                <title>${parsedBody.text}</title>
                <a href="/" style=color:${parsedBody.color}>${
                    parsedBody.text
                }</a>
                </html>`);
            });
    }
}).listen(8080, console.log("IM LISTENING!!"));
