/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 * 来源：力扣287
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate1 = function(nums) {
    for (let i =0; i<nums.length;i+=1) {
        if (nums.indexOf(nums[i]) !== i){
            return nums[i];
        }
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate2 = function(nums) {
    let fast = 0;
    let slow = 0;
  
    while (1) {
      fast = nums[nums[fast]];
      slow = nums[slow];
      if (slow === fast) {
        fast = 0;
        while(nums[slow] != nums[fast]) {
          fast = nums[fast];
          slow = nums[slow];
        }
        return nums[slow];
      }
    }
};