/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(logn) / O(1)
function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        }
    }

    return left;
}

// @lc code=end
