const spotify = require("./spotify");

exports.getAlbumNames = function(q) {
    return spotify.search(q, "album").then(function(data) {
        const albumNames = [];
        for (var i = 0; i < data.albums.items.length; i++) {
            albumNames.push(data.albums.items[i].name);
        }
        albumNames.sort();
        return albumNames;
    });
};

const data = {
    albums: {
        items: [
            { name: "Bat Out Of Hell" },
            { name: "Bat Out Of Hell II: Back Into Hell" },
            { name: "Dead Ringer" }
        ]
    }
};
