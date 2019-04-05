var x;
var xx;
x = 777;

function timesTwo (num) {
    return num*2;
}

xx = timesTwo(x);

var numbers = [x, xx] -->

for (num in numbers) {
    console.log(num);
}

numbers = {};

numbers.y = xx;
