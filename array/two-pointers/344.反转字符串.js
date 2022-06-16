/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// O(n) / O(1)
function reverseString(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        const temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++;
        j--;
    }
}

// @lc code=end
