const compareArrays = (firstArray, secondArray) =>
        firstArray[0] === secondArray[0] &&
        firstArray[1] === secondArray[1];

const pathway = [ [ [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 4], [2, 3], [3, 3], [4, 3], [4, 4] ] ];
const pathwayId = 0;
const currentPathway = pathway[pathwayId];

console.log(compareArrays(currentPathway[currentPathway.length - 1], [4,4]));


module.exports = compareArrays;