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
    let end = s.length - 1;
    while (s[end] === ' ') {
        end--;
    }

    let count = 0;
    for (let i = end; i >= 0; i--) {
        if (s[i] !== ' ') {
            count++;
        } else {
            break;
        }
    }

    return count;
}

// @lc code=end
