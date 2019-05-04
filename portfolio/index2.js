const fs = require("fs");

const myPath = "/Users/Andres/Desktop/salt-code/portfolio/projects/";

function listProjects() {
    var files = fs.readdirSync(myPath, { withFileTypes: true });
    var html = "";

    for (var i = 0; i < files.length; i++) {
        if (files[i].isDirectory()) {
            var newPath = files[i].name;
            html += `<li><a href= "${newPath}">${files[i].name}</li>`;
        }
    }
    const section = `<!DOCTYPE html>
                            <html lang="en" dir="ltr">
                            <head>
                            <meta charset="utf-8">
                            <title>List of Projects</title>
                            </head>
                            <body>
                            <ul>
                                ${html}
                            </ul>
                            </body>
                            </html>`;
    // console.log(section);
    return section;
}

// const results = listProjects();
// console.log(results);

module.exports.listProjects = listProjects;
