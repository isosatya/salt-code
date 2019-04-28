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

    var button = $(".submit-button");
    var image;
    var repository;
    var message;
    var text;

    var element;

    button.on("click", function() {
        var username = $("input[name='username']").val();

        var password = $("input[name='password']").val();

        var userToSearch = $("input[name='user-to-search']").val();

        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + userToSearch + "/repos";
        // console.log(rootUrl + endpoint);
        var arr = [];

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            data: {
                sort: "pushed"
            },

            success: function(payload) {
                // console.log(payload);

                for (var i = 0; i < payload.length; i++) {
                    image = payload[i].owner.avatar_url;
                    // console.log(image);
                    repository = payload[i];
                    // console.log(repository);

                    arr.push({
                        image: image,
                        repository: repository
                    });
                }

                // console.log(arr);

                $(".container").html(
                    Handlebars.templates.repositories({ repoTemp: arr })
                );

                var commits = $(".repository");

                commits.on("click", function(e) {
                    // console.log(e);
                    var endpoint2 =
                        rootUrl + "/repos/" + e.target.innerText + "/commits";

                    element = $("#" + e.target.id + " .commits");

                    function addDays(days) {
                        var result = new Date();
                        result.setDate(result.getDate() + days);
                        return result;
                    }

                    var laterDate = addDays(1).toISOString();
                    // console.log(laterDate);

                    $.ajax({
                        url: endpoint2,
                        headers: {
                            Authorization:
                                "Basic " + btoa(username + ":" + password)
                        },
                        data: {
                            until: laterDate
                        },

                        success: function(payload) {
                            var arr2 = [];
                            // console.log(element);

                            for (i = 0; i < 10; i++) {
                                // console.log(payload[i]);
                                message = payload[i].commit.message;
                                text = message.split("\n", 1)[0];
                                arr2.push(text);
                            }
                            // console.log(arr2);

                            element.html(
                                Handlebars.templates.repositories({
                                    commitTemp: arr2
                                })
                            );
                            shown = 1;
                        }
                    });
                });
            }
        });
    });
})();
