$.ajax({
    url: "/data.json",
    method: "GET",
    // data: {
    //     limit: 20
    // },
    success: function(data) {
        console.log(data);

        var html = "";
        for (var i = 0; i < data.length; i++) {
            html += "<a href='" + data[i].href + "'>" + data[i].text + "</a>";
        }
        console.log(html);
        $("#headlines").append(html);
        moveHeadlines();
    }
});

var headlines = document.getElementById("headlines");
var links = headlines.getElementsByTagName("a");
console.log(links);
var left = headlines.offsetLeft;
var id;

function moveHeadlines() {
    left--;
    if (left <= -links[0].offsetWidth) {
        left += links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    id = requestAnimationFrame(moveHeadlines);
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function(e) {
        cancelAnimationFrame(id);
        e.target.style.color = "blue";
        e.target.style.textDecoration = "underline";
    });
}

for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("mouseleave", function(e) {
        moveHeadlines();
        e.target.style.color = "white";
        e.target.style.textDecoration = "none";
    });
}

// moveHeadlines();
