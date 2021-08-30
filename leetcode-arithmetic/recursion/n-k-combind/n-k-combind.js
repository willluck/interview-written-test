// 题目描述：给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
/** 
 * 示例: 输入: n = 4, k = 2
输出:
[
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
]
*/

const combind = (n, k) => {
    const cur = [];
    const res = [];

    const dfs = index => {
        if (cur.length === k) {
            res.push(cur.slice());
            return;
        }

        for (let i = index; i <= n; i += 1) {
            cur.push(i);
            dfs(i + 1);
            cur.pop();
        }
    };

    dfs(1);

    return res;
};
