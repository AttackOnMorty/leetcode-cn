/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// O(n) / O(1)
function isPalindrome(x) {
    if (x < 0) return false;

    const originalX = x;
    let y = 0;

    while (x !== 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return y === originalX;
}

// @lc code=end
