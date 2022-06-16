/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */

// O(logn) / O(1)
function isPerfectSquare(num) {
    let left = 1;
    let right = num;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const res = mid * mid;

        if (res === num) {
            return true;
        } else if (res < num) {
            left = mid + 1;
        } else if (res > num) {
            right = mid - 1;
        }
    }

    return false;
}

// @lc code=end
