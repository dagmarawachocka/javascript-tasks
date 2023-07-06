const isCordLastElement = require("./isCordLastElement");

describe('isCordLastElement', () => {
    const visitedPathway =
        [
            [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 4]
        ];
    const cord = [4, 4];

    it('should check if coordinates of the element are the last element in the path', () => {
        expect(isCordLastElement(visitedPathway, cord)).toBeTruthy();
    });
});
