/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) / O(n)
function isValid(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return false;

            const top = stack.pop();
            if (
                (char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// @lc code=end
