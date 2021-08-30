/**
 * ES6实现单例模式
 *
 * @class SingleCase
 */
class SingleCase {
    otherMethod() {
        // 其他方法
    }
    static getInstance() {
        if (!SingleCase.instance) {
            SingleCase.instance = new SingleCase();
        }
        return SingleCase.instance;
    }
}

/**
 * ES5利用闭包实现单例模式
 */

SingleCase.getInstance = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new SingleCase();
        }
        return instance;
    };
})();

// 面试真题练习
// 实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    setItem(key) {
        return localStorage.setItem(key);
    }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1 === storage2; // true

// ES5闭包实现
function Base() {}

Base.prototype.getItem = function (key) {
    return localStorage.getInstance(key);
};

Base.prototype.setItem = function (key) {
    return localStorage.setItem(key);
};

const storage = (function () {
    let instance = null;
    return function () {
        if (!instance) {
            instance = new Base();
        }
        return instance;
    };
})();

const storage1 = storage();
const storage2 = storage();

storage1 === storage2; // true
