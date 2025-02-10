/**
 * 三数求和 对撞指针
 * 力扣：15
 */
const threeSum = (sendSums, target = 0) => {
    // 结果数组
    const res = [];

    if (Array.isArray(sendSums)) {
        const nums = sendSums.sort((a, b) => {
            return a - b;
        });

        for (let i = 0; i < nums.length; i += 1) {
            // 左指针
            let left = i + 1;
            // 右指针
            let right = nums.length - 1;

            // 如果遇到相同的数字，则直接跳过
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            while (left < right) {
                // 相加值小于目标值，左指针移动
                if (nums[i] + nums[left] + nums[right] < target) {
                    left += 1;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left += 1;
                    }
                } else if (nums[i] + nums[left] + nums[right] > target) {
                    right -= 1;
                    while (left < right && nums[right] === nums[right + 1]) {
                        right -= 1;
                    }
                } else {
                    res.push([nums[i], nums[left], nums[right]]);

                    left += 1;
                    right -= 1;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left += 1;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right -= 1;
                    }
                }
            }
        }

        return res;
    }
};