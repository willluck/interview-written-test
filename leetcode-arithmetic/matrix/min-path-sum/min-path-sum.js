/*
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

力扣64. 最小路径和
*/

const minPathSum = grid => {
    const n = grid.length;
    const m = grid[0].length;

    const dp = Array.from(new Array(n), () => new Array(m));

    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < m; j += 1) {
            if (i === 0 && j === 0) {
                dp[i][j] = grid[i][j];
            } else if (i === 0 && j !== 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
            } else if (i !== 0 && j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
    }

    return dp[n - 1][m - 1];
};
