// 手写实现Object.create

function create(proto) {
    function Fn() {}
    Fn.prototype = proto;
    Fn.prototype.constructor = Fn;

    return new Fn();
}
