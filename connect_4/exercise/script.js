(function() {
    var currentPlayer = "player1";

    var allSlots = $(".hole");
    var diagComb = [
        [allSlots.eq(0), allSlots.eq(7), allSlots.eq(14), allSlots.eq(21)],
        [allSlots.eq(1), allSlots.eq(8), allSlots.eq(15), allSlots.eq(22)],
        [allSlots.eq(8), allSlots.eq(15), allSlots.eq(22), allSlots.eq(29)],
        [allSlots.eq(2), allSlots.eq(9), allSlots.eq(16), allSlots.eq(23)],
        [allSlots.eq(14), allSlots.eq(21), allSlots.eq(28), allSlots.eq(35)],
        [allSlots.eq(7), allSlots.eq(14), allSlots.eq(21), allSlots.eq(28)],
        [allSlots.eq(6), allSlots.eq(13), allSlots.eq(20), allSlots.eq(27)],
        [allSlots.eq(13), allSlots.eq(20), allSlots.eq(27), allSlots.eq(34)],
        [allSlots.eq(20), allSlots.eq(27), allSlots.eq(34), allSlots.eq(41)],
        [allSlots.eq(12), allSlots.eq(19), allSlots.eq(26), allSlots.eq(33)],
        [allSlots.eq(19), allSlots.eq(26), allSlots.eq(33), allSlots.eq(40)],
        [allSlots.eq(18), allSlots.eq(25), allSlots.eq(32), allSlots.eq(39)],
        [allSlots.eq(18), allSlots.eq(13), allSlots.eq(8), allSlots.eq(3)],
        [allSlots.eq(24), allSlots.eq(19), allSlots.eq(14), allSlots.eq(9)],
        [allSlots.eq(19), allSlots.eq(14), allSlots.eq(9), allSlots.eq(4)],
        [allSlots.eq(30), allSlots.eq(25), allSlots.eq(20), allSlots.eq(15)],
        [allSlots.eq(25), allSlots.eq(20), allSlots.eq(15), allSlots.eq(10)],
        [allSlots.eq(20), allSlots.eq(15), allSlots.eq(10), allSlots.eq(5)],
        [allSlots.eq(36), allSlots.eq(31), allSlots.eq(26), allSlots.eq(21)],
        [allSlots.eq(31), allSlots.eq(26), allSlots.eq(21), allSlots.eq(16)],
        [allSlots.eq(26), allSlots.eq(21), allSlots.eq(16), allSlots.eq(11)],
        [allSlots.eq(37), allSlots.eq(32), allSlots.eq(27), allSlots.eq(22)],
        [allSlots.eq(32), allSlots.eq(27), allSlots.eq(22), allSlots.eq(17)],
        [allSlots.eq(38), allSlots.eq(33), allSlots.eq(28), allSlots.eq(23)]
    ];

    $(".column").on("click", function(e) {
        var currCol = $(e.currentTarget).find(".hole");

        for (var i = 5; i >= 0; i--) {
            if (
                !currCol.eq(i).hasClass("player1") &&
                !currCol.eq(i).hasClass("player2")
            ) {
                currCol.eq(i).addClass(currentPlayer);

                break;
            }
        }

        if (i == -1) {
            return;
        }

        function victory(direction) {
            var count = 0;
            for (i = 0; i < direction.length; i++) {
                if (direction.eq(i).hasClass(currentPlayer)) {
                    count++;
                    console.log(count);
                    if (count == 4) {
                        return true;
                    }
                } else {
                    count = 0;
                }
            }
        }

        function diagonal(diagComb) {
            for (var i = 0; i < diagComb.length; i++) {
                for (var j = 0; j < diagComb[i].length; j++) {
                    if (!diagComb[i][j].hasClass(currentPlayer)) {
                        break;
                    }
                }
                if (j == 4) {
                    return true;
                }
            }
            return null;
        }

        function win() {
            setTimeout(function() {
                $(".board").addClass(".win");
                alert("The winner is:  " + currentPlayer);
                $(".column").off();

                // $("body").addClass(".win");
                location.reload();
            }, 300);
        }

        var currRow = $(".row" + i).find(".hole");
        if (victory(currCol)) {
            win();
            return;
        } else if (victory(currRow)) {
            win();
            return;
        } else if (diagonal(diagComb)) {
            win();
            return;
        }

        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    });
})();
