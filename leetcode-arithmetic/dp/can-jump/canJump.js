/*
给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

力扣55.跳跃游戏
*/

const canJump = nums => {
    let maxNum = 0;

    const length = nums.length;

    for (let i = 0; i <= maxNum; i += 1) {
        if (maxNum >= length - 1) {
            return true;
        }

        maxNum = Math.max(maxNum, i + nums[i]);
    }

    return false;
};
