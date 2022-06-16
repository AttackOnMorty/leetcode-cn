/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n) / O(1)
function canJump(nums) {
    const n = nums.length;
    let reachMax = 0;

    for (let i = 0; i < n; i++) {
        if (reachMax < i) {
            return false;
        }

        if (i + nums[i] > reachMax) {
            reachMax = i + nums[i];
        }

        if (reachMax >= n - 1) {
            return true;
        }
    }

    return false;
}

// @lc code=end
