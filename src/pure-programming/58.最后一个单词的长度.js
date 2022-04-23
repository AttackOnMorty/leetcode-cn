/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// O(n) / O(1)
function lengthOfLastWord(s) {
    let i = s.length - 1;
    while (s[i] === ' ' && i >= 0) {
        i--;
    }

    if (i === -1) return 0;

    let count = 0;
    let j = i;
    while (s[j] !== ' ' && j >= 0) {
        count++;
        j--;
    }

    return count;
}

// @lc code=end
