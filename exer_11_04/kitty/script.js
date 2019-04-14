// var kitties = document.querySelectorAll("#kitties");

(function() {
    var kitty = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    // console.log(dots);
    var curr = 0;
    var timeout;
    var index;
    var transition = false;

    timeout = setTimeout(moveKitty, 3000);

    document.addEventListener("transitionend", function fn(e) {
        if (e.target.classList.contains("exit")) {
            e.target.classList.remove("exit");
            transition = false;
            timeout = setTimeout(moveKitty, 3000);
        }
    });

    for (var i = 0; i < dots.length; i++) {
        (function(i) {
            dots[i].addEventListener("click", function(e) {
                index = [].slice.call(dots).indexOf(e.target);
                console.log(index + "index of button");

                // clearTimeout(timeout);

                // if (curr == i) {
                //     return;
                // }

                if (!transition && i != curr) {
                    moveKitty(index);
                    console.log("in here");
                    clearTimeout(timeout);
                }
            });
        })(i);
    }

    function moveKitty(next) {
        console.log(next + "   next");

        kitty[curr].classList.remove("on");
        dots[curr].classList.remove("on");
        transition = true;
        kitty[curr].classList.add("exit");

        if (typeof next != "undefined") {
            curr = next;
        } else {
            curr++;
            if (curr >= kitty.length) {
                curr = 0;
            }
        }

        console.log(curr + "   curr");

        kitty[curr].classList.add("on");
        dots[curr].classList.add("on");
    }
})();
