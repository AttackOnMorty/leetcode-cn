/*
面试题 08.05. 递归乘法

递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

示例1:
输入：A = 1, B = 10
输出：10

示例2:
输入：A = 3, B = 4
输出：12

提示:
保证乘法范围不会溢出

链接：https://leetcode.cn/problems/recursive-mulitply-lcci
*/

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */

// O(logn) / O(logn)
function multiply(A, B) {
    if (A === 1) return B;
    const halfValue = multiply(Math.floor(A / 2), B);
    if (A % 2 === 1) {
        return halfValue + halfValue + B;
    } else {
        return halfValue + halfValue;
    }
}
