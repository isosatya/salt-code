// 3 things to know when working with API
// 1- Root URL / Base URL
//  - what is the website we want to make our request to? (where we make the ajax request to)
//     api.github.com --> usually
// - "https://api.github.com"
//
// 2- Endpoint
// - what especific information we need from this api?
//     for us the Endpoint should give us another users repository
//     "/users/:username/repos"  --> our Endpoint
//
// 3- Authentication
// - do i need to provide credentials to get a response from the Endpoint?
// - not every api will require authent. but most will
// - there´s different ways of authentificating, each website should provide documentation for the
// authent. process
// - Authentication helps get around with rate limit
// - we will use 'Basic Authentication'. it is mainly for testing, not for production though
//
// Misc.
// 1- Does the API do rate limiting?
// - how many requests can you make to the API in a certain period of time?

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

    $(".submit-button").on("click", function() {
        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();

        var userToSearch = $("input[name='user-to-search']").val();
        // me parece que se submit dos veces

        var rootUrl = "https://api.github.com";
        var endpoint = "/users/" + userToSearch + "/repos";

        $.ajax({
            url: rootUrl + endpoint,
            headers: {
                // HEADERS IN PLURAL DONT FORGET
                Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(payload) {
                console.log(payload);
                //avatar_url is important --> profile pictureof owner
                //full_name is important --> who made the repository or name of repository
                //use handlebars to render full name and avatar url
            }
        });

        // when repo is clicked make second ajax request to get the list of commits on the repos
        //         this second ajax request will look very similar to the first one except
        //         the endpoint will be different

        //      render list of commits using handelbars
        //          you can either create a new template for commits, OR use the template you created for repository
        //          warning: when you get the list of commits from github you might get more than 10. We only wannt to
        //          render the 10 most recent commits.
    });
})();
