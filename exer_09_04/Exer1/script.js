document.addEventListener("mousemove", function(e) {
    document.getElementById("box").style.left = e.pageX /*- 50*/ + "px";
    document.getElementById("box").style.top = e.pageY /*- 50*/ + "px";
});
