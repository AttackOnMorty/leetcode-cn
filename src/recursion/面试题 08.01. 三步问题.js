/*
面试题 08.01. 三步问题

三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:
 输入：n = 3 
 输出：4
 说明: 有四种走法

示例2:
输入：n = 5
输出：13

提示:
n范围在[1, 1000000]之间

链接：https://leetcode.cn/problems/three-steps-problem-lcci
*/

/**
 * @param {number} n
 * @return {number}
 */

// O(n) / O(n)
function waysToStep(n) {
    const cache = new Map();
    return helper(n, cache);
}

function helper(n, cache) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 4;

    if (cache.has(n)) return cache.get(n);

    const result =
        (((helper(n - 1, cache) + helper(n - 2, cache)) % (1e9 + 7)) +
            helper(n - 3, cache)) %
        (1e9 + 7);
    cache.set(n, result);

    return cache.get(n);
}
