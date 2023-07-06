const addArray = require('./addArray');

describe('addArray', () => {
    const pathway = [];

    const pathwayId = 4;

    it('should add arrays to array', () => {
        expect(addArray(pathway, pathwayId)).toEqual([
            [],
            [],
            [],
            [],
            []
            ]);
    });
});