(function() {
    "use strict";

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // canvas.addEventListener("mousemove", function(e) {
    //     console.log(e.pageX + "x");
    //     console.log(e.pageY);
    // });

    //----------------CANVAS 1 ORIGINAL DRAWING
    context.strokeStyle = "orange";
    context.lineWidth = 5;
    context.beginPath();
    // context.moveTo(530, 100);
    context.arc(100, 100, 50, 0, Math.PI * 2);
    context.stroke();
    // torso
    context.moveTo(100, 150);
    context.lineTo(100, 290);
    context.stroke();
    // arms
    context.moveTo(100, 190);
    context.lineTo(180, 150);
    context.stroke();
    context.moveTo(100, 190);
    context.lineTo(20, 150);
    context.stroke();
    // legs
    context.moveTo(100, 287);
    context.lineTo(130, 400);
    context.stroke();
    context.moveTo(100, 287);
    context.lineTo(70, 400);
    context.stroke();

    //----------------CANVAS 2

    var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext("2d");

    var top = 0;
    var side = 0;

    document.addEventListener("keydown", function(e) {
        context2.clearRect(0, 0, 700, 650);
        if (e.keyCode == 39) {
            top++;
        } else if (e.keyCode == 37) {
            top--;
            if (top < 0) {
                top = 0;
            }
        } else if (e.keyCode == 40) {
            side++;
        } else if (e.keyCode == 38) {
            side--;
            if (side < 0) {
                side = 0;
            }
        }
        context2.drawImage(canvas, top, side, 100, 200);
    });
})();
