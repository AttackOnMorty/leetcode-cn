/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// O(n!) / O(k)
function combine(n, k) {
    const result = [];
    backtrack(n, 1, []);
    return result;

    function backtrack(n, start, path) {
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let i = start; i <= n; i++) {
            if (path.includes(i)) continue;
            path.push(i);
            backtrack(n, i + 1, path);
            path.pop();
        }
    }
}

// @lc code=end
