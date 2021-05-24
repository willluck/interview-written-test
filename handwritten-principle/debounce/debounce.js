// 简易防抖函数
/**
 *
 * @param {*} func
 * @param {*} wait
 * @returns
 */
function simpleDebounce(func, wait = 50) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

// 优化版防抖函数
/**
 *
 * @param {*} fn
 * @param {*} wait
 * @param {*} immediate
 */
function debounce(fn, wait = 50, immediate) {
    let timer = null;

    return function (...args) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}
