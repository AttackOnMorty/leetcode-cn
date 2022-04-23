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

// O(1) / O(1)
function isPalindrome(x) {
    if (x < 0) return false;

    const originalX = x;
    let y = 0;

    while (x !== 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return originalX === y;
}

// O(n) / O(1)
function isPalindrome(x) {
    if (x < 0) return false;

    const arr = [];
    while (x !== 0) {
        arr.push(x % 10);
        x = Math.floor(x / 10);
    }

    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

// @lc code=end
