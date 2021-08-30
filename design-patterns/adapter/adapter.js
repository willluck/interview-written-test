// 适配器模式
class Plug {
    getName() {
        return '适配器01';
    }
}

class Target {
    constructor() {
        this.plug = new Plug();
    }
    getName = () => {
        return this.plug.getName() + '适配器002';
    };
}
