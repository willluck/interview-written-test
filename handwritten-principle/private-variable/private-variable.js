// 私有变量的实现

// 通过Proxy代理，将_ 开头的变量认定为不可访问

const proxy = function (obj) {
    return new Proxy(obj, {
        get(target, property) {
            if (property.startsWith('_')) {
                throw new Error('private property');
            }
            return Reflect.get(target, property);
        },
        ownKeys(target) {
            return Reflect.ownKeys(target).filter(key => !key.startsWith('_'));
        }
    });
};

// 通过闭包的形式保存私有变量，缺点在于类的所有实例访问的都是同一个私有变量
const Person = (function () {
    const _name = Symbol('name');

    class Person {
        constructor(name) {
            this[_name] = name;
        }

        getName() {
            return this[_name];
        }

        setName(name) {
            this[_name] = name;
        }
    }
    return Person;
})();

// 另一种闭包的实现，解决了上面那种闭包的缺点，每个实例都有各自的私有变量，缺点是舍弃了class语法的简洁性，将所有特权方法，都保存在了构造函数中
class Person2 {
    constructor(name) {
        let _name = name;
        this.getName = function () {
            return _name;
        };
    }
}

// 通过WeakMap和闭包

const Person3 = (function () {
    let wp = new WeakMap();

    class Person {
        constructor(name) {
            wp.set(this, { name });
        }
        getName() {
            return wp.get(this).name;
        }
    }
    return Person;
})();
