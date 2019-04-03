/****************************************** EXERCISE 1 */
function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(total);
}

sum(5, 10); //15
sum(5, 10, 15); //30;
sum(5, 10, 15, 100, 200); //330

/****************************************** EXERCISE 2 */

function waitThenRun(fn) {
    setTimeout(fn, 1500);
}

waitThenRun(function() {
    console.log("Hello!");
});

waitThenRun(function() {
    console.log("Goodbye!");
});

/****************************************** EXERCISE 3 */

function numberCheck(param) {
    if (isNaN(param) || param <= 0) {
        return "ERROR";
    } else if (param >= 1000000) {
        return param;
    } else {
        var i = param;
        while (i < 1000000) {
            i *= 10;
        }
        return i;
    }
}

numberCheck(-666);
numberCheck(6666666);
numberCheck(666);
numberCheck(NaN);

/****************************************** EXERCISE 4 */

function getTotaler(num) {
    var total = 0;
    return function(num) {
        return (total += num);
    };
}

var totaler = getTotaler();

totaler(2);

totaler(5);
