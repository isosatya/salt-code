(function() {
    var headlines = $("#headlines");

    var links = $("a");

    var left = headlines.offset().left; //changed here offsetleft

    var id;

    function moveHeadlines() {
        left--;
        if (left <= -links.eq(0).outerWidth) {
            left += links.eq(0).outerWidth;

            headlines.append(links[0]);
        }
        headlines.css({
            left: left + "px"
        });

        id = requestAnimationFrame(moveHeadlines);
    }

    for (var i = 0; i < links.length; i++) {
        links.eq(i).on("mouseenter", function(e) {
            cancelAnimationFrame(id); // eq(i) outterwith
            $(e.target).css({
                color: "blue",
                "text-decoration": "underline"
            });
        });
    }

    for (var j = 0; j < links.length; j++) {
        links.eq(j).on("mouseleave", function(e) {
            moveHeadlines();
            $(e.target).css({
                color: "white",
                "text-decoration": "none"
            });
        });
    }

    moveHeadlines();
})();
