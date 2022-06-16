/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

// O(logn) / O(1)
function guessNumber(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const num = left + ((right - left) >> 1);
        const res = guess(num);

        if (res === 0) {
            return num;
        } else if (res === 1) {
            left = num + 1;
        } else if (res === -1) {
            right = num - 1;
        }
    }

    return -1;
}

// @lc code=end
