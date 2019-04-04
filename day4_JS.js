/****************************************** EXERCISE 1 */

function each(x, fn) {
    if (Array.isArray(x)) {
        for (var i = 0; i < x.length; i++) {
            fn(x[i], i);
        }
    } else if (typeof x == "object") {
        for (var letter in x) {
            fn(x[letter], letter);
        }
    }
}

each(
    {
        a: 1,
        b: 2
    },
    function(val, name) {
        console.log("The value of " + name + " is " + val);
    }
); // logs 'the value of a is 1' and 'the value of b is 2'

each(["a", "b"], function(val, idx) {
    console.log("The value of item " + idx + " is " + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

/****************************************** EXERCISE 2 */

function reversing(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var testArr = ["a", "b", "c", "d", "e"];

reversing(testArr);

/****************************************** EXERCISE 3 */

function getLessThanZero(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]
