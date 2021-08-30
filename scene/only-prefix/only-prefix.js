// *
// 题目 函数
// 给定一个前缀 [prefix: string]，生成对应前缀的唯一key，生成结果需要以 [prefix]_ 为前缀

// 输入输出样例
// 仅为一种实现，只要可以保证题目要求，并不限定输出结果（可以为随机数、无实意数字、字母等任何内容）

// 样例一
//   输入：getUniqId('my')
//   输出：my_1
// 样例二
//   输入：getUniqId('my')
//   输出：my_1
//   输入：getUniqId('my')
//   输出：my_2
//   输入：getUniqId('he')
//   输出：he_1

const getUniqId = (() => {
    const keyMap = new Map();

    return function (currentStr) {
        if (typeof currentStr !== 'string') {
            return '';
        }
        if (keyMap.get(currentStr)) {
            const value = keyMap.get(currentStr);
            keyMap.set(currentStr, value + 1);
            return `${currentStr}_${value + 1}`;
        } else {
            keyMap.set(currentStr, 1);
            return `${currentStr}_1`;
        }
    };
})();
