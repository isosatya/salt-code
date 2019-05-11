const { find } = require("./countries");

test("Empty string returns empty array", () => {
    expect(find("")).toEqual([]);
});

test("Results array does not have more than 4 elements", () => {});

test("Search is not case sensitive", () => {
    expect(find("u").toString() === find("U").toString()).toBe(true);
});

test("If no matching countries are found, empty array is returned", () => {
    expect(find("aösldfjalskd").length).toBe(0);
});
