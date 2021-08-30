// 原型链继承
function Parent() {}

Parent.prototype.color = [];

Parent.prototype.getParentValue = function () {
    return this.color;
};

function Child() {}

Child.prototype = new Parent();

const myChild = new Child();

console.log(myChild.color); // []

myChild.color.push('red');

console.log(myChild.color); // ['red']
console.log(Parent.prototype.color); // ['red']

// 借用构造函数
// 问题：借用构造函数方法都在函数中定义才可以，因此会有函数复用的问题
function Parent(value) {
    this.name = value;
}

function Child(value) {
    Parent.call(this, value);
}

// 原型继承-组合继承
// 思路：通过借用构造函数来实现对实例属性的继承，原型链实现对原型的属性和方法的继承
function Parent(value) {
    this.name = value;
    this.sayParent = () => {
        console.log('this.name', this.name);
    };
}

Parent.prototype.getValue = function () {
    return this.name;
};

function Child(value) {
    Parent.call(this, value);
}
// 修改子构造函数的原型为父构造函数的实例
Child.prototype = new Parent();
// 修改子构造函数的原型的constructor为子构造函数本身
Child.prototype.constructor = Child;

// 原型继承
// 思路：借助原型实现在已有对象的基础上，实现对象到对象的继承，这个思路后来被实现为Object.create()
function object(obj) {
    function F() {}
    F.prototype = o;
    return new F();
}

// 寄生式继承
// 核心就是在原型式继承的基础上增强对象
function createOther(obj) {
    let clone = object(obj);
    clone.testFunc = function () {
        console.log(123);
    };
    return clone;
}

// 原型继承-寄生组合继承
// 利用借用构造函数实现实例属性的继承，利用原型链实现方法和原型属性的继承
function Parent(value) {
    this.name = value;
}

Parent.prototype.getValue = function () {
    return this.name;
};

Parent.sayHai = function () {
    console.log('hai');
};

function Child(value) {
    Parent.call(this, value);
}

// 写法1
Child.prototype = Object.create(Parent.prototype, {
    constructor: {
        value: Child,
        enumerable: false,
        writeable: true,
        configurable: false
    }
});

// 写法2  创建一个设置函数，重新设置子类的原型
function resetPrototype(subFunc, superFunc) {
    const prototype = Object.create(superFunc.prototype);
    property.constructor = subFunc;
    subFunc.prototype = prototype;
}

// 混入继承方式
function ChildClass() {
    SuperClass.call(this);
    OtherSuperClass.call(this);
}

// 继承一个类
MyClass.prototype = Object.create(SuperClass.prototype);
// 混合其他
Object.assign(MyClass.prototype, OtherSuperClass.prototype);
// 重新指定constructor
MyClass.prototype.constructor = MyClass;

// ES6继承
class MyParent {}

class MyChild extends MyParent {}
