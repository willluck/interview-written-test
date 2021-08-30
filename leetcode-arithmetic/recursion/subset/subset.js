// 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。

/** 
 * 示例: 输入: nums = [1,2,3]
输出:
[
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
]
*/
const subsets = nums => {
    const res = [];
    const len = nums.length;
    const cur = [];

    const loop = index => {
        res.push(cur.slice());

        for (let i = index; i < len; i += 1) {
            cur.push(nums[i]);
            loop(i + 1);
            cur.pop();
        }
    };

    loop(0);

    return res;
};
