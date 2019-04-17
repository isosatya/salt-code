var butt = $("button");

butt.on("click", function() {
    var textVal = $("textarea").val();

    try {
        JSON.parse(textVal);
        alert("Your file had no errors!!!");
    } catch (e) {
        alert("Your file is corrupt:   " + e);
    }
});

/*




*/
