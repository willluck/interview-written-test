// 关于双向绑定的研究
// Vue3.0之前实现双向绑定是Object.defineProperty
// 以下是一个简略的实现原理

function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    });
}

function defineReactive(obj, key, val) {
    observe(val);

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('get');
            return val;
        },
        set: function (value) {
            console.log('set');
            val = value;
        }
    });
}

// 通过Proxy实现数据响应式
let onWatch = (target, setBind, getLogger) => {
    let handler = {
        set(target, property, value, receiver) {
            setBind(property, value);
            return Reflect.set(target, property, value);
        },
        get(target, property, receiver) {
            getLogger(target, property);
            return Reflect.get(target, property);
        }
    };
    return new Proxy(target, handler);
};

let obj = { a: 1 };
let p = onWatch(
    obj,
    (property, value) => {
        console.log(`${property}的值变为${value}`);
    },
    (target, property) => {
        console.log(`${property}的值为${target[property]}`);
    }
);
