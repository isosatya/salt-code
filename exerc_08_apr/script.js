/****************************************** EXERCISE 1 */

function style(string) {
    var selector = document.querySelectorAll(string);
    for (var i = 0; i < selector.length; i++) {
        selector[i].style.fontStyle = "italic";
        selector[i].style.textDecoration = "underline";
        selector[i].style.fontWeight = "bold";
    }
}

/****************************************** EXERCISE 2 */

function arr(string) {
    var elements = document.getElementsByClassName(string);
    return Array.from(elements);
}

/****************************************** EXERCISE 3 */

function insert(elem) {
    var myNewElem = document.createElement(elem);
    var text = document.createTextNode("AWESOME");
    myNewElem.appendChild(text);
    myNewElem.style.position = "fixed";
    myNewElem.style.left = "20px";
    myNewElem.style.top = "100px";
    myNewElem.style.zIndex = 2147483647;
    myNewElem.style.fontSize = "200px";
    document.body.appendChild(myNewElem);
}
