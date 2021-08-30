// 有一个数组 [ 7, 8, 3, 5, 1, 2, 4, 3, 1 ]，写一个方法来“去重”并“输出从大到小”的“货币格式”。
// 期望结果："8,754,321"

// 原数组
const nums = [7, 8, 3, 5, 1, 2, 4, 3, 1];
// 排序
const sortNums = nums.sort((a, b) => a - b);
// 去重
const targetNums = [...new Set(sortNums)];
// 转换字符串
const targetStr = targetNums.join('');
// 转换方法
const dealNumber = money => {
    if (!money) {
        return '';
    }
    const temp = money.match(/(\d{1,3})/g);
    return temp.join(',').split('').reverse().join('');
};
