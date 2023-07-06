const isCordLastElement = require("./isCordLastElement");
const addArray = require("./addArray");
const isExistInArray = require("./isExistInArray");

let pathway = [];

const maze = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1]
];

function go(cord, pathwayId = 0) {
    let currentPathway = pathway[pathwayId]; //todo: musi być zainicjalizowane po funkcji addArray(), bo dopiero funkcja dodaje ilość elementów określoną w pathId
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    console.log(directions.length);
    addArray(pathway, pathwayId);

    currentPathway.push(cord);
    for (let i = 0; i <= 3; i++) {

        const newCord = cord.map((element, elementIndex) => element + directions[i][elementIndex]);
        if (
            newCord[0] >= 0 && newCord[0] < maze.length &&
            newCord[1] >= 0 && newCord[1] < maze[newCord[0]].length &&
            maze[newCord[0]][newCord[1]] === 1 && //todo: sprawdzam czy newCord.value = 1
            !isExistInArray(currentPathway, newCord) &&
            !isCordLastElement(currentPathway, cord)
        ) {
            console.log(JSON.stringify(currentPathway));
            console.log(JSON.stringify(isExistInArray(currentPathway, newCord)));
            console.log(JSON.stringify(isCordLastElement(currentPathway, cord)));
            go(newCord, pathwayId);
        }
    }
}
const cord = [0, 0]
console.log(go(cord, 0));

module.exports = go;