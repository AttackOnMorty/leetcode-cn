/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

function mySqrt(x) {
    // 0 1 2 3 4 5 6 7 8

    // 1
    let left = 0;
    let right = x;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const res = mid * mid;

        if (res === x) {
            return mid;
        } else if (res < x) {
            left = mid + 1;
        } else if (res > x) {
            right = mid - 1;
        }
    }

    return left - 1;
}

// @lc code=end
