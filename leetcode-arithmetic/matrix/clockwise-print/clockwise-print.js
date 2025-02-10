/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 *
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 力扣54. 螺旋矩阵
 */
function spiralOrder(matrix) {
    if (!matrix.length) {
        return [];
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    const res = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i += 1) {
            res.push(matrix[top][i]);
        }
        top += 1;
        for (let i = top; i <= bottom; i += 1) {
            res.push(matrix[i][right]);
        }
        right -= 1;
        if (top > bottom || left > right) {
            break;
        }
        for (let i = right; i >= left; i -= 1) {
            res.push(matrix[bottom][i]);
        }
        bottom -= 1;
        for (let i = bottom; i >= top; i -= 1) {
            res.push(matrix[i][left]);
        }
        left += 1;
    }
    return res;
}
