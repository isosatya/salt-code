var box1 = document.getElementById("box1");

function getNumber() {
    return Math.floor(Math.random() * 256);
}

box1.addEventListener("click", function() {
    var r = getNumber();
    var g = getNumber();
    var b = getNumber();
    box1.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
});

var box2 = document.getElementById("box2");

box2.addEventListener("click", function(e) {
    e.stopPropagation();
    var r = getNumber();
    var g = getNumber();
    var b = getNumber();
    box2.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
});
