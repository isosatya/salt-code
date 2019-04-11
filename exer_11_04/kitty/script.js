// var kitties = document.querySelectorAll("#kitties");

(function() {
    var kitty = document.getElementsByClassName("kitty");

    var curr = 0;

    setTimeout(moveKitty, 3000);

    document.addEventListener("transitionend", function fn(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            setTimeout(moveKitty, 3000);
        }
    });

    function moveKitty() {
        kitty[curr].classList.remove("on");
        kitty[curr].classList.add("exit");
        curr++;
        if (curr >= kitty.length) {
            curr = 0;
        }
        kitty[curr].classList.add("on");
    }
})();
