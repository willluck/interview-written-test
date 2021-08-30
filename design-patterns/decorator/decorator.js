// 装饰器函数，它的第一个参数是目标类  此处的 target 就是被装饰的类本身。
function classDecorator(target) {
    target.hasDecorator = true;
    return target;
}

// 将装饰器“安装”到Button类上
@classDecorator
class Button {
    // Button类的相关逻辑
}

// 验证装饰器是否生效
console.log('Button 是否被装饰了：', Button.hasDecorator);

// 具体的参数意义，在下个小节，这里大家先感知一下操作
/**
   *此处的 target 变成了Button.prototype，即类的原型对象。
   这是因为 onClick 方法总是要依附其实例存在的，修饰 onClik 其实是修饰它的实例。
   但我们的装饰器函数执行的时候，Button 实例还并不存在。
   为了确保实例生成后可以顺利调用被装饰好的方法，装饰器只能去修饰 Button 类的原型对象。
   *
   * @param {*} target
   * @param {*} name
   * @param {*} descriptor
   * @returns
   */
function funcDecorator(target, name, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log('我是Func的装饰器逻辑');
        return originalMethod.apply(this, arguments);
    };
    return descriptor;
}

class Button {
    @funcDecorator
    onClick() {
        console.log('我是Func的原有逻辑');
    }
}

// 验证装饰器是否生效
const button = new Button();
button.onClick();
