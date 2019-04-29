const url = require("url");
const queryString = require("querystring");
//
const urlObj = url.parse(process.argv[2]);
// console.log(urlObj);

var query = queryString.parse(urlObj.query);

const print = `The protocol is: ${urlObj.protocol}
The host is: ${urlObj.host}
The hostname is: ${urlObj.hostname}
The port is: ${urlObj.port}
The pathname is: ${urlObj.pathname}
The query is: ${urlObj.query}`;

// console.log(print2);

function printout() {
    console.log(print);
    for (var param in query) {
        console.log(`The value of the ${param} parameter is ${query[param]}`);
    }
}

setTimeout(printout, 1000);
