/*
面试题 01.05. 一次编辑

字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。
 
示例 1:
输入: 
first = "pale"
second = "ple"
输出: True
 
示例 2:
输入: 
first = "pales"
second = "pal"
输出: False

链接：https://leetcode-cn.com/problems/one-away-lcci
*/

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */

// O(n) / O(1)
function oneEditAway(first, second) {
    const m = first.length;
    const n = second.length;

    if (Math.abs(m - n) > 1) {
        return false;
    }

    let diffCount = 0;
    if (m === n) {
        for (let i = 0; i < m; i++) {
            if (first[i] !== second[j]) {
                diffCount++;
            }
        }

        return diffCount <= 1;
    }

    diffCount = 0;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (first[i] === second[j]) {
            i++;
            j++;
        } else {
            diffCount++;
            if (m > n) {
                i++;
            } else {
                j++;
            }
        }
    }

    return diffCount <= 1;
}
