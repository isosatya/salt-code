const express = require("express");
const hb = require("express-handlebars");
const app = express();
// const futuramaArr = require("./futuramaData.json");
const fs = require("fs");
const path = require("path");

var projectsArr;

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("public")); // check whether this is correct
app.use(express.static("projects"));

// fs.stat(myPath, function(err, stats) {
//     if (err) {
//         console.log("ERROR  ->", err);
//     } else {
//         console.log("STATS  ->", stats);
//     }
// });

projectsArr = [];

fs.readdir(__dirname + "/projects/", { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log(err);
        process.exit();
    } else {
        for (var i = 0; i < files.length; i++) {
            projectsArr.push(files[i].name);
        }
        // console.log(projectsArr);
    }
});

// const section = `<!DOCTYPE html>
//                         <html lang="en" dir="ltr">
//                         <head>
//                         <meta charset="utf-8">
//                         <title>List of Projects</title>
//                         </head>
//                         <body>
//                         <ul>
//                             ${html}
//                         </ul>
//                         </body>
//                         </html>`;
// console.log(section);
//     return projectsArr;
// }

app.get("/", (req, res) => {
    // console.log("testing projects folder");
    // console.log("console log before render", projectsArr);
    res.render("home", {
        layout: "main",
        siteName: "my Projects",
        project: projectsArr
    });
});

app.get("/:name/description", (req, res) => {
    var pathJson =
        __dirname + /projects/ + req.params.name + "/description.json";
    fs.readFile(pathJson, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        const description = JSON.parse(data);
        res.render("about", {
            layout: "main",
            // imgName: "screenshot.png",
            projectName: req.params.name,
            description: description,
            project: projectsArr
        });
        // description = data[description];
    });
});

app.get("/:name", (req, res) => {
    res.redirect(req.params.name + "/index.html");
});

app.listen(8080, () => console.log("i am listening test"));

/*

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        siteName: "Futurama",
        characters: futuramaArr
    }); // similar to send() but use it for template engines
    console.log("testing / url");
});

app.get("/about", (req, res) => {
    res.render("about", { layout: "main" });
});

app.get("/:name", (req, res) => {
    console.log(req.params.name);
    res.render("about", {
        layout: "main",
        imgName: req.params.name,
        characters: futuramaArr
    });
});

// i need description.json for the projects
// i need a screnshot for each console
// 1 partial for both nav bar styles

app.listen(8080, () => console.log("i am listening test"));

*/
