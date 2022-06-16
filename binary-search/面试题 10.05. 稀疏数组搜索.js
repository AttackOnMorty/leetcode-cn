/*
面试题 10.05. 稀疏数组搜索

稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:
 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。

示例2:
 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4

提示:
words的长度在[1, 1000000]之间

链接：https://leetcode.cn/problems/sparse-array-search-lcci
*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

// O(logn -> n) / O(1)
function findString(words, s) {
    let left = 0;
    let right = words.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const word = words[mid];

        if (word === s) {
            return mid;
        } else if (word === '') {
            if (words[left] === s) return left;
            else left++;
        } else if (word < s) {
            left = mid + 1;
        } else if (word > s) {
            right = mid - 1;
        }
    }

    return -1;
}
