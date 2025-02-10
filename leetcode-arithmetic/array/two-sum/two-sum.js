// 两数求和
const twoSum = (nums, target) => {
    const currentMap = new Map();

    if (Array.isArray(nums)) {
        for (let i = 0; i < nums.length; i += 1) {
            const currentValue = currentMap.get(target - nums[i]);
            if (currentValue !== undefined) {
                return [currentValue, i];
            }
            currentMap.set(nums[i], i);
        }
    }

    return [];
};