// 最长回文子串

/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*/

const longestPalindrome = s => {
    if (!s) {
        return '';
    }

    let res = '';

    const len = s.length;

    const dp = Array.from(new Array(len), () => new Array(len).fill(0));

    for (let i = len - 1; i >= 0; i -= 1) {
        for (let j = i; j < len; j += 1) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);

            if (dp[i][j] && j - i + 1 >= res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};
