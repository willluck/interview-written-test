// 节流函数
function simpleThrottle(fn, wait) {
    // 开关标识
    let canRun = true;

    return function (...args) {
        if (!canRun) {
            return;
        }
        canRun = false;
        setTimeout(() => {
            fn.apply(this.args);
            canRun = true;
        }, wait);
    };
}
