/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    if (!matrix.length || matrix[0][0] > target || matrix[0].length === 0) {
        return false;
    }

    let i = matrix.length - 1;
    let j = 0;

    while (i >= 0 && j < matrix[i].length) {
        if (matrix[i][j] === target) {
            return true;
        }
        if (matrix[i][j] > target) {
            i -= 1;
        }
        if (matrix[i][j] < target) {
            j += 1;
        }
    }

    return false;
};
