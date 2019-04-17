/*
every single behavior is attached to dom evens

we are limiting the number of proposed results

loop through the list and find the matches
truncate the list to less resuls, for ex. 4
then convert these results to html for each one, and putting these html into the empty list elements from the html
there is style change when i mouse over each one of the results, it gets highlighted
each result entry has a class "result" and a "title" with the results
one cas select result with both, mouse and keyboard
when the results show up, none is highlighted, but if i press key arrow down, the first gets highlighted and so on
when you press the arrow up, when the first one is highlighted it stays on the first results
under the text element, there is one div which contains all the div results. this firs div has display-block
when the field has focus, the results show up and i can type whatever
if focus is gone, no results are shown and i cant type anything
if theres no matches, it should show "no results" as a result

1. input event (text field)
    get the current value of the text field (jquery)
    if the current value is is an empty string, empty and / or hide the results element and do nothing else
    loop throught the countries and build a list of countires that start with that value
    if "matches" is empty, put the "no results" message into the results element
    if matches is not empty, loop through them, generate html for each, and put the html in the results element(Update
    the DOM just once with the full string list of result elements)

2. mouse over (on individual results)
    remove the highlight class from the result that has it if there is one --> the current result
    add the highlight class to the event target --> the next result

3. mouse down (on individual results), not click
    take the text contained by the elemtn with the highlight class (it´s the event target) and set it as the value of the text field
    empty or the text field and put the value on which i clicked
    empty and or hide the results

4. keydown (text field), also on the document or the window (but only text field, otherwise program will always run)
    if the down arrow is pressed
        if theres no result element with the highlight class, add the highlight class to the first result
        if a result other than the last one has the highlight class, remove the highlight class from the result that has it and add it to the next one
            (jquery has a method call next() or prev(), use it for changing to next result; or use index to get index of highlighted result, and see if it is not the last result, and the add the highlight class)

        if the last result element has the hightlight class, do nothing (do return for the function)

    if the up arrow is pressed
        same as keydown, but the other way around

    if the return key is pressed
        take the text contained by the element with the hightligh class and set it as the value of the input field
        empty and or hide the results

5. focus (text field) --> field ready for input
    do the same thing as the input event

6. blur (text field) --> loses the focus
    empty and or hide the results



 */

 (function(countries) {
     var input = $(input);
     var countries;



     input.on("input", function (e) {
         var val = input.val(); //this is a getter, just gets the value
         for (var i = 0; i < countries.length; i++) {
             if (countries[i]./*startsWith*/indexOf(val.toLowerCase()) == 0) { // ver como funciona indexOf
                 matches.push(countries[i]);
                 if (matches.length == 4) {
                     break;    // this stops the loop
                 }
             }
         }
     }).on("focus", function () {
         input.trigger()("input");
     })

 }(/*[here an array of all the possible countries ])*/);

var results = $("#results");

// result.hide() or results.show() --> for the html that contains the results

var resultsHtml = '';

for (var i = 0; i < matches.length; i++) {

    resultsHtml += '<div class = "results">' + matches[i] + '</div>';

//    results.append('<div class ="results">') // this would be too slow, cant change the DOM so often
}
results.show().html(resultsHtml); // ver como funciona este metodo, is results hidden by default ??



/*



*/
