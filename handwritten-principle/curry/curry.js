// 实现一个柯里化函数
function curry(fn) {
    if (fn.length <= 1) {
        return fn;
    }

    const generator = (...args) => {
        if (fn.length === args.length) {
            return fn(...args);
        }
        return (...args2) => {
            return generator(...args, ...args2);
        };
    };

    return generator;
}
