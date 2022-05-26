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

    let i = 0;
    while (s[i] === ' ') {
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

    let res = 0;
    while (i < n) {
        const char = s[i];
        if (isNum(char)) {
            res = res * 10 + Number(char);
            i++;
        } else {
            break;
        }
    }

    const MIN = Math.pow(-2, 31);
    const MAX = Math.pow(2, 31) - 1;

    res = sign * res;

    if (res < MIN) {
        return MIN;
    }

    if (res > MAX) {
        return MAX;
    }

    return res;
}

// O(1) / O(1)
function isNum(char) {
    return char >= '0' && char <= '9';
}

// @lc code=end
