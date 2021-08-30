/** 
  模拟栈操作
  push(x) —— 将元素 x 推入栈中。
  pop() —— 删除栈顶的元素。
  top() —— 获取栈顶元素。
  getMin() —— 检索栈中的最小元素。 
*/

const MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);
    if (!this.minStack.length || this.minStack[this.minStack.length - 1] >= val) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function () {
    const popVal = this.stack.pop();
    if (this.minStack.length && this.minStack[this.minStack.length - 1] === popVal) {
        this.minStack.pop();
    }
    return popVal;
};

MinStack.prototype.top = function () {
    return this.stack.length ? this.stack[this.stack.length - 1] : null;
};

MinStack.prototype.getMin = function () {
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : null;
};
