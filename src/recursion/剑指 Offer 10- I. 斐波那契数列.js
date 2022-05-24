/*
剑指 Offer 10- I. 斐波那契数列

写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5

提示：
0 <= n <= 100

链接：https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof
*/

/**
 * @param {number} n
 * @return {number}
 */

// O(2^n) / O(n)
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return (fib(n - 1) + fib(n - 2)) % (1e9 + 7);
}

// O(n) / O(n)
function fib(n) {
    const cache = new Map();
    return helper(n, cache);
}

function helper(n, cache) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    if (cache.has(n)) return cache.get(n);

    const res = (helper(n - 1, cache) + helper(n - 2, cache)) % (1e9 + 7);
    cache.set(n, res);

    return cache.get(n);
}

// O(n) / O(n)
function fib(n) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % (1e9 + 7);
    }

    return dp[n];
}

// O(n) / O(1)
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let dp_n_1 = 1;
    let dp_n_2 = 0;
    let dp_n;

    for (let i = 2; i <= n; i++) {
        dp_n = (dp_n_1 + dp_n_2) % (1e9 + 7);
        dp_n_2 = dp_n_1;
        dp_n_1 = dp_n;
    }

    return dp_n;
}
