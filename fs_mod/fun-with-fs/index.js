const fs = require("fs");
const chalk = require("chalk");

const myPath = __dirname;
// console.log(myPath);
var i;

function logSizes(dirPath) {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.log(err);
            process.exit();
        } else {
            // console.log(files);

            for (i = 0; i < files.length; i++) {
                var pathFilDir = dirPath + "/" + files[i].name;

                if (files[i].isFile()) {
                    fs.stat(pathFilDir, (err, stats) => {
                        if (err) {
                            console.log(err);
                            process.exit();
                        } else {
                            console.log(
                                chalk.magenta(
                                    `The path to the file is: ${pathFilDir} :`
                                )
                            );
                            console.log(
                                chalk.bgMagenta(`${stats.size} (Size)`)
                            );
                        }
                    });
                } else if (files[i].isDirectory()) {
                    logSizes(pathFilDir);
                }
            }
        }
    });
}

logSizes(myPath);

// `The path to the file is: ${pathFilDir} : ${stats.size} (Size)`;
