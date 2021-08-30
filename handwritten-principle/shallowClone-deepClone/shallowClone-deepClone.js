// 手写实现Object.assign浅拷贝
if (typeof Object.assign2 !== 'function') {
    Object.defineProperty(Object, 'assign2', {
        value: function (target) {
            // 严格模式，因为在Object.assign中，Object('abc')这样的逻辑，会将字符串转换成包装对象，而对于包装对象的修改是只读额，但是只有在严格模式下会出现异常报错
            // 也就是Object.assign('abc','d')这样的代码，会报错
            'use strict';
            // 注意这里的判定null和undefined用了==，null和undefined通过隐式转换比较规则，会返回true
            // 所以这里等同于 target === undefined || target === null
            if (target == null) {
                throw new TypeError('ERROR');
            }
            // 使用 Object对象转为包装对象
            let to = Object(target);

            for (let index = 1; index < arguments.length; index++) {
                let nextSource = arguments[index];
                if (nextSource !== null) {
                    for (let nextKey in nextSource) {
                        // 判断当前属性是对象上的，而非原型链上的
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

// 手写实现简易浅拷贝函数
function shallowClone(obj) {
    function isObject() {
        return typeof o === 'object';
    }
    if (!isObject(obj)) return obj;
    let target = {};
    Reflect.ownKeys(obj).forEach(key => {
        target[key] = obj[key];
    });
}

// 手写实现深拷贝--包含对Symbol的判断
const deepClone = target => {
    if (typeof target !== 'object' || target === null) {
        return target;
    }

    const cloneTarget = Array.isArray(target) ? [] : {};

    const symKeys = Object.getOwnPropertySymbols(target);

    if (symKeys.length) {
        symKeys.forEach(symKey => {
            if (typeof target[symKey] === 'object' && target[symKey] !== null) {
                cloneTarget[symKey] = deepClone(target[symKey]);
            } else {
                cloneTarget[symKey] = target[symKey];
            }
        });
    }

    for (let i in target) {
        if (Object.prototype.hasOwnProperty.call(target, i)) {
            cloneTarget[i] = typeof target[i] === 'object' && target[i] !== null ? deepClone(target[i]) : target[i];
        }
    }

    return cloneTarget;
};
