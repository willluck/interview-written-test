/*
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

力扣53.最大子数组和
*/

const maxSubArray = (nums) => {
  let sum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    if (sum > 0) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }

    max = Math.max(sum, max);
  }

  return max;
};
