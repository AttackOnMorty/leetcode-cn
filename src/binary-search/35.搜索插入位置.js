/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(logn) / O(1)
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) >> 1);
        const num = nums[mid];

        if (num === target) {
            return mid;
        } else if (num < target) {
            left = mid + 1;
        } else if (num > target) {
            right = mid - 1;
        }
    }

    return left;
}

// @lc code=end
