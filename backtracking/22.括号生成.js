/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

// ? / O(n)
function generateParenthesis(n) {
    const res = [];
    backtrack([], n, n);
    return res;

    function backtrack(path, left, right) {
        if (right < left) return;

        if (left < 0 || right < 0) return;

        if (left === 0 && right === 0) {
            res.push(path.join(''));
            return;
        }

        path.push('(');
        backtrack(path, left - 1, right);
        path.pop();

        path.push(')');
        backtrack(path, left, right - 1);
        path.pop();
    }
}

// @lc code=end
