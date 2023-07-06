const addArray = require('./addArray')
const isExistInArray = require('./isExistInArray')
const isNewCordLastButOneElement = require('./isNewCordLastButOneElement')
const compareArrays = require('./compareArrays');

const maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1]
];

function newGo(cord = [0, 0], pathways = []) {
    if (
        pathways.length === 0
    ) {
        pathways.push([])
    }

    let currentPathway = pathways[pathways.length - 1];
    let previousPathway = pathways[pathways.length - 2];
    let onceEnteredPathway = false;

    currentPathway.push(cord);

    let n = 0;
    while (n <= 3) {
        currentPathway = pathways[pathways.length - 1];
        previousPathway = pathways[pathways.length - 2];
        const directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        const newCord = cord.map(
            (element, elementIndex) => element + directions[n][elementIndex]
        )
        // const previousCord = currentPathway[currentPathway.length - 2];

        if (
            maze[newCord[0]] &&
            maze[newCord[0]][newCord[1]] === 1 &&
            !isExistInArray(currentPathway, newCord) &&
            !isNewCordLastButOneElement(currentPathway, newCord) &&
            !compareArrays(currentPathway[currentPathway.length - 1], [4, 4]) //coś nie tak, ma kończyć na 4,4 i zaczynać nowy pathway, cord czy newCord
        ) {
            if (
                onceEnteredPathway
            ) {
                pathways.push(currentPathway.slice(0, currentPathway.indexOf(cord)));
            }
            newGo(newCord, pathways);
            onceEnteredPathway = true;
        }
        n++;
    }
    return pathways;
}

console.log(newGo());

module.exports = newGo;


