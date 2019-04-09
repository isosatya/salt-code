var box = document.getElementById("box");

function getNumber() {
    return Math.floor(Math.random() * 256);
}

box.addEventListener("mouseup", function() {
    var r = getNumber();
    var g = getNumber();
    var b = getNumber();
    box.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
});

box.addEventListener("mousedown", function() {
    var r = getNumber();
    var g = getNumber();
    var b = getNumber();
    box.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
});
