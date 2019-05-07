(function() {
    var body = $("body");

    var x2 = $("#popup h2");

    var popup = $(".popup");

    setTimeout(function() {
        popup.addClass("on");
    }, 1000);

    x2.on("click", function(e) {
        e.stopPropagation();
        popup.addClass("off");
        popup.removeClass("on");
    });

    // setTimeout(function() {
    //     body.eq(0).on("click", function(e) {
    //         e.stopPropagation();
    //         banner2.addClass("off");
    //         banner2.removeClass("on");
    //         overlay.addClass("off1");
    //         overlay.removeClass("on1");
    //     });
    //
    // }, 1000);

    var box = $("#menubox");

    var banner = $("#hambmenu");

    var overlay = $("#overlay");

    box.on("click", function(e) {
        e.stopPropagation();
        banner.addClass("on");
        banner.removeClass("off");
        overlay.addClass("on1");
        overlay.removeClass("off1");
    });
    //
    var x = $("x");

    x.on("click", function(e) {
        e.stopPropagation();
        banner.addClass("off");
        banner.removeClass("on");
        overlay.addClass("off1");
        overlay.removeClass("on1");
    });

    body.on("click", function(e) {
        e.stopPropagation();
        banner.addClass("off");
        banner.removeClass("on");
        overlay.addClass("off1");
        overlay.removeClass("on1");
    });
})();
