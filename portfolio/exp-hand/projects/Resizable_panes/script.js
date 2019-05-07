var bar = $(".bar");
var topdiv = $(".topdiv");

var cont = $(".container");
var doc = $(document);

bar.on("mousedown", function(e) {
    e.preventDefault();
    // bar.css({
    //     left: e.pageX
    // });
    // topdiv.css({
    //     width: e.pageX
    // });

    cont.on("mousemove", function(e) {
        var safeWidth = cont.width() - 10;
        if (e.pageX < safeWidth) {
            bar.css({
                left: e.pageX
            });

            topdiv.css({
                width: e.pageX
            });
        }
    });
});
/*.on("mouseup", function() {
    cont.off("mousemove");
});*/

doc.on("mouseup", function(e) {
    e.preventDefault(e);
    cont.off();
});

/*

(function() {
    var boxX, boxWidth, offset;
    var slide = $('#slide');
    var box = $('#box');
    var pane1 = $('#pane1');

    slide.on('mousedown', function(e) {
        boxX = box.offset().left;
        boxWidth = box.outerWidth();
        var slideX = slide.position().left;
        var pointerX = e.clientX - boxX;
        offset = pointerX - slideX;
        box.on('mousemove', drag);
        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        box.off('mousemove');
    });

    function drag(e) {
        if (e.clientX > boxX + boxWidth) {
            return;
        }
        if (e.clientX < boxX) {
            return;
        }
        var px = e.clientX - boxX - offset + 'px';
        slide.css({
            left: px
        });
        pane1.css({
            width: px
        });
    }

})();

*****************************

* {
    box-sizing: border-box;
}

body {
    margin: 0;
}

#box {
    width: 80%;
    max-width: 1000px;
    margin: 20px auto;
    height: 450px;
    position: relative;
}

.pane {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
}

#pane1  {
    z-index: 100;
    background: #cc6600;
    width: 50%;
}

#pane2 {
    background: #ffcc00;
}

#slide {
    z-index: 200;
    position: absolute;
    top: 0;
    left: calc(50% - 5px);
    width: 10px;
    height: 100%;
    background: #666;
    border-left: 1px #333 solid;
    border-right: 1px #333 solid;
    cursor: pointer;

}

*/
