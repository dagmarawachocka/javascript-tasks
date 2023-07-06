const compareArrays = require("./compareArrays");

function getShortestPath(paths, end) {
    const finalPaths = paths
        .filter(path => {
            return compareArrays(path[path.length - 1], end)
        })
        .sort((a, b) => a.length - b.length);

    return finalPaths[0];
}

module.exports = getShortestPath;