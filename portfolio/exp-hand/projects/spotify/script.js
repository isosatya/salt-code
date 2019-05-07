(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    ////////////////////////////////////////////////////////////////////////////
    //                      DO NOT TOUCH NOT FOR ME                           //
    ////////////////////////////////////////////////////////////////////////////

    var input = $("#input");
    var artalb = $("#artalb");
    var button = $("#button");
    var resultsB = $(".resultsBody");
    var url = "https://elegant-croissant.glitch.me/spotify";
    var nextLink, coverUrl, link, name, interval, query, type;

    button.on("click", function(e) {
        resultsB.empty();
        e.preventDefault();
        query = input.val();
        type = artalb.val();
        $.ajax({
            url: url,
            data: {
                q: query,
                type: type
            },
            success: success
        });
    });

    function success(payload) {
        payload = payload.artists || payload.albums;
        console.log(payload);
        nextLink =
            payload.next &&
            payload.next.replace(
                "https://api.spotify.com/v1/search",
                "https://elegant-croissant.glitch.me/spotify"
            );

        if (payload.items.length == 0) {
            resultsB.html("<h2>No results found!</h2>");
        }

        var arrRes = [];

        for (var i = 0; i < payload.items.length; i++) {
            if (payload.items[i].images.length != 0) {
                coverUrl = payload.items[i].images[2].url;
            } else {
                coverUrl = "music.jpeg";
            }

            link = payload.items[i].external_urls.spotify;
            name = payload.items[i].name;

            arrRes.push({
                coverUrl: coverUrl,
                link: link,
                name: name
            });
        }
        resultsB.append(
            Handlebars.templates.spotify({
                searchRes: arrRes
            })
        );
        var docH = $(document).height();
        console.log(docH);
        resultsB.css("height", docH - 200);

        clearInterval(interval);
        interval = setInterval(checkScroll, 2000);
    }

    function checkScroll() {
        var docHeight = $(document).height();
        console.log("doc height", docHeight);
        // resultsB.style.height = docHeight + "px";
        var scrollTop = $(document).scrollTop();
        var mousePos = scrollTop + $(window).height() - docHeight;
        if (mousePos + 50 >= 0) {
            $.ajax({
                url: nextLink,
                success: success
            });
        }
    }
})();

//============================================================================

//
// //this goes in success
// function setNextUrl (data.next) {
//     nextUrl = data.next && data.next.replace(spotify, croissant);
// }
//
//
// //this goes at the end of the iife, as why this "#more" goes here
// $(document).on("click", "#more", function (){
//     //similar to ajax, but i dont need many parameteres
//     like the data queries
//     data:data --> not the queries
//     url: nextUrl ---> only when more button is clicked, why???
//
//     then add the loop like in the original function, but we dont wanna repeat the code... GOTTA CODE DRY
//     define the for loop in a function like getHtml, which returns the appended html,
//     then in the success function do --> var html = getHtml(data.items);
//
//     results.append(html) -->> this is for adding the new results
// });
//
// if (nextUrl) {
//     $("#more").show()
// }
//
// //================>>>>>>>>>>>>> PART 2
//
// we have to parse the string ourselves
// var qs = location.search.slice(1)
// qs = qs.split("&")
// var parsedQs = {
// }
//
// for (var = 0; i < qs.length; i++) {
//     var item = qs[i].split("=")
//     parsedQs[item[0]] = item[1]
// }
// parsedQs.scroll -->>>> but we dont use this function really
//
//
// --->>>>> we have to monitor the mouse behavior
// dont do $(window).scroll(??) it will consume too many resources
// use a timer, every second or half second check the scroll position to see if they reached the
// bottom of the page
//
// we need height of the window, height of the page, and the position of the checkScroll
// $(window).height()
// $(document).height()
// $(document).scrollTop()
//
// if scrolltop + window height >= height of page - buffer (50 for example) --> they have reached bottom
//
//
// function checkScroll() {
//     var hasReachedBottom;
//     if (hasReachedBottom) {
//         get more results
//         clearTimeout
//     } else {
//         setTimeout(checkScroll, 500)
//     }
// }
//
