// 全排列
// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
/** 
 * 示例：   
输入: [1,2,3]
输出: [
 [1,2,3],
 [1,3,2],
 [2,1,3],
 [2,3,1],
 [3,1,2],
 [3,2,1]
]
*/

const permute = nums => {
    // 缓存数组长度
    const len = nums.length;

    // 用于记录当前的排列内容
    const curr = [];
    // 用于记录所有排列数据
    const res = [];

    // 缓存记录，避免使用重复数据
    const visited = {};

    const dfs = nth => {
        if (nth === len) {
            res.push(curr.slice());
            return;
        }

        for (let i = 0; i < len; i += 1) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = 1;
                curr.push(nums[i]);
                dfs(nth + 1);
                const popValue = curr.pop();
                visited[popValue] = 0;
            }
        }
    };

    dfs(0);
    return res;
};
