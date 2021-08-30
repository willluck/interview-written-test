// 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
// 给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

const temperatureStack = nums => {
    const stack = [];
    const res = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i += 1) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            const pop = stack.pop();
            res[pop] = i - pop;
        }
        stack.push(i);
    }
    return res;
};
