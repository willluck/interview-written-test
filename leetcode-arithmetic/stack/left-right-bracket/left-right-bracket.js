// 左右括号
// 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 来源：力扣20

const leftToRight = {
    '(': ')',
    '{': '}',
    '[': ']'
};

const isValid = s => {
    if (!s) {
        return true;
    }

    const stack = [];
    for (let i = 0; i < s.length; i += 1) {
        const ch = s[i];
        if (['(', '{', '['].includes(ch)) {
            stack.push(leftToRight[ch]);
        } else {
            if (!stack.length || stack.pop() !== ch) {
                return false;
            }
        }
    }
    return !stack.length;
};
