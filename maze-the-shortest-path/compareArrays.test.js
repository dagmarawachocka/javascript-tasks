const compareArrays = require("./compareArrays");

describe('compareArrays', () => {
    const firstArray = [0, 0];
    const secondArray = [0, 0];
    it('should compare arrays and return whether arrays are the same or not', () => {
        expect(compareArrays(firstArray, secondArray)).toBeTruthy();
    });
});