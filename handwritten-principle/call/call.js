// 手写实现Function.prototype.call
Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }

    // 拆分出参数
    const args = [...arguments].slice(1);

    // 设置当前的执行对象
    const currentContent = context || window;

    // 利用Symbol唯一性
    const fn = Symbol();

    // 将当前函数，设置到当前执行对象
    currentContent[fn] = this;

    // 执行函数
    const res = currentContent[fn](...args);

    // 删除添加上的函数
    Reflect.delateProperty(currentContent, fn);

    return res;
};
