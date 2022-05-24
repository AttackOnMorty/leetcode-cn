/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// O(logn) / O(logn)
function myPow(x, n) {
    if (n >= 0) {
        return helper(x, n);
    } else {
        return 1 / helper(x, -n);
    }
}

function helper(x, n) {
    if (n === 0) return 1;
    const halfPow = helper(x, Math.floor(n / 2));
    if (n % 2 === 1) {
        return halfPow * halfPow * x;
    } else {
        return halfPow * halfPow;
    }
}

// @lc code=end
