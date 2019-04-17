(function() {
    var numbers = [
        "eins",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn"
    ];

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman() {
        try {
            var numb = askForNumber();
        } catch (e) {
            alert(e);
            translateNumberToGerman(numb);
        }
        alert(numbers[numb - 1]);
    }
    translateNumberToGerman();
})();
