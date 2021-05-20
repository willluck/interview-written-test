// 工厂模式

/**
 * 简单的工厂模式
 *
 * 思考什么是变的，什么是不变的，将变化的放在工厂中的判断，不变的抽离成为一个类
 */

function User(name, age, career, work) {
    this.name = name;
    this.age = age;
    this.career = career;
    this.work = work;
}

function Factory(name, age, career) {
    let work;
    switch (career) {
        case 'coder':
            work = ['写代码'];
            break;
        case 'manager':
            work = ['管理', '写文档'];
            break;
        case 'boss':
            work = ['监督'];
            break;
        default:
            work = ['默认工作'];
            break;
    }
    return new User(name, age, career, work);
}

/**
 * 深入工厂模式
 *
 * 简单的工厂模式，将boss和普通员工放入一个工厂，对于权限分配又会是一段逻辑代码，但是
 * 如果都在Factory中添加，会导致Factory原来越臃肿，且会导致Factory内逻辑过于复杂
 * 违反了开放封闭原则
 * 开放封闭原则：对拓展开放，对修改封闭
 *
 * 抽象工厂模式
 */

/**
 * 抽象类约定手机组成部分
 */

class MobilePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        throw new Error('抽象工厂方法禁止直接调用，必须在实例上重写');
    }

    // 提供硬件的接口
    createHardWare() {
        throw new Error('抽象工厂方法禁止直接调用，必须在实例上重写');
    }
}

/**
 * 抽象工厂不做任何工作，具体实现交给工厂实现类
 *
 * 具体实现工厂
 */
class FakeStarFactory extends MobilePhoneFactory {
    createOS() {
        return new AndroidOS();
    }

    createHardWare() {
        return new QualcommHardWare();
    }
}

/**
 * 抽象的操作系统工厂
 */
class OS {
    // 提供操作
    controlHardWare() {
        throw new Error('抽象工厂方法禁止直接调用，必须在实例上重写');
    }
}

/**
 * 具体实现的操作系统类
 */
class AndroidOS extends OS {
    controlHardWare() {
        console.log('这里提供操作Android手机的方法');
    }
}

class AppleOS extends OS {
    controlHardWare() {
        console.log('这里提供操作IOS手机的方法');
    }
}

/**
 * 硬件系统同样，通过一个抽象硬件工厂和具体的实现类
 */

class HardWare {
    // 手机硬件的共性方法，这里提取了“根据命令运转”这个共性
    operateByOrder() {
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

// 定义具体硬件的具体产品类
class QualcommHardWare extends HardWare {
    operateByOrder() {
        console.log('我会用高通的方式去运转');
    }
}

class MiWare extends HardWare {
    operateByOrder() {
        console.log('我会用小米的方式去运转');
    }
}

/**
 * 最后实现调用
 */
const myPhone = new FakeStarFactory();

// 创建操作系统
const myOS = myPhone.createOS();
// 创建硬件
const myHardWare = myPhone.createHardWare();

// 启动操作系统
myOS.controlHardWare();
// 唤醒硬件
myHardWare.operateByOrder();
