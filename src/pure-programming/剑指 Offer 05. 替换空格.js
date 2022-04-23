/*
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."
 
限制：
0 <= s 的长度 <= 10000

链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof
 */

/**
 * @param {string} s
 * @return {string}
 */

// O(n) / O(n)
function replaceSpace(s) {
    let result = '';

    for (const char of s) {
        result += char === ' ' ? '%20' : char;
    }

    return result;
}
