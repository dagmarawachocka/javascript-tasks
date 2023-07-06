const addArray = (pathway, pathwayId) => {
    for (let i = 0; i <= pathwayId; i++){
        pathway.push([])
    }
    return pathway;
}

module.exports = addArray;