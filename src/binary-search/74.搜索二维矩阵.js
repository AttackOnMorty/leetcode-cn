/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// n(logn) / O(1)
function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        const num = matrix[Math.floor(mid / n)][mid % n];

        if (num === target) {
            return true;
        } else if (num < target) {
            left = mid + 1;
        } else if (num > target) {
            right = mid - 1;
        }
    }

    return false;
}

// @lc code=end
