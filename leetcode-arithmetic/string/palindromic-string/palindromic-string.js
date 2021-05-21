// 判断字符串是否为回文字符串，方法一：反转后比较
function isPalindrome(str) {
    if (typeof str !== 'string') {
        return false;
    }
    const reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}

//  判断字符串是否为回文字符串，方法二：利用回文字符串的对称性，从中间断开，左右字符具有对称性
function isPalindrome2(str) {
    if (typeof str !== 'string') {
        return false;
    }

    for (let i = 0; i < str.length / 2; i += 1) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 给定一个非空字符串s，最多删除一个字符，判断能否成为回文字符串
function isPalindrome3(str) {
    if (typeof str !== 'string') {
        return false;
    }
    const length = str.length;
    // 定义左右指针
    let i = 0;
    let j = length - 1;

    // 工具函数，用于判断当前左右指针索引区间内的字符串是否是回文的
    function currentStrIsPalindrome(st, ed) {
        while (st < ed) {
            if (str[st] !== str[ed]) {
                return false;
            }
            st += 1;
            ed -= 1;
        }
        return true;
    }

    // 主循环，推进左右指针
    while (i < j && str[i] === str[j]) {
        i += 1;
        j -= 1;
    }

    // 跳过左指针
    if (currentStrIsPalindrome(i + 1, j)) {
        return true;
    }

    // 跳过右指针
    if (currentStrIsPalindrome(i, j - 1)) {
        return true;
    }

    return false;
}
