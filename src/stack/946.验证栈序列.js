/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// O(n) / O(n)
function validateStackSequences(pushed, popped) {
    const stack = [];

    let i = 0;
    for (const num of pushed) {
        stack.push(num);

        while (stack.length !== 0 && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }

    return stack.length === 0;
}

// @lc code=end
