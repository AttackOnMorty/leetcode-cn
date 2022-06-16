/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// O(n) / O(n)
function climbStairs(n) {
    const cache = new Map();
    return helper(n, cache);
}

function helper(n, cache) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (cache.has(n)) return cache.get(n);

    const result = helper(n - 1, cache) + helper(n - 2, cache);
    cache.set(n, result);

    return cache.get(n);
}

// @lc code=end
