module.exports = function fn(first, ...arg) {
    if (typeof first === "string" || Array.isArray(first)) {
        if (typeof first === "string") {
            return first
                .split("")
                .reverse()
                .join("");
        } else {
            for (var i = 0; i < first.length; i++) {
                if (typeof first[i] === "string") {
                    console.log("log before reverting string", first[i]);
                    first[i] = first[i]
                        .split("")
                        .reverse()
                        .join("");
                    console.log("log AFTER reverting string", first[i]);
                } else {
                    console.log("log before null assignment", first[i]);
                    first[i] = null;
                    console.log("log after null assignment", first[i]);
                }
            }
            return first;
        }
    } else {
        return null;
    }
};
