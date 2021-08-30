// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合

/*
输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
*/

const generateParenthesis = n => {
    const res = [];

    const generator = (str, left, right) => {
        if (str.length === n * 2) {
            res.push(str);
            return;
        }

        if (left > 0) {
            generator(`${str}(`, left - 1, right);
        }

        if (right > left) {
            generator(`${str})`, left, right - 1);
        }
    };

    generator('', n, n);

    return res;
};
