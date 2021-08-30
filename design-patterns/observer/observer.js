// 发布者类
class Publisher {
    constructor() {
        // 当前的观察者
        this.observers = [];
    }

    // 增加监听者
    add(observer) {
        this.observers.push(observer);
    }

    // 移除监听者
    remove(observer) {
        this.observers.forEach((item, index) => {
            if (item === observer) {
                this.observers.splice(index, 1);
            }
        });
    }

    // 通知所有的监听者
    notify() {
        this.observers.forEach(item => {
            item.update();
        });
    }
}

// 定义订阅者类
class Observer {
    constructor() {}

    // 执行
    update(obj) {
        console.log('update', obj);
    }
}

// 定义具体的发布者类
class PrdPublisher extends Publisher {
    constructor() {
        super();
        // 初始化状态
        this.prdState = null;
        // 初始化监听者数据
        this.observers = [];
    }

    getState() {
        return this.prdState;
    }

    setState(state) {
        // 修改当前的状态
        this.prdState = state;
        // 通知监听者
        this.notify();
    }

    // 通知所有的监听者
    notify() {
        this.observers.forEach(item => {
            item.update(this.prdState);
        });
    }
}

// 定义具体的监听者类
class DevloperObserver extends Observer {
    constructor() {
        super();
        this.state = null;
    }

    update(state) {
        this.state = state;
        this.work();
    }

    work() {
        const currentState = this.state;
        console.log('根据状态进行工作');
    }
}

// 发布监听流程
// 创建发布者
const leader = new PrdPublisher();
// 创建监听者
const a = new DevloperObserver();
const b = new DevloperObserver();
const c = new DevloperObserver();

// 添加监听者
leader.add(a);
leader.add(b);
leader.add(c);

// 发布状态
leader.setState('工作');

// Vue中的observer
// observe方法遍历并包装对象属性

function Observer(target) {
    if (target && typeof target === 'object') {
        Object.keys(target).forEach(key => {
            // 给属性安装监听器
            defineReactive(target, key, target[key]);
        });
    }
}

// defineReactive用于给属性安装监听器
function defineReactive(target, key, val) {
    // 属性值也可能是object类型，这种情况下需要调用observe进行递归遍历
    observe(val);
    // 为当前属性添加监听器
    Object.defineProperty(target, key, {
        // 可遍历
        enumerable: true,
        // 不可配置
        configurable: false,
        get: function () {
            return val;
        },
        set: function (value) {
            console.log(`${target}属性的${key}属性从${val}值变成了了${value}`);
            val = value;
        }
    });
}

// 实现订阅者管理
class Dep {
    constructor() {
        this.subs = [];
    }

    add(sub) {
        this.subs.push(sub);
    }

    notify() {
        this.subs.forEach(item => {
            item.update();
        });
    }
}

// 初始化订阅者
const dep = new Dep();
// 新增订阅者
dep.add('a');
dep.add('b');

// 改写defineReactive，让属性修改时，可以通知监听者
function newDefineReactive(target, key, val) {
    // 遍历监听对象属性
    observe(val);
    Object.defineProperty(target, key, {
        set: function (value) {
            // 修改通知订阅者
            dep.notify(value);
            val = value;
        }
    });
}
