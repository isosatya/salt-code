const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                { name: "zBat Out Of Hell" },
                { name: "Bat Out Of Hell II: Back Into Hell" },
                { name: "Dead Ringer" }
            ]
        }
    });

    return getAlbumNames().then(albumNames => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});

const data = {
    albums: {
        items: [
            { name: "Bat Out Of Hell" },
            { name: "Bat Out Of Hell II: Back Into Hell" },
            { name: "Dead Ringer" }
        ]
    }
};
