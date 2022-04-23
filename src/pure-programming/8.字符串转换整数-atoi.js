/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// O(n) / O(1)
function myAtoi(s) {
    const n = s.length;
    if (n === 0) return 0;

    let i = 0;
    while (s[i] === ' ' && i < n) {
        i++;
    }

    if (i === n) return 0;

    let sign = 1;
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        sign = 1;
        i++;
    }

    const MAX = Math.pow(2, 31) - 1;
    const MIN = Math.pow(-2, 31);

    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + Number(s[i]);
        i++;

        if (sign * result > MAX) {
            return MAX;
        }

        if (sign * result < MIN) {
            return MIN;
        }
    }

    return sign * result;
}

// @lc code=end
