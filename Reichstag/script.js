(function() {
    var box = document.getElementById("menubox");

    var banner = document.getElementById("hambmenu");

    var overlay = document.getElementById("overlay");

    box.addEventListener("click", function(e) {
        e.stopPropagation();
        banner.classList.add("on");
        banner.classList.remove("off");
        overlay.classList.add("on1");
        overlay.classList.remove("off1");
    });

    var x = document.getElementById("x");

    x.addEventListener("click", function(e) {
        e.stopPropagation();
        banner.classList.add("off");
        banner.classList.remove("on");
        overlay.classList.add("off1");
        overlay.classList.remove("on1");
    });

    var body = document.getElementsByTagName("body");

    body[0].addEventListener("click", function(e) {
        e.stopPropagation();
        banner.classList.add("off");
        banner.classList.remove("on");
        overlay.classList.add("off1");
        overlay.classList.remove("on1");
    });
})();
