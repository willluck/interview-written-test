// 手写实现instanceof
function myInstanceof(left, right) {
    if (typeof left !== 'object' || left === null) {
        return false;
    }

    left = Object.getPrototypeOf(left);

    while (true) {
        if (left === null || left === undefined) {
            return false;
        }
        if (right.prototype === left) {
            return true;
        }
        left = Object.getPrototypeOf(left);
    }
}
