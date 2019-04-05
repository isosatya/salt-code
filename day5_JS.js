/****************************************** EXERCISE 1 */

function Rectangle(a, b) {
    this.width = a;
    this.height = b;
}

function Square(a) {
    this.width = a;
    this.height = a;
}

Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};

Square.prototype.getArea = Rectangle.prototype.getArea;

var square = new Square(4);
square.getArea(); //16

var rect = new Rectangle(4, 5);
rect.getArea(); //20

/****************************************** EXERCISE 2 */

function invertCase(string) {
    var arr = string.split("");
    var newStr = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }
        newStr += arr[i];
    }
    return newStr;
}

/****************************************** EXERCISE 3 */

function CountDown(sec) {
    this.sec = sec;
}

CountDown.prototype.start = function() {
    var tim = this.sec;
    if (tim == 0) {
        console.log(tim);
    }
    var int = setInterval(function fn() {
        console.log(tim);
        tim--;
        if (tim < 0) {
            clearInterval(int);
        }
    }, 1000);
};

var countdown = new CountDown(3);
countdown.start();
