// You should implement your task here.

module.exports = function towelSort(matrix) {
    const result = [];
    if (!matrix) {
        return result;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) { matrix[i].reverse() } else { matrix[i] }
        }
        return matrix.flat();
    }
}