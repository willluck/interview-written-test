// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * 无重复字符的最长子串
 * 力扣：3 
 */

const lengthOfLongestSubstring = s => {
    const len = s.length;
    let str = '';
    let maxLen = 0;

    for (let i = 0; i < len; i += 1) {
        const currentStr = s[i];
        const index = str.indexOf(currentStr);

        if (index !== -1) {
            // 截断当前str
            str = str.substring(index + 1);
            // 重新拼接
            str = `${str}${currentStr}`;
        } else {
            // 直接拼接
            str = `${str}${currentStr}`;
        }

        maxLen = Math.max(str.length, maxLen);
    }

    return maxLen;
};