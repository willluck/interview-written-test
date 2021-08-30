// 迭代器模式原理，手动实现迭代器
function myIterator(list) {
    const length = list.length;
    let index = 0;

    return {
        next: function () {
            const value = index < length ? list[index] : undefined;
            const done = index === length;
            return {
                done,
                value
            };
        }
    };
}
