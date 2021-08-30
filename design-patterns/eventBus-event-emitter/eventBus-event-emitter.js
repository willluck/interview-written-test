// 订阅-发布模式
class EvevtEmitter {
    constructor() {
        // map，存储事件与回调之间的关系
        this.handlers = {};
    }

    // 安装事件监听，接受事件名和回调函数作为参数
    on(eventName, cb) {
        if (!this.handlers[eventName]) {
            // 初始化一个监听函数队列
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(cb);
    }

    // emit用于触发目标事件，接受事件名和监听函数的参数作为参数
    emit(eventName, ...args) {
        if (this.handlers[eventName]) {
            this.handlers[eventName].forEach(cb => {
                cb(...args);
            });
        }
    }

    // 移除某个事件回调队列中的回调函数
    off(eventName, cb) {
        const callbacks = this.handlers[eventName];
        const index = callbacks.indexOf(cb);
        if (index !== -1) {
            this.handlers[eventName].splice(index, 1);
        }
    }

    // 为事件注册单次监听器
    once(eventName, cb) {
        const wrapper = (...args) => {
            cb.apply(null, args);
            this.off(eventName, wrapper);
        };
        this.on(eventName, wrapper);
    }
}
