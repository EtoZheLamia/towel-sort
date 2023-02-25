module.exports = function towelSort (matrix) {
    let result = []
    !matrix 
    ? result = [] 
    : matrix.forEach((el, index) => {
        for (let j = 0; j < el.length; j++) {
            let columnIndx = index % 2 === 0 
            ? j
            : matrix[index].length - 1 - j 
            result.push(matrix[index][columnIndx])
         }
    })
    return result
}


