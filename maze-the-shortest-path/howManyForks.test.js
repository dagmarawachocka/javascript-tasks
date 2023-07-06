const howManyForks = require('./howManyForks');

describe('howManyForks', () => {
    const previousCord = undefined;
    const cord = [0, 0];

    const maze = [
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1]
    ];

    it('should return 2 - the number of forks', () => {
        expect(howManyForks(previousCord, cord, maze)).toEqual(2);
    });

    it('should return 1 - the number of forks', () => {
        const previousCord1 = [0, 0];
        const cord1 = [0, 1];
        expect(howManyForks(previousCord1, cord1, maze)).toEqual(1);
    });
});