(function() {
    var input = $("#input");
    var artalb = $("#artalb");
    var button = $("#button");
    var results = $(".results");
    var query;
    var type;
    var url = "https://elegant-croissant.glitch.me/spotify";
    var nextLink;
    var resultsHtml;
    var coverUrl;
    var link;
    var name;
    var interval;

    button.on("click", function(e) {
        results.empty();
        e.preventDefault();
        query = input.val();
        type = artalb.val();
        resultsHtml = "";
        $.ajax({
            url: url,
            data: {
                q: query,
                type: type
            },

            success: function(payload) {
                payload = payload.artists || payload.albums;
                console.log(payload);

                nextLink =
                    payload.next &&
                    payload.next.replace(
                        "https://api.spotify.com/v1/search",
                        "https://elegant-croissant.glitch.me/spotify"
                    );

                if (payload.items.length == 0) {
                    resultsHtml = "<h2>No results found!</h2>";
                }

                for (var i = 0; i < payload.items.length; i++) {
                    if (payload.items[i].images.length != 0) {
                        coverUrl = payload.items[i].images[2].url;
                    } else {
                        coverUrl = "music.jpg";
                    }
                    link = payload.items[i].external_urls.spotify;
                    name = payload.items[i].name;

                    resultsHtml +=
                        '<div class="result">' +
                        "<img src=" +
                        coverUrl +
                        ' class="album" >' +
                        '<a class="name" href=' +
                        link +
                        ">" +
                        name +
                        "</a>";
                }
                results.append(resultsHtml);
                interval = setInterval(checkScroll, 2000);
            }
        });

        function checkScroll() {
            var docHeight = $(document).height();

            var scrollTop = $(document).scrollTop();

            var mousePos = scrollTop + $(window).height() - docHeight;

            if (mousePos + 50 >= 0) {
                resultsHtml = "";
                $.ajax({
                    url: nextLink,

                    success: function(payload) {
                        payload = payload.artists || payload.albums;

                        console.log(payload);

                        if (payload.next == "") {
                            clearInterval(interval);
                        }

                        nextLink =
                            payload.next &&
                            payload.next.replace(
                                "https://api.spotify.com/v1/search",
                                "https://elegant-croissant.glitch.me/spotify"
                            );
                        console.log("next link in scroll fn ----", nextLink);

                        for (var i = 0; i < payload.items.length; i++) {
                            if (payload.items[i].images.length != 0) {
                                coverUrl = payload.items[i].images[2].url;
                            } else {
                                coverUrl = "music.jpg";
                            }
                            link = payload.items[i].external_urls.spotify;
                            name = payload.items[i].name;

                            resultsHtml +=
                                '<div class="result">' +
                                "<img src=" +
                                coverUrl +
                                ' class="album" >' +
                                '<a class="name" href=' +
                                link +
                                ">" +
                                name +
                                "</a>";
                        }
                        results.append(resultsHtml);
                    }
                });
            }
        }
    });
})();

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

// (function() {
//     var nextUrl;
//     var resultsHtml;
//     var coverPic;
//
//     var button = $(".submit-button");
//     button.on("click", function(action) {
//         resultsHtml = "";
//         $(".result").remove();
//         $(".search-notice").remove();
//         var userInput = $("input").val(); //target the name
//         var dropdown = $("select").val();
//
//         $.ajax({
//             url: "https://elegant-croissant.glitch.me/spotify",
//             data: {
//                 //represents input we get from the user#
//                 query: userInput,
//                 type: dropdown
//             },
//             //success is a function that runs once we heard a API response
//             success: function(payload) {
//                 //if lefthand side is defined -> && then do.
//                 payload = payload.artists || payload.albums;
//                 //Search head
//                 $(".results").append(
//                     "<div class='search-notice'>Results for " +
//                         userInput +
//                         "</div>"
//                 );
//                 console.log(payload);
//                 for (var i = 0; i < payload.items.length; i++) {
//                     if (typeof payload.items[i].images[1] == "undefined") {
//                         coverPic = "/logo.png";
//                     } else {
//                         coverPic = payload.items[i].images[1].url;
//                     }
//
//                     resultsHtml +=
//                         "<div class='result'>" +
//                         "<img src=" +
//                         coverPic +
//                         ">" +
//                         '<a href="' +
//                         payload.items[i].external_urls.spotify +
//                         '">' +
//                         '<div class="text">' +
//                         payload.items[i].name +
//                         "</div></a></div>";
//                 }
//                 $(".results").append(resultsHtml);
//                 ///////-----------------------------
//                 //more stuff for later
//                 // nextUrl =
//                 //     payload.next &&
//                 //     payload.next.replace(
//                 //         "https://api.spotify.com/v1/search",
//                 //         "https://elegant-croissant.glitch.me/spotify"
//                 //     );
//                 // console.log(nextUrl);
//                 // nextUrl to make the second ajax request thorugh "more"button
//                 //wrap ajax request in function for reusing. in the second ajax, not data is needed.
//                 ///////-----------------------------
//             },
//             error: function() {
//                 $(".results").html("<div>No results</div>");
//             }
//         });
//     });
// })();
//
// // external url
// // name
// // images
// //loop through items, take every name, image, url and render it on screen.
// //inside images, we have take just the first array,
