const fs = require("fs");

const pathArg = "/Users/Andres/Desktop/Fenixxx";

function mapSizes(path) {
    // console.log(path);
    let obj = {};
    let files = fs.readdirSync(path, { withFileTypes: true });
    // console.log(files);
    for (let i = 0; i < files.length; i++) {
        let newPath = path + "/" + files[i].name;
        // console.log("path for each element", newPath);
        if (files[i].isFile()) {
            let stats = fs.statSync(newPath);
            let size = stats.size;
            obj[files[i].name] = size;
        } else if (files[i].isDirectory()) {
            obj[files[i].name] = mapSizes(newPath);
        }
    }
    return obj;
}

// console.log(mapSizes(arg));

const jsonObj = JSON.stringify(mapSizes(pathArg), null, 4);

fs.writeFileSync(pathArg + "/myFiles.json", jsonObj);
