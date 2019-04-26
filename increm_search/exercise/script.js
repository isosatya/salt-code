(function(countries) {
    var input = $("#input");
    var resultCont = $(".resultCont");

    input
        .on("input", function() {
            var val = input.val();
            var matches = [];

            var results = $(".results");

            // if (val != "") {
            //     for (var i = 0; i < countries.length; i++) {
            //         if (
            //             countries[i].toLowerCase().indexOf(val.toLowerCase()) ==
            //             0
            //         ) {
            //             matches.push(countries[i]);
            //             if (matches.length == 4) {
            //                 break;
            //             }
            //         }
            //     }
            // }

            $.ajax({
                url: "https://flame-egg.glitch.me/",
                data: {
                    q: val
                },
                success: function(data) {
                    matches = data;
                    // console.log(matches);
                    // console.log(matches.length);
                    // console.log(jQuery.type(matches));

                    var resultsHtml = "";

                    for (var i = 0; i < matches.length; i++) {
                        console.log("results console");
                        results.css({ visibility: "visible" });
                        resultsHtml +=
                            '<div class = "results">' + matches[i] + "</div>";
                        // console.log(resultsHtml);
                    }

                    if (matches.length == 0 && val != "") {
                        resultsHtml +=
                            '<div class = "results">' +
                            "No results found...!" +
                            "</div>";
                    }

                    results.show().html(resultsHtml);
                    // results.append(resultsHtml);

                    var eachRes = $(".results");

                    eachRes
                        .on("mouseover", function(e) {
                            if (!$(e.target).hasClass("on")) {
                                $(e.target).addClass("on");
                            }
                        })
                        .on("mouseleave", function(e) {
                            if ($(e.target).hasClass("on")) {
                                $(e.target).removeClass("on");
                            }
                        })
                        .on("mousedown", function(e) {
                            input.val($(e.target).text());
                            results.css({ visibility: "hidden" });
                        });
                }
            });
        })
        .on("keydown", function(e) {
            var resultCont = $(".resultCont");

            var eachRes = $(".results");
            var length = eachRes.length;

            var ind = resultCont.find(".on").index();

            if (e.keyCode == 40) {
                if (ind == -1) {
                    eachRes.eq(0).addClass("on");
                    console.log(ind);
                } else if (ind == length - 1) {
                    console.log(ind);
                    return;
                } else if (ind == 0 || ind != length - 1) {
                    eachRes
                        .eq(ind)
                        .removeClass("on")
                        .next()
                        .addClass("on");
                    console.log(ind);
                }
            }

            if (e.keyCode == 13) {
                input.val(eachRes.eq(ind).text());

                $(".resultCont").css({ visibility: "hidden" });
            }

            if (e.keyCode == 38) {
                if (ind == -1) {
                    eachRes.eq(length - 1).addClass("on");
                } else if (ind == 0) {
                    return;
                } else if (ind != 0 || ind == length - 1) {
                    eachRes
                        .eq(ind)
                        .removeClass("on")
                        .prev()
                        .addClass("on");
                }
            }
        })
        .blur(function() {
            resultCont.hide();
        })
        .focus(function() {
            // console.log("FOCCCUUSSS");
            input.trigger("input");
        });
})();

/*[
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]*/
