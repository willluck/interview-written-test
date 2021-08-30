// 真题描述： 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

// 示例: addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// 说明:
// 你可以假设所有单词都是由小写字母 a-z 组成的。

// 初始化函数，包含一个map结构用于存储数据
const wordContent = function () {
    this.wordMap = new Map();
};

// 添加word方法
wordContent.prototype.addWord = function (word) {
    const length = word.length;
    const currentItem = this.wordMap.get(length);
    // 以字符串长度为数组标识，方便查找
    if (currentItem) {
        currentItem.push(word);
    } else {
        this.wordMap.set(length, [word]);
    }
};

// 搜索方法
wordContent.prototype.search = function (word) {
    const length = word.length;
    const currentItem = this.wordMap.get(length);
    if (!currentItem) {
        return false;
    }

    // 不包含。
    if (!word.includes('.')) {
        return currentItem.includes(word);
    }
    // 否则是正则表达式，就要先创建正则对象
    const reg = new RegExp(word);

    return currentItem.some(item => reg.test(item));
};
