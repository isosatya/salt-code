/****************************************** EXERCISE 1 */

function dataType(param) {
    if (typeof param == "undefined") {
        console.log("undefined!");
    } else if (param === null) {
        console.log("null!");
    } else if (typeof param == "number") {
        if (isNaN(param)) {
            console.log("not a number!");
        } else {
            console.log("number!");
        }
    } else if (typeof param == "string") {
        console.log("string!");
    } else if (typeof param == "boolean") {
        console.log("boolean!");
    } else if (typeof param == "function") {
        console.log("function!");
    } else if (typeof param == "object") {
        if (Array.isArray(param)) {
            console.log("array!");
        } else {
            console.log("object!");
        }
    } else {
        console.log("I have no idea!");
    }
}
var a;
var b = null;
var c = 666;
var d = "hola amigos!";
/*var e = 'abc66';*/
var f = false;
var g = function fn() {};
var h = [1, 2, 3, 4];
var i = {
    name: "Andres",
    surname: "Singh"
};
var j = Symbol();

dataType(a);
dataType(b);
dataType(c);
dataType(d);
dataType(NaN);
dataType(f);
dataType(g);
dataType(h);
dataType(i);
dataType(j);

/****************************************** EXERCISE 2 */

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};

for (var x in a) {
    b[a[x]] = x;
}

console.log(b);

/****************************************** EXERCISE 3 */

for (var i = 10; i > 0; i--) {
    console.log(i);
}
