// 手写实现Function.prototype.bind
Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }

    // 暂存当前函数
    const self = this;
    // 新建绑定函数
    const Fbind = function F() {
        // bind返回一个函数，因此也可以进行new操作，所以需要提前判定是否是用作构造函数
        if (this instanceof F) {
            return new self(...args, ...arguments);
        }

        return self.apply(context, [...args, ...arguments]);
    };

    return Fbind;
};
