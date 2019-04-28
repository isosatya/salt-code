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

    button.on("click", function() {
        var username = $("input[name='username']").val();

        var password = $("input[name='password']").val();

        var userToSearch = $("input[name='user-to-search']").val();

        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + userToSearch + "/repos";
        /repos/:owner/:repo/commits

        var arr = [];

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            // data: {
            //     limit: 10
            // },

            success: function(payload) {
                console.log(payload);

                for (var i = 0; i < payload.length; i++) {
                    repository = payload[i].full_name;
                    // console.log(repository);

                    arr.push({

                    });
                }
                console.log(arr2);

                $(".container").html(
                    Handlebars.templates.repositories2({ myData: arr2 })
                );
            }
        });
    });
})();
