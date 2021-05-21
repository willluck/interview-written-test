// 实现一个缓存函数
const memorize = function (fn) {
    // 闭包对象，用于存值
    const caches = {};

    // 返回主函数
    return function (...args) {
        // 序列化参数，用于存入caches的key
        const _args = JSON.stringify(args);
        // 优先返回caches里面的缓存值，否则再执行函数返回值，并缓存进入caches
        return caches[_args] || (caches[_args] = fn.apply(null, args));
    };
};
