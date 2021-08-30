/*
给出一个区间的集合，请合并所有重叠的区间。
示例 1:

输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: intervals = [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/

const merge = intervals => {
    if (!intervals || !intervals.length) {
        return [];
    }

    const newData = intervals.sort((a, b) => a[0] - b[0]);
    const res = [newData[0]];

    for (let i = 1; i < newData.length; i += 1) {
        if (newData[i][0] > res[res.length - 1][1]) {
            res.push(newData[i]);
        } else {
            if (newData[i][1] > res[res.length - 1][1]) {
                res[res.length - 1][1] = newData[i][1];
            }
        }
    }

    return res;
};
