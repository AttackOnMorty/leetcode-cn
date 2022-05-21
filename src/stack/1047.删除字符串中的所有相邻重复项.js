/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// O(n) / O(n)
function removeDuplicates(s) {
    const deque = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (deque.length === 0 || char !== deque[deque.length - 1]) {
            deque.push(char);
        } else {
            deque.pop();
        }
    }

    let result = [];
    while (deque.length !== 0) {
        result.push(deque.shift());
    }

    return result.join('');
}

// @lc code=end
