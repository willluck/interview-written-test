// 手写实现New
function myNew(fn, ...args){
    // 判断当前调用类型，非function类型禁止调用
    if(typeof fn !== 'function'){
        return nre TypeError('Type Error');
    }

    // 基于函数原型构造对象
    const obj = Object.create(fn.prototype);

    // 执行函数构造方法
    const res = fn.apply(obj, args);

    // 判断当前函数返回是否为对象
    const isObject = typeof res === 'object' && res !== null;

    // 判断当前函数返回是否为函数类型
    const idFunction = typeof res === 'function';

    // 如果是对象或函数类型，则返回res，否则返回obj
    return isObject || idFunction ? res : obj;
}